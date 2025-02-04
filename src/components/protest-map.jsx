import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from "leaflet";
import { protestData } from '../data/protest-data';

// Fix for default marker icon
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function formatLink(url) {
  if (!url) return "";
  const displayText = url.replace(/(https?:\/\/)?(www\.)?/i, '');
  return `<a href="${url.startsWith('http') ? url : 'https://' + url}" target="_blank">${displayText}</a>`;
}

function formatOrganizers(organizers) {
  if (!organizers) return "";
  return organizers.split(/[,\s]+/).map(item => {
    if (item.includes('http') || item.includes('.com') || item.includes('.co') || item.includes('.org')) {
      return formatLink(item);
    }
    return item;
  }).join(' ');
}

function formatNotes(notes) {
  if (!notes) return "";
  return notes.replace(/(https?:\/\/[^\s]+)/g, url => formatLink(url));
}

export function ProtestMap({ className = "h-[600px]", showTable = false }) {
  const [loading, setLoading] = useState(true);
  const mapRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  const allProtests = protestData.flatMap(state => 
    state.protests.map(protest => ({
      ...protest,
      state: state.state
    }))
  );

  return (
    <div className={`w-full ${className}`}>
      <MapContainer
        center={[39.8283, -98.5795]}
        zoom={4}
        style={{ height: "100%", width: "100%" }}
        whenCreated={(mapInstance) => { mapRef.current = mapInstance; }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {allProtests.map((protest, index) => (
          <Marker key={index} position={protest.coords}>
            <Popup>
              <div dangerouslySetInnerHTML={{ __html: `
                <strong>${protest.address}</strong><br />
                Date: ${protest.date}<br />
                Time: ${protest.time}<br />
                Organizers: ${formatOrganizers(protest.organizers)}<br />
                Type: ${protest.type}<br />
                ${protest.notes ? `Notes: ${formatNotes(protest.notes)}<br />` : ''}
              `}} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {showTable && (
        <div className="space-y-8 mt-8">
          {protestData.map((stateData, stateIndex) => (
            <div key={stateIndex} className="overflow-x-auto">
              <h2 className="text-2xl font-bold mb-4">{stateData.state}</h2>
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Organizers</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Notes</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {stateData.protests.map((protest, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">{protest.address}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{protest.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{protest.time}</td>
                      <td className="px-6 py-4 whitespace-nowrap" dangerouslySetInnerHTML={{ __html: formatOrganizers(protest.organizers) }} />
                      <td className="px-6 py-4 whitespace-nowrap">{protest.type}</td>
                      <td className="px-6 py-4" dangerouslySetInnerHTML={{ __html: formatNotes(protest.notes) }} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}

      {loading && (
        <div className="text-center py-4">
          Loading protest data...
        </div>
      )}
    </div>
  );
}

export { protestData }; 
import { ProtestMap } from '../components/protest-map';

export default function ProtestMapPage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Protest Locations</h1>
      <ProtestMap showTable={true} />
    </div>
  );
}

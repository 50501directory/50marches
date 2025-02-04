import { ProtestMap } from '../components/protest-map';
import { Header } from '../components/Header';

export default function ProtestMapPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Protest Locations</h1>
        <ProtestMap showTable={true} />
      </div>
    </div>
  );
}

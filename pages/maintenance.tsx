import React, { useState } from 'react';

interface MaintenanceEntry {
  type:string;
  date: string;
  notes: string;
}
const maintenanceTypes = [
  'Oil Change',
  'Air Filter Replacement',
  'Brake Pad Replacement',
  // Add more types as needed
];

interface Vehicle {
  id: string;
  type: string;
  model: string;
  makeYear: number;
  odometer: number;
  maintenance: MaintenanceEntry[];
}

const ServiceMaintenance: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [newVehicle, setNewVehicle] = useState<Vehicle>({ id: '', type: '', model: '', makeYear: 0, odometer: 0, maintenance: [] });
  const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(null);
  const [newMaintenanceEntry, setNewMaintenanceEntry] = useState<MaintenanceEntry>({ type: '', date: '', notes: '' });

  const handleVehicleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewVehicle(prev => ({
      ...prev,
      [name]: name === 'makeYear' || name === 'odometer' ? parseInt(value, 10) : value
    }));
  };

  const handleAddVehicle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const vehicleToAdd = { ...newVehicle, id: Date.now().toString() }; // Simple ID generation
    setVehicles(prev => [...prev, vehicleToAdd]);
    setNewVehicle({ id: '', type: '', model: '', makeYear: 0, odometer: 0, maintenance: [] }); // Reset form
  };

  const handleSelectVehicle = (id: string) => {
    setSelectedVehicleId(id);
  };

const handleMaintenanceChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  const { name, value } = e.target;
  setNewMaintenanceEntry(prev => ({ ...prev, [name]: value }));
};

  const handleAddMaintenanceEntry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedVehicleId) return;

    const updatedVehicles = vehicles.map(vehicle => {
      if (vehicle.id === selectedVehicleId) {
        return { ...vehicle, maintenance: [...vehicle.maintenance, newMaintenanceEntry] };
      }
      return vehicle;
    });

    setVehicles(updatedVehicles);
  setNewMaintenanceEntry({ type: '', date: '', notes: '' }); // Reset form with type included
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form onSubmit={handleAddVehicle} className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">Add Vehicle:</h2>
        <input name="type" value={newVehicle.type} onChange={handleVehicleChange} placeholder="Type" required className="input" />
        <input name="model" value={newVehicle.model} onChange={handleVehicleChange} placeholder="Model" required className="input" />
        <input type="number" name="makeYear" value={newVehicle.makeYear.toString()} onChange={handleVehicleChange} placeholder="Make Year" required className="input" />
        <input type="number" name="odometer" value={newVehicle.odometer.toString()} onChange={handleVehicleChange} placeholder="Odometer" required className="input" />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
          Add Vehicle
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Vehicles</h2>
        {vehicles.length === 0 ? (
          <p className="text-gray-600">No vehicles added yet.</p>
        ) : (
          <ul>
            {vehicles.map((vehicle) => (
              <li key={vehicle.id} className="bg-white p-4 rounded-md shadow-md mb-4" onClick={() => handleSelectVehicle(vehicle.id)}>
                <h3 className="text-lg font-bold">{vehicle.model} - {vehicle.makeYear}</h3>
                <p>Type: {vehicle.type}</p>
                <p>Odometer: {vehicle.odometer}</p>
                {/* Display maintenance entries if this vehicle is selected */}
                {selectedVehicleId === vehicle.id && (
                  <>
                   <form onSubmit={handleAddMaintenanceEntry} className="mt-4">
  <select name="type" value={newMaintenanceEntry.type} onChange={handleMaintenanceChange} required className="input">
    <option value="">Select Maintenance Type</option>
    {maintenanceTypes.map((type, index) => (
      <option key={index} value={type}>{type}</option>
    ))}
  </select>
  <input type="date" name="date" value={newMaintenanceEntry.date} onChange={handleMaintenanceChange} required className="input" />
  <input type="text" name="notes" value={newMaintenanceEntry.notes} onChange={handleMaintenanceChange} placeholder="Notes" required className="input" />
  <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors duration-300 mt-2">
    Add Maintenance Entry
  </button>
</form>
                    <ul className="mt-4">
                      {vehicle.maintenance.map((entry, index) => (
                        <li key={index} className="bg-gray-100 p-2 rounded-md shadow-sm mb-2">
                          <p>Date: {entry.date}</p>
                          <p>Notes: {entry.notes}</p>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ServiceMaintenance;

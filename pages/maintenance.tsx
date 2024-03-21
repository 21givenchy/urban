import React, { useState } from 'react';

interface MaintenanceEntry {
  type: string;
  date: string;
  notes: string;
}

const ServiceMaintenance: React.FC = () => {
  const [maintenanceEntries, setMaintenanceEntries] = useState<MaintenanceEntry[]>([]);
  const [newEntry, setNewEntry] = useState<MaintenanceEntry>({ type: '', date: '', notes: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewEntry((prevEntry) => ({ ...prevEntry, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMaintenanceEntries((prevEntries) => [...prevEntries, newEntry]);
    setNewEntry({ type: '', date: '', notes: '' });
  };

  const handleTaskClick = (task: string) => {
    setNewEntry((prevEntry) => ({ ...prevEntry, type: task }));
  };

  const isDatePast = (date: string) => {
    const today = new Date();
    const entryDate = new Date(date);
    return entryDate < today;
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Service Maintenance</h1>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Select a Task:</h2>

        <div className="flex flex-col grid grid-cols-3 gap-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
            onClick={() => handleTaskClick('Oil Change')}
          >
            Oil Change
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
            onClick={() => handleTaskClick('Air Filter Replacement')}
          >
            Air Filter Replacement
          </button>

          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
            onClick={() => handleTaskClick('Other')}
          >
            Other
          </button>
          
        </div>
      </div>
      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="type" className="block font-bold mb-2">
            Maintenance Type:
          </label>
          <input
            type="text"
            id="type"
            name="type"
            value={newEntry.type}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block font-bold mb-2">
            Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={newEntry.date}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="notes" className="block font-bold mb-2">
            Notes:
          </label>
          <textarea
            id="notes"
            name="notes"
            value={newEntry.notes}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Add Maintenance Entry
        </button>
      </form>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Maintenance Entries</h2>
        {maintenanceEntries.length === 0 ? (
          <p className="text-gray-600">No maintenance entries yet.</p>
        ) : (
          <ul>
            {maintenanceEntries.map((entry, index) => (
              <li
                key={index}
                className="bg-white p-4 rounded-md shadow-md mb-4"
              >
                <h3 className="text-lg font-bold">{entry.type}</h3>
                <p className={`text-gray-600 ${isDatePast(entry.date) ? 'text-green-500' : 'text-red-500'}`}>
                  Date: {entry.date}
                </p>
                <p className="text-gray-600">Notes: {entry.notes}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ServiceMaintenance;
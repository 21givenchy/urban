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

  return (
    <div>
      <h1>Service Maintenance</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="type">Maintenance Type:</label>
          <input
            type="text"
            id="type"
            name="type"
            value={newEntry.type}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={newEntry.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="notes">Notes:</label>
          <textarea
            id="notes"
            name="notes"
            value={newEntry.notes}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Maintenance Entry</button>
      </form>
      <div>
        <h2>Maintenance Entries</h2>
        {maintenanceEntries.length === 0 ? (
          <p>No maintenance entries yet.</p>
        ) : (
          <ul>
            {maintenanceEntries.map((entry, index) => (
              <li key={index}>
                <h3>{entry.type}</h3>
                <p>Date: {entry.date}</p>
                <p>Notes: {entry.notes}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ServiceMaintenance;
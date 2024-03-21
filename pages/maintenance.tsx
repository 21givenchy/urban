import React, { useState } from 'react';

interface MaintenanceEntry {
  type: string;
  date: string;
  notes: string;
}

interface WorkOrder {
  description: string;
  dueDate: string;
  status: string;
}

interface Reminder {
  title: string;
  dueDate: string;
}

interface Inspection {
  type: string;
  date: string;
  result: string;
}

const ServiceMaintenance: React.FC = () => {
  const [maintenanceEntries, setMaintenanceEntries] = useState<MaintenanceEntry[]>([]);
  const [newEntry, setNewEntry] = useState<MaintenanceEntry>({ type: '', date: '', notes: '' });

  const [workOrders, setWorkOrders] = useState<WorkOrder[]>([]);
  const [newWorkOrder, setNewWorkOrder] = useState<WorkOrder>({ description: '', dueDate: '', status: '' });

  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [newReminder, setNewReminder] = useState<Reminder>({ title: '', dueDate: '' });

  const [inspections, setInspections] = useState<Inspection[]>([]);
  const [newInspection, setNewInspection] = useState<Inspection>({ type: '', date: '', result: '' });

  // Maintenance-related functions
  const handleMaintenanceChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewEntry((prevEntry) => ({ ...prevEntry, [name]: value }));
  };

  const handleMaintenanceSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMaintenanceEntries((prevEntries) => [...prevEntries, newEntry]);
    setNewEntry({ type: '', date: '', notes: '' });
  };

  // Work Order-related functions
  const handleWorkOrderChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewWorkOrder((prevOrder) => ({ ...prevOrder, [name]: value }));
  };

  const handleWorkOrderSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWorkOrders((prevOrders) => [...prevOrders, newWorkOrder]);
    setNewWorkOrder({ description: '', dueDate: '', status: '' });
  };

  // Reminder-related functions
  const handleReminderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewReminder((prevReminder) => ({ ...prevReminder, [name]: value }));
  };

  const handleReminderSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setReminders((prevReminders) => [...prevReminders, newReminder]);
    setNewReminder({ title: '', dueDate: '' });
  };

  // Inspection-related functions
  const handleInspectionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewInspection((prevInspection) => ({ ...prevInspection, [name]: value }));
  };

  const handleInspectionSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInspections((prevInspections) => [...prevInspections, newInspection]);
    setNewInspection({ type: '', date: '', result: '' });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Service Management</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Maintenance</h2>
        {/* Maintenance section */}
        {/* ... */}
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Work Orders</h2>
        {/* Work Order section */}
        <form onSubmit={handleWorkOrderSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="workOrderDescription" className="block font-bold mb-2">
              Description:
            </label>
            <textarea
              id="workOrderDescription"
              name="description"
              value={newWorkOrder.description}
              onChange={handleWorkOrderChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="workOrderDueDate" className="block font-bold mb-2">
              Due Date:
            </label>
            <input
              type="date"
              id="workOrderDueDate"
              name="dueDate"
              value={newWorkOrder.dueDate}
              onChange={handleWorkOrderChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="workOrderStatus" className="block font-bold mb-2">
              Status:
            </label>
            <input
              type="text"
              id="workOrderStatus"
              name="status"
              value={newWorkOrder.status}
              onChange={handleWorkOrderChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Add Work Order
          </button>
        </form>
        {workOrders.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-2">Existing Work Orders:</h3>
            <ul>
              {workOrders.map((order, index) => (
                <li key={index} className="bg-white p-4 rounded-md shadow-md mb-4">
                  <p className="font-bold">Description: {order.description}</p>
                  <p>Due Date: {order.dueDate}</p>
                  <p>Status: {order.status}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Reminders</h2>
        {/* Reminder section */}
        <form onSubmit={handleReminderSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="reminderTitle" className="block font-bold mb-2">
              Title:
            </label>
            <input
              type="text"
              id="reminderTitle"
              name="title"
              value={newReminder.title}
              onChange={handleReminderChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="reminderDueDate" className="block font-bold mb-2">
              Due Date:
            </label>
            <input
              type="date"
              id="reminderDueDate"
              name="dueDate"
              value={newReminder.dueDate}
              onChange={handleReminderChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Add Reminder
          </button>
        </form>
        {reminders.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-2">Existing Reminders:</h3>
            <ul>
              {reminders.map((reminder, index) => (
                <li key={index} className="bg-white p-4 rounded-md shadow-md mb-4">
                  <p className="font-bold">{reminder.title}</p>
                  <p>Due Date: {reminder.dueDate}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Inspections</h2>
        {/* Inspection section */}
        <form onSubmit={handleInspectionSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="inspectionType" className="block font-bold mb-2">
              Type:
            </label>
            <input
              type="text"
              id="inspectionType"
              name="type"
              value={newInspection.type}
              onChange={handleInspectionChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="inspectionDate" className="block font-bold mb-2">
              Date:
            </label>
            <input
              type="date"
              id="inspectionDate"
              name="date"
              value={newInspection.date}
              onChange={handleInspectionChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="inspectionResult" className="block font-bold mb-2">
              Result:
            </label>
            <textarea
              id="inspectionResult"
              name="result"
              value={newInspection.result}
              onChange={handleInspectionChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Add Inspection
          </button>
        </form>
        {inspections.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-2">Previous Inspections:</h3>
            <ul>
              {inspections.map((inspection, index) => (
                <li key={index} className="bg-white p-4 rounded-md shadow-md mb-4">
                  <p className="font-bold">{inspection.type}</p>
                  <p>Date: {inspection.date}</p>
                  <p>Result: {inspection.result}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceMaintenance;
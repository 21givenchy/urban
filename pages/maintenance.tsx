
import React, { useState, useEffect } from 'react';

interface Task {
  service: string;
  date: string;
  notes: string;
  completed: boolean;
}

const services = [
  "Air Filter Replacement",
  "Alternator Replacement",
  "Ball Joint Replacement",
  "Tire Replacement",
  "Oil Change",
  // Add other services as needed
];

export default function MaintenancePage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    // This effect runs only on the client side after the component mounts
    const service = localStorage.getItem('selectedService');
    setSelectedService(service);

    if (service) {
      setDate(localStorage.getItem(`${service}-date`) || '');
      setNotes(localStorage.getItem(`${service}-notes`) || '');
    }

    const loadedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(loadedTasks);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask: Task = { service: selectedService || 'Default Service', date, notes, completed: false };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);

    // Save tasks and current task details to localStorage
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    if (selectedService) {
      localStorage.setItem(`${selectedService}-date`, date);
      localStorage.setItem(`${selectedService}-notes`, notes);
    }
  };

  const markAsComplete = (index: number) => {
    const updatedTasks = tasks.map((task, i) => i === index ? { ...task, completed: true } : task);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div>
      <h1>Maintenance</h1>
      <ul>
        {services.map((service, index) => (
          <li key={index} onClick={() => setSelectedService(service)}>
            {service}
          </li>
        ))}
      </ul>
      {selectedService && (
        <form onSubmit={handleSubmit}>
          <h2>{selectedService}</h2>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add notes"
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}
      <div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task.service} - {task.date} - {task.notes}
              {!task.completed && (
                <button onClick={() => markAsComplete(index)}>Mark as Complete</button>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* Sections for Vehicle Inspection, Work Order, and Maintenance */}
    </div>
  );
}
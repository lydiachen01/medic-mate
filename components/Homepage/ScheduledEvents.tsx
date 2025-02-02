'use client'
import React, { useState } from 'react';

type Event = {
  medication: string;
  dosage: string;
  time: string;
};

type EventTabProps = {
  event: Event;
  onCheck: (event: Event) => void;
  checked: boolean;
};

const EventTab: React.FC<EventTabProps> = ({ event, onCheck, checked }) => {
  const handleCheck = () => {
    onCheck(event); // Notify parent when checked
  };

  return (
    <div
      className={`p-3 border rounded-lg shadow-md bg-white w-full flex items-center justify-between transition-opacity duration-500 ease-out ${
        checked ? 'hidden' : 'opacity-100'
      }`}
    >
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          className="w-5 h-5"
          checked={checked}
          onChange={handleCheck}
        />
        <div className="flex flex-col">
          <p className="font-semibold text-lg text-gray-900">{event.medication}</p>
          <p className="text-blue-500 text-sm font-medium">{event.dosage}</p>
        </div>
      </div>
      <p className="text-gray-500 text-lg font-semibold">{event.time}</p>
    </div>
  );
};

type EventListProps = {
  events: Event[];
};

const EventList: React.FC<EventListProps> = ({ events }) => {
  const [checkedEvents, setCheckedEvents] = useState<Set<Event>>(new Set());

  const handleCheck = (event: Event) => {
    setCheckedEvents((prevChecked) => {
      const updatedChecked = new Set(prevChecked);
      if (updatedChecked.has(event)) {
        updatedChecked.delete(event);
      } else {
        updatedChecked.add(event);
      }
      return updatedChecked;
    });
  };

  const allChecked = events.length > 0 && events.every((event) => checkedEvents.has(event));

  return (
    <>
      <div className="max-h-[30vh] overflow-y-auto flex flex-col gap-2 p-2 bg-gray-100 rounded-lg shadow-inner scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {events.map((event, index) => (
          <EventTab key={index} event={event} onCheck={handleCheck} checked={checkedEvents.has(event)} />
        ))}
      </div>
      {allChecked && (
        <div className="mt-4">
          Great work! All done!
        </div>
      )}
    </>
  );
};

export default EventList;

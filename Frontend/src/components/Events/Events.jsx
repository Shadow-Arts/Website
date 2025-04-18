// src/components/Events/Events.jsx
import React from 'react';
import EventCard from './EventCard';
import './Events.css';

const Events = () => {
  const events = [
    {
      id: 1,
      name: 'Event-1',
      photo: '/images/Event1.jpg',
      details: 'Nurture your child\'s creativity with our Drawing Class for Kids! Fun-filled lessons inspire imagination and develop fundamental drawing skills.',
    },
    {
      id: 2,
      name: 'Event-2',
      photo: './images/Event2.jpg',
      details: 'Discover your artistic potential with our pencil sketching classes for all ages. Unlock creativity and master techniques in a supportive environment.',
    },
  ];

  return (
    <div className="events-container">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default Events;

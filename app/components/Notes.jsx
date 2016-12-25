import React from 'react';

const notes = [
  {
    id: '1',
    task: 'Learn React'
  },
  {
    id: '2',
    task: 'Do the laundry'
  }
];

export default () => (
  <ul>
    {notes.map(note =>
      <li key={note.id}>{note.task}</li>
    )}
  </ul>
)

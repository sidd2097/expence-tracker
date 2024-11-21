import React from "react";

const EntriesList = ({ entries, deleteEntry }) => (
  <div>
    <h2>Entries</h2>
    <ul>
      {entries.map((entry) => (
        <li key={entry.id}>
          <span>{entry.date} - </span>
          <span>{entry.description} - </span>
          <span>${entry.amount.toFixed(2)} - </span>
          <span>{entry.type}</span>
          <button onClick={() => deleteEntry(entry.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default EntriesList;

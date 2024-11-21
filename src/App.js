import React, { useState } from "react";
import Header from "./components/Header";
import AddEntryForm from "./components/AddEntryForm";
import EntriesList from "./components/EntriesList";
import NetBalance from "./components/NetBalance";

const App = () => {
  const [entries, setEntries] = useState([]);

  const addEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  const deleteEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <AddEntryForm addEntry={addEntry} />
      <NetBalance entries={entries} />
      <EntriesList entries={entries} deleteEntry={deleteEntry} />
    </div>
  );
};

export default App;

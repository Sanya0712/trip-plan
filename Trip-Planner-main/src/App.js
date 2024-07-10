import { useState } from "react";
import Logo from "./Components/Logo";
import InputFields from "./Components/InputFields";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";

//Main App Component
export default function App() {
  //For passing this items array into packing list (liftup State)
  const [items, setItems] = useState([]);

  function handleAdditems(item) {
    setItems((items) => [...items, item]);
  }

  //For working X (deleting the items)
  function deleteItemsHandler(id1) {
    setItems((items) => items.filter((item) => item.id !== id1));
  }

  //For CheckBox functionality
  function toggleHandler(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  // For Clear List Button
  function clearListHandler() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <InputFields onAdditems={handleAdditems} />
      <PackingList
        onDeleteitems={deleteItemsHandler}
        onToggle={toggleHandler}
        items={items}
        onClear={clearListHandler}
      />
      <Stats items={items} />
    </div>
  );
}

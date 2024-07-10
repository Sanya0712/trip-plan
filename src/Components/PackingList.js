//Rendering List
import Item from "./Item";
import { useState } from "react";

export default function PackingList({
  items,
  onDeleteitems,
  onToggle,
  onClear,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onToggle={onToggle}
            onDeleteitems={onDeleteitems}
          />
        ))}
      </ul>

      {items.length > 0 && (
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="description"> Sort By Description</option>
            <option value="input"> Sort By Input Order</option>
            <option value="packed"> Sort By Packed Status</option>
          </select>
          <button onClick={onClear}>Clear List </button>
        </div>
      )}
    </div>
  );
}

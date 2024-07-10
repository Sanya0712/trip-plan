import { useState } from "react";

//Form Submission And Handling Input Fields Component
export default function InputFields({ onAdditems }) {
  //For Inputing Items
  const [description, setDescription] = useState("");

  //For Setting Qty of Items
  const [quantity, setQuantity] = useState(1);

  //For Submit Handler
  function SubmitHandler(e) {
    e.preventDefault();
    if (!description) return;
    const NewItem = { description, quantity, packed: false, id: Date.now() };

    onAdditems(NewItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={SubmitHandler}>
      <h3>Have You Packed Your Items For The trip😃?</h3>

      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item.."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </form>
  );
}

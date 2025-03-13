import { useState } from "react";
import List from "./component/List.jsx"
import "./App.css";

function App() {
  const [items, setItems] = useState([]); // Renamed `item` to `items`
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setItems([...items, { id: Date.now(), name: inputValue }]); // Renamed `setItem` to `setItems`
      setInputValue("");
    }
  };

  return (
    <>
      <div className="ShoppingList">
        <h1>Shopping List</h1>
        <div className="AddItem">
          <form onSubmit={handleSubmit}>
            <input
              className="Input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)} // Fixed event handler
              type="text"
              placeholder="Add an item"
            />
            <button className="Submit" type="submit">
              Add
            </button>
          </form>
        </div>
        {items.map((item) => (
          <List key={item.id} item={item} items={items} setItems={setItems} />
        ))}
      </div>
    </>
  );
}

export default App;

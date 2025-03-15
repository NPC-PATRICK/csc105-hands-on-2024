import { useState } from "react";
import List from "./component/List.jsx";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setItems([...items, { id: Date.now(), name: input.trim() }]);
      setInput("");
    }
  };

  return (
    <div className="ShoppingList">
      <h1>Shopping List</h1>
      <form className="AddItem" onSubmit={handleSubmit}>
        <input
          className="Input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Add an item"
        />
        <button className="Submit" type="submit">
          Add
        </button>
      </form>

      {items.map((item) => (
        <List key={item.id} item={item} items={items} setItems={setItems} />
      ))}
    </div>
  );
}

export default App;
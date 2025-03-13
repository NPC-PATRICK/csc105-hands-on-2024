import { useState } from "react";

function List({ item, items, setItems }) {
  const [isGreen, setIsGreen] = useState(false);

  function removeItem(e) {
    e.stopPropagation();
    setItems(items.filter((i) => i !== item));
  }

  function edit_button(e) {
    e.stopPropagation();
    setItems(
      items.map((i) => {
        if (i === item) {
          return { ...i, name: prompt("Enter new item name") };
        }
        return i;
      })
    );
  }

  return (
    <div
      className="list_box"
      onClick={() => setIsGreen(!isGreen)}
      style={{
        backgroundColor: isGreen ? "rgba(214, 255, 196, 0.87)" : "white",
      }}
    >
      <p className="item_name">{item.name}</p>
      <button onClick={edit_button} className="edit_button">
        Edit
      </button>
      <button onClick={removeItem} className="remove_button">
        Remove
      </button>
    </div>
  );
}

export default List;
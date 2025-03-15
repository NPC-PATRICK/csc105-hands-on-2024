import { useState } from "react";

function List({ item, items, setItems }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(item.name);

  function removeItem(e) {
    e.stopPropagation();
    setItems(items.filter((i) => i.id !== item.id));
  }

  function toggleEdit(e) {
    e.stopPropagation();
    setIsEditing(true);
  }

  function handleEditChange(e) {
    setNewName(e.target.value);
  }

  function handleEditBlur() {
    if (newName.trim() !== "") {
      setItems(
        items.map((i) =>
          i.id === item.id ? { ...i, name: newName.trim() } : i
        )
      );
    }
    setIsEditing(false);
  }

  return (
    <div
      className={`list_box ${isChecked ? "checked" : ""}`}
      onClick={() => setIsChecked(!isChecked)}
    >
      {isEditing ? (
        <input
          className="edit_input"
          value={newName}
          onChange={handleEditChange}
          onBlur={handleEditBlur}
          autoFocus
        />
      ) : (
        <p className={`item_name ${isChecked ? "strikethrough" : ""}`} onClick={toggleEdit}>
          {item.name}
        </p>
      )}
      <button onClick={toggleEdit} className="editItem">Edit</button>
      <button onClick={removeItem} className="remove_button">Remove</button>
    </div>
  );
}

export default List;
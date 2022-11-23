import React, { useState } from "react";
import { Alert } from "./Alert";
import { List } from "./List";

function App2() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "please enter value", "danger");
    } else if (name && isEditing) {
      const newEdit = list.find((item) => item.id === editID);
      newEdit.title = name;
      setName("");
      showAlert(true, "success edit", "success");
      setIsEditing(false);
      // editing
    } else {
      showAlert(true, "item added to the list", "success");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const clearItems = () => {
    showAlert(true, "empty list", "danger");
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "item removed", "danger");
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id, title) => {
    setName(title);
    setEditID(id);
    setIsEditing(true);
  };

  return (
    <>
      <section className="section-center">
        <form className="grocery-form" onSubmit={handleSubmit}>
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} list={list} />
          )}
          <h3>grocery bud</h3>
          <div className="form-control">
            <input
              type="text"
              className="grocery"
              placeholder="e.g. eggs"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <button type="submit" className="submit-btn">
              {isEditing ? "edit" : "submit"}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div className="grocery-container">
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <button className="clear-btn" onClick={() => clearItems()}>
              clear items
            </button>
          </div>
        )}
      </section>
    </>
  );
}
export default App2;

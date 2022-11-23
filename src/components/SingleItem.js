import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export const SingleItem = ({ list, editInput, deleteItem }) => {
  return list.map((item) => {
    const { id, input } = item;
    return (
      <article key={id} id={id} className="grocery-item">
        <p className="title">{input}</p>
        <div className="btn-container">
          <button
            type="button"
            className="edit-btn"
            onClick={editInput}
            value={input}
          >
            <FaEdit />
          </button>
          <button type="button" className="delete-btn" onClick={deleteItem}>
            <FaTrash />
          </button>
        </div>
      </article>
    );
  });
};

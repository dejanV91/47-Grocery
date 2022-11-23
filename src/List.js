import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export const List = ({ items, removeItem }) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item;

        return (
          <article key={id} className="grocery-item">
            <p className="title">{title}</p>
            <div className="btn-container">
              <button className="edit-btn">
                <FaEdit />
              </button>
              <button className="delete-btn" onClick={() => removeItem(id)}>
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

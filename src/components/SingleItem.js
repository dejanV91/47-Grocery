import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export const SingleItem = ({ list }) => {
  return list.map((item, index) => {
    return (
      <article key={index} className="grocery-item">
        <p className="title">{item}</p>
        <div className="btn-container">
          <button type="button" className="edit-btn">
            <FaEdit />
          </button>
          <button type="button" className="delete-btn">
            <FaTrash />
          </button>
        </div>
      </article>
    );
  });
};

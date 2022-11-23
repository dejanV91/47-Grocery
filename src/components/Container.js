import React from "react";
import { SingleItem } from "./SingleItem";

export const Container = ({
  list,
  setList,
  setShow,
  editInput,
  deleteItem,
}) => {
  const clearAllItems = () => {
    setList([]);
    setShow(false);
  };

  return (
    <div className="grocery-container">
      <div className="grocery-list">
        <SingleItem list={list} editInput={editInput} deleteItem={deleteItem} />
      </div>
      <button className="clear-btn" onClick={clearAllItems}>
        clear items
      </button>
    </div>
  );
};

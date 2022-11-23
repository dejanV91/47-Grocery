import React from "react";
import { SingleItem } from "./SingleItem";
import text from "../shared/messages";

export const Container = ({
  list,
  setList,
  setShow,
  editInput,
  deleteItem,
  setMessage,
  setDanger,
  setAlertText,
}) => {
  const clearAllItems = () => {
    setMessage(text.danger.empty);
    setDanger(false);
    setAlertText(true);
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

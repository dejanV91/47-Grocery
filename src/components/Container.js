import React, { useEffect, useState } from "react";
import { SingleItem } from "./SingleItem";

export const Container = ({ list, setList, setShow, editInput }) => {
  const clearAllItems = () => {
    setList([]);
    setShow(false);
  };

  return (
    <div className="grocery-container">
      <div className="grocery-list">
        <SingleItem list={list} setList={setList} editInput={editInput} />
      </div>
      <button className="clear-btn" onClick={clearAllItems}>
        clear items
      </button>
    </div>
  );
};

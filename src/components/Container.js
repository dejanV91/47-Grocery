import React, { useEffect, useState } from "react";
import { SingleItem } from "./SingleItem";

export const Container = ({ list }) => {
  return (
    <div className="grocery-container">
      <div className="grocery-list">
        <SingleItem list={list} />
      </div>
      <button className="clear-btn">clear items</button>
    </div>
  );
};

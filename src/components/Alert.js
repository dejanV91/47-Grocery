import React from "react";

export const Alert = ({ message, danger }) => {
  return (
    <p className={`alert ${danger ? "alert-success" : "alert-danger"}`}>
      {message}
    </p>
  );
};

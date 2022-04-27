import React, { useState } from "react";

function ItemList({ id, text, onCheck, completed, onDelete }) {
  return (
    <div className="items">
      <div className="left">
        <input
          className="checkbox"
          type="checkbox"
          onClick={() => onCheck(id)}
        />
        <p
          onClick={() => onCheck(id)}
          style={
            completed
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {text}
        </p>
      </div>
      <button
        className="delete"
        onClick={() => {
          onDelete(id);
        }}
      >
        x
      </button>
    </div>
  );
}

export default ItemList;

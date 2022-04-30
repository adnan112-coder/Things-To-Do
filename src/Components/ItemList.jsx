import React, { useState } from "react";

function ItemList({ id, text, onCheck, completed, onDelete }) {
  return (
    <div className="items">
      <div className="left">
        <input
          className="checkbox3"
          type="checkbox"
          onClick={() => onCheck(id)}
          checked={completed}
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
          const item = { id, completed, title: text };
          onDelete(item);
        }}
      >
        x
      </button>
    </div>
  );
}

export default ItemList;

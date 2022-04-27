import React, { useState } from "react";

function Input(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input
        onChange={handleChange}
        type="text"
        value={inputText}
        placeholder="Enter new task"
      />
      <button
        className="add"
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>ADD TASK</span>
      </button>
    </div>
  );
}

export default Input;

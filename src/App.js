import React, { useEffect, useState } from "react";
import "./App.css";
import Input from "./Components/Input.jsx";
import ItemList from "./Components/ItemList";
import { nanoid } from "nanoid";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const URL = "https://jsonplaceholder.typicode.com/users/1/todos";
      const res = await fetch(URL);
      const data = await res.json();
      setItems(data);
    };
    fetchTodos();
  }, []);

  useEffect(() => {
    console.log(items);
  }, [items]);

  function addItem(inputText) {
    setItems((prevItems) => {
      return [
        ...prevItems,
        { title: inputText, id: nanoid(), completed: false },
      ];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item) => {
        return item.id !== id;
      });
    });
  }

  function getCompletedItemLength() {
    return items.filter((item) => item.completed).length;
  }

  function checkItem(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  return (
    <div className="container">
      <h3>THINGS TO DO:</h3>
      <hr />
      {items.length === 0 ? (
        <div className="bg-text">Looks like you're Free today!</div>
      ) : null}
      <div>
        {items.map((item) => (
          <ItemList
            key={item.id}
            id={item.id}
            text={item.title}
            onCheck={checkItem}
            onDelete={deleteItem}
            completed={item.completed}
          />
        ))}
      </div>
      <hr />
      <h3>DONE:{getCompletedItemLength()}</h3>
      <Input onAdd={addItem} />
    </div>
  );
}

export default App;

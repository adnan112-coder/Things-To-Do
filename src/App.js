import React, { useEffect, useState } from "react";
import "./App.css";
import Input from "./Components/Input.jsx";
import ItemList from "./Components/ItemList";
import Modal from "./Components/Modal";
import { nanoid } from "nanoid";

function App() {
  const [items, setItems] = useState([]);

  const [showModal, setShowModal] = useState(false);

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

  function deleteItem(item) {
    setItems((prevItems) => {
      return prevItems.filter((todo) => {
        return todo.id !== item.id;
      });
    });
  }

  function handleDeleteItem(item) {
    if (item.completed) deleteItem(item);
    else setShowModal(item);
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
            onDelete={handleDeleteItem}
            completed={item.completed}
          />
        ))}
      </div>
      <hr />
      <h3>DONE:{getCompletedItemLength()}</h3>
      <Input onAdd={addItem} />
      {showModal && (
        <Modal
          deleteItem={deleteItem}
          setShowModal={setShowModal}
          item={showModal}
        />
      )}
    </div>
  );
}

export default App;

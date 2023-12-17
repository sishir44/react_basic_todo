import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
 
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    //console.log(`New Item added: ${itemName} Date is:${itemDueDate}`);

    // adding new items in existing in an array
     const newTodoItems = [
       ...todoItems, // old items 
       { name:itemName, dueDate:itemDueDate}, // new items
     ];
     setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    //console.log(`Item deleted: ${todoItemName}`);
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName)
    setTodoItems(newTodoItems);
  }

  return (
    <React.Fragment>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 &&<WelcomeMessage/>}
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
      </center>
    </React.Fragment>
  );
}

export default App;

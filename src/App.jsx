import { useState } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import { todoItemsContext } from "./store/todo_items_store"; 

function App() {
 
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    // adding new items in existing in an array
     setTodoItems((currValue) => [
        ...currValue, 
        { name:itemName, dueDate:itemDueDate},
    ]);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName)
    setTodoItems(newTodoItems);
  }

  return (
    <todoItemsContext.Provider value={{
      todoItems,
      addNewItem,
      deleteItem
    }}>
      <center className="todo-container">
        <AppName />
        <AddTodo/>
        <WelcomeMessage/>
        <TodoItems></TodoItems>
      </center>
    </todoItemsContext.Provider>
  );
}

export default App;

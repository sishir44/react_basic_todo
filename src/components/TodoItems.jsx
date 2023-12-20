import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { todoItemsContext } from "../store/todo_items_store";

const TodoItems = () => {

  const { todoItems } = useContext(todoItemsContext);

  return (
    <div className={styles.items_container}>
      {todoItems.map((item, index) => (
        <TodoItem key={index} todoName={item.name} todoDate={item.dueDate}/>
      ))}
    </div>
  );
};

export default TodoItems;

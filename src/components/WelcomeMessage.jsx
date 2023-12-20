import styles from "./WelcomeMesasge.module.css";
import { todoItemsContext } from "../store/todo_items_store";
import { useContext } from "react";

const WelcomeMessage =()=> {

  const { todoItems } = useContext(todoItemsContext);
  return (
    todoItems.length === 0 && <p className={styles.welcome}>Welcome Your Day!!!</p>
  )

};

export default WelcomeMessage;
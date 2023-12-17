import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import PropTypes from 'prop-types';

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles.items_container}>
      {todoItems.map((item, index) => (
        <TodoItem key={index} todoName={item.name} todoDate={item.dueDate} onDeleteClick={onDeleteClick}/>
      ))}
    </div>
  );
};

TodoItems.propTypes = {
  todoItems: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
}
export default TodoItems;

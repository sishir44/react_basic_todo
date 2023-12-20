import PropTypes from 'prop-types';
import { AiFillDelete } from "react-icons/ai";
import { todoItemsContext } from "../store/todo_items_store";
import { useContext } from 'react';

function TodoItem({ todoName, todoDate }) {

  const { deleteItem } = useContext(todoItemsContext);

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button" onClick={()=>deleteItem(todoName)}>
          <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
TodoItem.propTypes = {
  todoName: PropTypes.string.isRequired,
  todoDate: PropTypes.string.isRequired, 
};

export default TodoItem;

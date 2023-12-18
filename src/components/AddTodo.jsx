import PropTypes from "prop-types";
import { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  // passing input name and date in button
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState(getCurrentDate());

  // to get default date 
  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = `${currentDate.getMonth() + 1}`.padStart(2, '0');
    const day = `${currentDate.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const todoHandleName = (event) => {
    //get value of name
    setTodoName(event.target.value);
  };

  const todoHandleDate = (event) => {
    //get value of date
    setTodoDate(event.target.value);
  };

  // click add button,calling onNewItem(props from another component)&pass values in that prop
  const handleAddButtonClick = () => {
   if (!todoName) {
      alert("Please Enter Name!");
    } else {
      onNewItem(todoName, todoDate); // values adding in this prop
    }
    setTodoName("");
    setTodoDate(getCurrentDate());
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            value={todoName}
            placeholder="Enter Todo Here"
            onChange={todoHandleName}
          />
        </div>
        <div className="col-4">
          <input type="date" value={todoDate} onChange={todoHandleDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button" onClick={handleAddButtonClick}><BiMessageAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

AddTodo.propTypes = {
  onNewItem: PropTypes.func.isRequired,
};

export default AddTodo;

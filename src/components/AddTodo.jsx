import { useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { todoItemsContext } from "../store/todo_items_store";
import { useContext } from "react";

function AddTodo() {
  
  const { addNewItem } = useContext(todoItemsContext);
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  // to get default date
  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = `${currentDate.getMonth() + 1}`.padStart(2, "0");
    const day = `${currentDate.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  getCurrentDate();

  // click add button,calling onNewItem(props from another component)&pass values in that prop
  const handleAddButtonClick = (event) => {
    event.preventDefault();

    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";

    if (!todoName) {
      alert("Please Enter Name!");
    } else if (!todoDate) {
      alert("Please Select Date!");
    }
     else {
      addNewItem(todoName, todoDate); // values adding in this prop
    }
    
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClick}>
        <div className="col-6">
          <input
            ref={todoNameElement}
            type="text"
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input ref={todoDateElement} type="date" />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;

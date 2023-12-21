import { createContext, useReducer } from "react";
import PropTypes from 'prop-types';

// create new component as todoItemsContext
export const todoItemsContext = createContext({
  todoItems:[],
  addNewItem: ()=>{},
  deleteItem: ()=>{}
}); // end


const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;

  if(action.type === "NEW_ITEM") {
    newTodoItems = [
          ...currTodoItems, 
         { name:action.payload.itemName, dueDate:action.payload.itemDueDate},
       ];
  } else if(action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter((item) => item.name !== action.payload.itemName)
  }
  return newTodoItems;
}

// create new component as TodoItemsContextProvider
const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type : "NEW_ITEM",
      payload:{
        itemName,
        itemDueDate
      }
    };
    dispatchTodoItems(newItemAction);
  };


  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type : "DELETE_ITEM",
      payload:{
        itemName: todoItemName
      }
    };
    dispatchTodoItems(deleteItemAction);
  }; // end

  return (
    <todoItemsContext.Provider value={{
        todoItems,
        addNewItem,
        deleteItem
      }}>
        {children}
    </todoItemsContext.Provider>
  );
};

TodoItemsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TodoItemsContextProvider;
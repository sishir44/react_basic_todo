import { createContext } from "react";

export const todoItemsContext = createContext({
  todoItems:[],
  addNewItem: ()=>{},
  deleteItem: ()=>{}
});
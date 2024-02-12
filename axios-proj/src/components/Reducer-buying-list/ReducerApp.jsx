import React from "react";
import { useReducer } from "react";
import { ItemContextRef } from "../../store/Context-BuyItem";
import InputPlaceHolder from "./InputPlaceHolder";
import WelcomMessage from "./WelcomeMessage";
import BuyingList from "./BuyingList";

//pure function
const reducerFun = (currentState, action) => {
  let newTodoItems = currentState;

  switch(action.type){
    case "NEW_ITEM_ADD":
    {
      return newTodoItems = [
            ...currentState,
            {
              title: action.payload.title,
              date: action.payload.date,
              isDone: action.payload.isDone,
              id: action.payload.id
            },
          ];  
    }
    case "EDIT_FROM_LIST":
        {
          return currentState.map((item) => {
            if (item.id === action.payload.task.id) {
              return action.payload.task;
            } else {
              return item;
            }
          })  
        }
    case "DELETE_FROM_LIST" :
        {
          return  newTodoItems = currentState.filter((item) => item.id !== action.payload.id); //filter out the selected
        }     
    default: {
        throw Error('Unknown action: ' + action.type); 
    }      

  }

  /* if (action.type === "NEW_ITEM_ADD") {
    newTodoItems = [
      ...currentState,
      {
        title: action.payload.title,
        date: action.payload.date,
        isDone: action.payload.isDone,
        id: action.payload.id
      },
    ];
  } else if (action.type === "DELETE_FROM_LIST") {
    newTodoItems = currentState.filter((item) => item.id !== action.payload.id); //filter out the selected
  } else if(action.type === "EDIT_FROM_LIST"){
    //edit currentstate list
    newTodoItems = currentState.map((item) => {
        if (item.id === action.payload.task.id) {
          return action.payload.task;
        } else {
          return item;
        }
      });
  }

  return newTodoItems; */
};

const ReducerApp = () => {
  const [buyingItemList, dispatchAction] = useReducer(reducerFun, []); //[] initial value

  const onAddItem = (e, title, date) => {
    e.preventDefault();
    const newItemAdd = {   
      type: "NEW_ITEM_ADD",
      payload: {
        title,
        date,
        isDone: false,
        id: crypto.randomUUID()
       },
    };
    dispatchAction(newItemAdd); //newItemAdd : The object you pass to dispatch is called an “action”:

  };

  const onHandleDelete = (deleteItemId) => {
    const deleteItem = {
        type : "DELETE_FROM_LIST",
        payload: {
            id: deleteItemId
        }
    }
    dispatchAction(deleteItem);
  }

  const onHandleEdit = (task) => {
    const editItem = {
        type : "EDIT_FROM_LIST",
        payload: {
            task: task
        }
    }
    dispatchAction(editItem)
  }

  return <div>
   <ItemContextRef.Provider value={{
     buyingItemList,
     onAddItem,
     onHandleDelete,
     onHandleEdit
   }}>
        <InputPlaceHolder></InputPlaceHolder>
        <WelcomMessage></WelcomMessage>
        <BuyingList></BuyingList>
   </ItemContextRef.Provider>
  </div>;
};

export default ReducerApp;

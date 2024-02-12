import {createStore} from 'redux';

const INITIAL_VAL = {
    counter: 0,
    isVisible: true
}

const reducerFunc = (currentState = INITIAL_VAL, action) => {
   /*  
    switch(action.type){
        case "INCREMENT":
            return {
                ...currentState,
                couter : currentState.couter + 1
            }
        case "DECREMENT":
            return {
                ...currentState,
                couter : currentState.couter - 1
            }    
        case "ADDITION":
            return{
                ...currentState,
                counter: currentState.couter + action.payload
            }
    } */

    switch(action.type){
        case "INCREMENT":
            return { ...currentState, counter: currentState.counter + 1}
        case "DECREMENT":
            return { ...currentState, counter : currentState.counter - 1}
        case "ADD":
            return {...currentState, counter: currentState.counter + action.payload.num} 
        case "SUBTRACT":
            return{ ...currentState, counter: currentState.counter - action.payload.num} 
        case "TOGGLECOUNTER":
            return {...currentState, isVisible: !currentState.isVisible}        
        default:
                return currentState;
    }
}

const counterStore = createStore(reducerFunc);

export default counterStore
const redux = require('redux');
//initial value
//reducer function
//create store // input reducer function
//subscribe
//dispach an action

const INITIAL_VALUE = {
    counter : 0
}
//2
const reducerFunc = (currentState = INITIAL_VALUE, action) => {
    //6
    switch(action.type){
        case 'INCREMENT':
            console.log(currentState, {...currentState}, 'currentState');
            return {...currentState, counter: currentState.counter + 1}
        case 'DECREMENT':
            console.log(currentState, {...currentState}, 'currentState');
            return {...currentState, counter: currentState.counter - 1}
        case 'ADDITION':
            console.log(currentState, {...currentState}, 'currentState');
            return {...currentState, counter: currentState.counter + action.payload.number}        
    }
}
//1
const reduxStore = redux.createStore(reducerFunc);

//4
const subscribeFunc = () => {
    const state = reduxStore.getState();
    console.log("store updated", state);
}

//3
reduxStore.subscribe(subscribeFunc);

//5
reduxStore.dispatch({
    type: 'INCREMENT'
});
reduxStore.dispatch({
    type:'ADDITION', payload:{ number :3 }
});
reduxStore.dispatch({
    type: 'DECREMENT'
});



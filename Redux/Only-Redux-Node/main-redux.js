const mainRedux = require("redux");
const INITIAL_VALUE = {
    counter: 0
};

const reducer = (state = INITIAL_VALUE, action) => {
    let newStore = state;
    if (action.type === 'INCREMENT') {
      newStore = { counter: state.counter + 1 };
    } else if (action.type === 'DECREMENT') {
      newStore = { counter: state.counter - 1 };
    } else if (action.type === 'ADDITION') {
      newStore = { counter: state.counter + action.payload.numer };
    }
    return newStore;
  };

const store = mainRedux.createStore(reducer);

const subScriberFunc = () => {
  const state = store.getState();
  console.log(state);
};

store.subscribe(subScriberFunc);

store.dispatch({
  type: 'INCREMENT'
});
store.dispatch({
  type: 'DECREMENT'
});
store.dispatch({
  type:'INCREMENT'
});
store.dispatch({
    type: 'ADDITION',
    payload:{numer: 7}
});
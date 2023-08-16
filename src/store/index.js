// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import counterReducer from "./counter-slice";

/*
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1, showCounter: state.showCounter };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.value,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return { counter: state.counter - 1, showCounter: state.showCounter };
  }

  if (action.type === "toggle") {
    return { counter: state.counter, showCounter: !state.showCounter };
  }

  return state;
};

const store = createStore(counterReducer);
*/

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;

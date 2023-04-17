import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialCounterState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decreament(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
    reset(state) {
      state.counter = 0;
    },
  },
});

const initialAuthState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

// const counterReducer = (state = { counter: 0, showModel: true }, action) => {
//   if (action.type == "increment") {
//     return {
//       counter: state.counter + 1,
//       showModel: state.showModel,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showModel: state.showModel,
//     };
//   }
//   if (action.type == "decrement") {
//     return {
//       counter: state.counter - 1,
//       showModel: state.showModel,
//     };
//   }

//   if (action.type == "toggle") {
//     return {
//       showModel: !state.showModel,
//       counter: state.counter,
//     };
//   }

//   if (action.type == "reset") {
//     return {
//       showModel: state.showModel,
//       counter: 0,
//     };
//   }
//   return state;
// };

// const store = createStore(counterReducer);
export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }, // for multiple reducer
  // reducer: counterSlice.reducer,
});
export default store;

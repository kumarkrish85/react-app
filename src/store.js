import * as redux from "redux";

// action
export const VIEW = "view";

// reducer
const employeeinitialstate = {
  employeeid: -1,
};
const employeereducer = (state = employeeinitialstate, action) => {
  switch (action.type) {
    case VIEW: {
      return { ...state, employeeid: action.value };
    }
    default: {
      //default case is mandatory
      return state;
    }
  }
};
const rootreducer = (state = {}, action) => {
  return {
    employee: employeereducer(state.employee, action),
  };
};
// store
const store = redux.createStore(rootreducer);

export default store;

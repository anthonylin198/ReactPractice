const listReducer = (state = [], action) => {
  switch (action.type) {
    case "ADDITEM":
      const newState = state.slice();
      newState.push("hello");
      return newState;
    default:
      return state;
  }
};

export default listReducer;

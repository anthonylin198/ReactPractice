const listReducer = (state = [], action) => {
  switch (action.type) {
    case "ADDITEM":
      const newState = state.slice();
      newState.push(action.payload);
      return newState;
    case "DELETEITEM":

    default:
      return state;
  }
};

export default listReducer;

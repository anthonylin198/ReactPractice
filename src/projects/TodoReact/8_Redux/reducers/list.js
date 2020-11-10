const listReducer = (state = [], action) => {
  const newState = state.slice();
  switch (action.type) {
    case "ADDITEM":
      return [...state, action.payload];
    case "DELETEITEM":
      newState.splice(action.payload, 1);
      return newState;
    case "UPDATEITEM":
      newState[action.index] = action.item;
      return newState;
    default:
      return state;
  }
};

export default listReducer;

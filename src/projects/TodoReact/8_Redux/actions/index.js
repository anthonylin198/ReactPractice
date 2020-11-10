// increment and decrement
export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

// additem and delete
export const addItem = (input) => {
  return {
    type: "ADDITEM",
    payload: input,
  };
};

//

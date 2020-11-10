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

//delete item
export const deleteItem = (index) => {
  return {
    type: "DELETEITEM",
    payload: index,
  };
};

// update
export const updateItem = (index, item) => {
  console.log("here in the item", item);
  return {
    type: "UPDATEITEM",
    index,
    item,
  };
};

export const getFollowers = (followers) => {
  return {
    type: "GETFOLLOWERS",
    payload: followers,
  };
};

export const addOne = () => {
  return {
    type: "ADDONE",
  };
};

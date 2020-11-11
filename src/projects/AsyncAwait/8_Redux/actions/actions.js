export const GETFOLLOWERS = "GETFOLLOWERS";

export const getFollowers = (followers) => {
  return {
    type: "GETFOLLOWERS",
    payload: followers,
  };
};

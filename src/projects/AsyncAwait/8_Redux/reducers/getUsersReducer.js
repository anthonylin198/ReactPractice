const getUsersReducer = (state = [], action) => {
  switch (action.type) {
    case "GETFOLLOWERS":
      async (dispatch, getState) => {
        const notes = await fetch(
          `https://api.github.com/users/anthonylin198/followers`
        ).then((res) => res.json());
        dispatch(getFollowers(notes));
      };
  }
};

export default getUsersReducer;

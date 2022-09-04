var data = {
  email: "",
  profile_picture:"",
  uid: "",
  username: "",
  isAdmin: false,
};

const reducer = (state = data, action) => {
  switch (action.type) {
    case "setUserdata":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;

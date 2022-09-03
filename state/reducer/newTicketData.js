var data = {
 
};

const reducer = (state = data, action) => {
  switch (action.type) {
    case "modify_data":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;

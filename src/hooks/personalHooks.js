export const reducer = (state, action) => {
  switch (action.type) {
    case "set_name":
      return action.payload;
    default:
      return state;
  }
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "set_name":
      return { ...state, name: action.payload };
    case "set_age":
      return { ...state, age: action.payload };
    default:
      return state;
  }
};

const initialState = {
  usertype: "user",
  totalProducts: 0,
  storeValue: 0,
  outOfStock: 0,
  NoOfCategory: 0,
};

const inventoryReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "UPDATE_INVENTORY_STATE":
      return {
        ...state,
        ...action.payload,
      };
    case "SET_USER_TYPE":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default inventoryReducer;

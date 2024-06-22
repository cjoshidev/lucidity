export const UpdateInventoryState = (payload) => {
  return {
    type: "UPDATE_INVENTORY_STATE",
    payload,
  };
};

export const UpdateUserType = (payload) => {
  return {
    type: "SET_USER_TYPE",
    payload,
  };
};

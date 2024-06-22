import { combineReducers } from "redux";
import inventoryReducer from "./inventoryReducers";
const rootReducer = combineReducers({
  inventory: inventoryReducer,
});

export default rootReducer;

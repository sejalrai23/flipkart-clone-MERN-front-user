import authReducer from "./auth-reducer";
import userReducer from "./user-reducer";
import categoryReducer from "./category-reducer";
import orderReducer from "./order-reducer";
import productReducer from "./product-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  product: productReducer,
  order: orderReducer,
  category: categoryReducer
});

export default rootReducer;


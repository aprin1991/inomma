import { combineReducers } from "redux";

import productsReducer from "./products/product.reducer";
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({
  productsItems: productsReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

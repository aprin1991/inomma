import { combineReducers } from "redux";

import productsReducer from "./products/product.reducer";
import userReducer from "./user/user.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
});
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["products", "user"], // only navigation will be persisted
};
export type RootState = ReturnType<typeof rootReducer>;

export default persistReducer(persistConfig, rootReducer);

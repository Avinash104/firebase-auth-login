import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web
import thunk from "redux-thunk"
import counterReducer from "./state/counterSlice"
import usersReducer from "./state/users/usersSlice"

const persistConfig = {
  key: "root",
  storage,
}

//comnbining the reducers into one, so as to use in below step
const reducers = combineReducers({
  counter: counterReducer,
  users: usersReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  //instead of passing the regular reducer, we pass the persisted one
  reducer: persistedReducer,
  //this helps us supress the non-serializable error in reduc-persist
  middleware: [thunk],
})

const persistor = persistStore(store) //wrap the store in persistStore
export { store, persistor }

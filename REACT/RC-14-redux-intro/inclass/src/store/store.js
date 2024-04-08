// global state’in redux karşılığı store’dur. Tüm reducer’ların birleşimiyle oluşturulur. Redux store oluşturmak için redux içinde bulunan createStore() method’unu kullanırız.
// import {createStore} from "redux"; //! deprecated olduğu için üstünü çiziyor o nedenle aşağıdaki gib tanımlama yaptık. Ama üstü çizili şekilde de kullanılabilir
import { combineReducers, legacy_createStore as createStore } from "redux";
import { counterReducer } from "../redux/reducers/counterReducer";
import { todoReducer } from "./todoReducer";
import { composeWithDevTools } from "@redux-devtools/extension"; // dev tools eklentisi için gerekli
// export const store = createStore(counterReducer)

//! birden fazla reducer olduğunda bunları store birleştirerek verebiliriz
const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});
export const store = createStore(
  rootReducer,
  (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") &&
    composeWithDevTools()
);

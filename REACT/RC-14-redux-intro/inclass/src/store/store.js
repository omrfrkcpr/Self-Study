// import {createStore} from "redux";
import { legacy_createStore as createStore } from "redux";
import { counterReducer } from "../redux/reducers/counterReducer";

export const store = createStore(counterReducer);

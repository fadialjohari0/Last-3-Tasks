import { legacy_createStore } from "redux";
import chessReducer from "../reducers/chessReducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = legacy_createStore(chessReducer, enhancer());

export default store;

import { combineReducers } from "redux";
import AuthReducer from "./Auth/AuthReducer";
import reduce from "./Reduce";

const RootReducer = combineReducers({ AuthReduce: AuthReducer, Reduce: reduce })

export default RootReducer;
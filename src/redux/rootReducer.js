import { combineReducers } from "redux";
import { dataAnimesReducer } from "./dataAnimes/reducer.js";


export const rootReducer = combineReducers({ dataAnimesReducer })
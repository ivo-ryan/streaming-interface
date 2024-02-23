import { combineReducers } from "redux";
import { dataAnimesReducer } from "./dataAnimes/reducer.js";
import { dataFilmesReducer } from "./dataFilmes/reducer.js";


export const rootReducer = combineReducers({ dataAnimesReducer, dataFilmesReducer})
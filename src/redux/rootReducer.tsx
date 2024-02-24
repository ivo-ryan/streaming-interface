import { combineReducers } from "redux";
import { dataAnimesReducer } from "./dataAnimes/reducer.js";
import { dataFilmesReducer } from "./dataFilmes/reducer.js";
import { animePlayReducer } from "./animePlay/reducer.js";


export const rootReducer = combineReducers({ dataAnimesReducer, dataFilmesReducer, animePlayReducer })
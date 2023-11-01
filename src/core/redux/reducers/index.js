// Libraries
import { combineReducers } from "redux";

// Reducers
import Population from "./population";
import States from "./states";
import Cities from "./cities";

const reducers = combineReducers({
    population: Population,
    states: States,
    cities: Cities
});

export default reducers;
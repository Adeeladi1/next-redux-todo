import { combineReducers } from "redux"
import main from "./main"

const rootReducer = combineReducers({
  main: main
})

export default rootReducer;



// import { combineReducers } from "redux";
// import rootReducer from '../Reducers/reducer';
// export const combineReduce =combineReducers({rootReducer});
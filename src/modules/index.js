/*
 * Redux
 */
import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
/*
 * Reducers
 */
import RegistrationPage from "../pages/registration-page";
const combineReducer = combineReducers({
  form: formReducer,
  RegistrationPage
});

/*
 * Store
 */
export const store = createStore(combineReducer);


import react from "react"
import  {legacy_createStore,applyMiddleware} from "redux"
import { reducer as productReducer } from "./ProductReducer/reducer"
import { reducer as authReducer} from "./AuthReducer/reducer"
import { combineReducers } from "redux"
import thunk from "redux-thunk"

const rootReducer=combineReducers({
productReducer,authReducer
})

export const store= legacy_createStore(rootReducer,applyMiddleware(thunk));


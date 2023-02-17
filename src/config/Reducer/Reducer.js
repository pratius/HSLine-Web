import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

function currentCountry(state = { label: "United States of America", value: "US" }, action) {
  switch (action.type) {
    case "CHANGE_CURRENT_COUNTRY":
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

function userInfo(state = null, action) {
  switch (action.type) {
    case "UPDATE_USER_INFO":
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}




const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  currentCountry: currentCountry,
  userInfo: userInfo
})
export default createRootReducer
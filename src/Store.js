import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";


import createRootReducer from "config/Reducer/Reducer";

export const history = createBrowserHistory({ forceRefresh: true })

export default function configureStore() {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        // ... other middlewares ...
      ),
    ),
  )

  return store
}
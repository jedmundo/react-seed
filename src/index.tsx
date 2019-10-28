import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App'
import { rootReducer } from './shared/store/rootReducer'

// const store = export function configureStore(): Store<Root.State> {
//     const sagaMiddleware = createSagaMiddleware()
//     const middlewares = [
//         routerMiddleware(history),
//         sagaMiddleware,
//         ...(isDev ? [createLogger({ collapsed: true })] : []),
//     ]
//     const args = [
//         reduxBatch,
//         applyMiddleware(...middlewares),
//         reduxBatch,
//         ...(isDev ? [DevTools.instrument()] : []),
//     ]
//     const store = createStore(Root.reducer, compose<StoreEnhancerStoreCreator<Root.State>>(...args))

//     /**
//      * Run the redux saga
//      */
//     sagaMiddleware.run(Sagas)

//     return store
// }

const store = createStore(rootReducer)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

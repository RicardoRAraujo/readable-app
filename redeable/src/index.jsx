import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

//middlewares #######################################################
/*
Promise para chamadas assincronas ao back-end
Multi para multiplas actions dentro da actionCreate
Thunk em vez de retornar uma action, executa um metodo
*/
//###################################################################
import promise from 'redux-promise'
import multi from 'redux-multi' 
import thunk from 'redux-thunk'

import App from './main/app'
import reducers from './main/reducers'

const devTools =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('app')
)

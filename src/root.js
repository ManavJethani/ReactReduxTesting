import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import reducers from './reducer'
import React from 'react'
import Thunk from 'redux-thunk'

export default ({children,intialState={}}) => {
    return(
        <Provider store={createStore(reducers,intialState,applyMiddleware(Thunk))}>{children}</Provider>
    )
}
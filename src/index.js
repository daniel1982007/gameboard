import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import scoreReducer from './reducer'

const root = createRoot(document.getElementById('root'))

const store = createStore(scoreReducer)


root.render(
    <Provider store={store}>
        <App />
    </Provider>
)

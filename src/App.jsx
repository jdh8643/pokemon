import React from 'react'
import Router from './shared/Router'
import { Provider } from 'react-redux'
import Store from './store/Store'

const App = () => {
  return (
    <Provider store={Store}>

      <Router/>
    </Provider>
      
  )
}

export default App
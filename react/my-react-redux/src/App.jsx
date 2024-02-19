import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './features/counter/Counter'
import { Provider } from 'react-redux'
import store from './store'

function App() {

  return (
    <>
      <Provider store={store}>
        <Counter />
      </Provider>
    </>
  )
}

export default App

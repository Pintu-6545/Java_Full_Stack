import React from 'react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import RegistrationForm from './Component/RegistrationForm'

function App() {
  return (
    <div>
        <Provider store={store} >
              <RegistrationForm />
           </Provider>
    </div>
  );
}

export default App

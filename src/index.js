import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import './index.css'
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
// eslint-disable-next-line no-unused-vars
import App from './App'
/* eslint-disable unicorn/prefer-query-selector */

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <PersistGate loading={undefined} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './tailwind.css';
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import { setupInterceptors } from './axiosConfig';
import { ThemeContextProvider } from './styles/ThemeContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'))

setupInterceptors(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeContextProvider>
    </Provider>

  </React.StrictMode>,
)

reportWebVitals()

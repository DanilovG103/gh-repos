import React from 'react'
import ReactDOM from 'react-dom/client'
import { setDefaultOptions } from 'date-fns'
import { ru } from 'date-fns/locale'

import App from './app/app.tsx'

setDefaultOptions({ locale: ru })
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

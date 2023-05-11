import React from 'react'
import ReactDOM from 'react-dom/client'
import { BlogRouting } from './components'
import './index.css'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <BlogRouting />
    </BrowserRouter>
  </React.StrictMode>,
)

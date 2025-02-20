import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App';
import {BrowserRouter} from 'react-router-dom'
import GetEx2 from './GetEx2';
createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <GetEx2 />
 
 
  </StrictMode>
)

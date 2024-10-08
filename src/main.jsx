import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import  './index.css'
import {PrivyProvider} from '@privy-io/react-auth';


const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <PrivyProvider
    appId="cm0wp64p302cen24zv0q898pu"
    config={{
      
      appearance: {
        theme: 'dark',
       
      },
      
    }}
  >
    <Router>
      <StateContextProvider>
      <App />
      </StateContextProvider>
      
    </Router>
  </PrivyProvider>
)
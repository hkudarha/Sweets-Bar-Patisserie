import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="255480341544-n4jfg032c2lbleacmf1ericjgvrd2kv2.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
   
  </StrictMode>,
)

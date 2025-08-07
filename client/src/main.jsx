import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import AuthProvider from './context/authContext'
import PostProvider from './context/postContext'
import UserProvider from './context/userContext'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
       <AuthProvider>
            <UserProvider>
              <PostProvider>
               <App />
              </PostProvider>
            </UserProvider>
       </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)

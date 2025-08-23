import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './router/router.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import AuthProvider from './Context/AuthProvider.jsx'

AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
     <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)

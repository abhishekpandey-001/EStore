import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Products from './components/Products.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router  = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/products',
        element: <Products/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
 
<RouterProvider router={router} />

)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

// COMPONENT's
import App from './App.jsx'
import Home from './components/routes/Home.jsx'
import ErrorPage from './components/routes/ErrorPage.jsx'
import ContactDetails from './components/routes/ContactDetails.jsx'
import Contact from './components/routes/Contact.jsx'
import LivrosDetails from './components/routes/LivroDetails.jsx'
import Pag1 from './components/Pag1.jsx'
import Pag2 from './components/Pag2.jsx'
import Pag3 from './components/Pag3.jsx'
import Livros from './components/routes/Livros.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'pag1',
        element: <Pag1 />,
      },
      {
        path: 'pag2',
        element: <Pag2 />,
      },
      {
        path: 'pag3',
        element: <Pag3/>
      },
      //Rotas dinãmicas
      {
        path: '/contact/:id',
        element: <ContactDetails />
      },
      //Para páginas que não existem
      {
        path: '/chora-papai',
        element: <Navigate to='/contact' /> //Quando digite essa url ele me redireciona para a url de contact
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)



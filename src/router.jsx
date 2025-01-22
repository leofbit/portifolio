import { createBrowserRouter } from 'react-router-dom';
import Rootlayout from './pages/RootLayout';
import Dashboard from './components/Dashboard';

const router = createBrowserRouter([{
    path: "/",
    element: <Rootlayout/>,
    children: [
      { index: true, element: <Dashboard /> },
    ]
  }])

export default router

  
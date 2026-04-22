import { RouterProvider } from 'react-router-dom';
import './App.css'
import { AuthProvider } from './Context/AuthContext';
import { route } from './Routes/Route';

function App() {

  return (
    <AuthProvider>
      <RouterProvider router={route} />
    </AuthProvider>
  );
}

export default App

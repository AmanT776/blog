import Dashboard from './pages/Dashboard'
import CreatePost from './components/CreatePost';
import {Routes,Route,Navigate,useLocation} from "react-router-dom"
import ProtectedRoute from './utils/ProtectedRoute';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MainLayout from './Layouts/MainLayout';
import { Toaster } from 'sonner';
import Mypost from './components/Mypost';
import Profile from './components/Profile';

const App = ()=>{
  return(
    <>
      <Toaster  position="top-center" richColors closeButton/>
      <Routes>
        <Route path='/' element={<Navigate to="/login"/>}/>
        <Route path='/post' element={<Navigate to="/createPost"/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route element={<MainLayout/>}>
          <Route
        path='/dashboard'
        element={
        <ProtectedRoute>
            <Dashboard/>
        </ProtectedRoute>
        }
        />
        <Route
        path='/createPost'
        element={
          <ProtectedRoute>
            <CreatePost/>
          </ProtectedRoute>
        }/>
        <Route 
        path='/myPost'
        element={
        <ProtectedRoute>
          <Mypost/>
        </ProtectedRoute>
        }/>
        <Route
        element={<Profile/>}
        path='/profile'/>
        </Route>

      </Routes>
      
    </>
  )
}
export default App;
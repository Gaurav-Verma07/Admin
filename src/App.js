import './styles/base.css';
import Login from './components/Login/Login';
import AdminProvider from './store/adminProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp/SignUp';
import NewUser from './components/NewUser/Newuser';
import DashBoard from './components/DashBoard/DashBoard';
import { routes } from './constants/routes';

function App() {
  return (
    <BrowserRouter >
      <AdminProvider>
        <Routes>
          <Route path={routes.HOME} element={<Login />} />
          <Route path={routes.SIGNUP} element={<SignUp />} />
          <Route path={routes.NEW_USER} element={<NewUser />} />
          <Route path={routes.DASHBOARD} element={<DashBoard />} />
        </Routes>
      </AdminProvider>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet, Navigate, Link } from "react-router-dom";
import Inventory from './pages/inventory/Inventory';
import MaintenanceSched from './pages/maintenance-sched/MaintenanceSched';
import Transactions from './pages/transaction/Transaction';
import Reports from './pages/reports/Reports';
import CalibrationDue from './pages/calibration-due/CalibrationDue';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import Login from './pages/login/Login';
import AdminLogin from './pages/admin-login/AdminLogin';
import Home from './pages/home/Home';
import SignIn from './pages/sign-in/SignIn';
import "./styles/global.scss";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(false);

  const handleLogin = (isAdmin) => {
    setIsLoggedIn(true);
    setIsAdmin(isAdmin);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/admin-login",
      element: <AdminLogin handleLogin={handleLogin} />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/home",
      element: isLoggedIn && isAdmin ? (
        <div className="main">
          <Navbar/>
          <div className="container">
            <div className="menuContainer">
              <Menu>
                <Link to="/home/inventory"><a>Inventory</a></Link>
                <Link to="/home/instock"><a>Instock</a></Link>
                <Link to="/home/transactions"><a>Transactions</a></Link>
                <Link to="/home/reports"><a>Reports</a></Link>
                <Link to="/home/calibration-due"><a>Calibration Due</a></Link>
              </Menu>
            </div>
            <div className="contentcontainer">
              <Outlet/>
            </div>
          </div>
          <Footer/>
        </div>
      ) : (
        <Navigate to="/" replace />
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/home/inventory",
          element: <Inventory />,
        },
        {
          path: "/home/maintenance-sched",
          element: <MaintenanceSched />,
        },
        {
          path: "/home/transaction",
          element: <Transactions />,
        },
        {
          path: "/home/reports",
          element: <Reports />,
        },
        {
          path: "/home/calibration-due",
          element: <CalibrationDue />,
        },
      ]
    },
  ]);

  return <RouterProvider router={router}/>;
}

export default App;
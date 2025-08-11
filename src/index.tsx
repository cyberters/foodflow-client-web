import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Family from './Pages/Family';
import NotFound from './Pages/NotFound';
import About from './Pages/About';
import Demo from './Pages/Demo';
import LoginPage from './Pages/LoginPage';
import Dashboard from './Pages/Dashboard';
import { ApplicationContextProvider, UseApplicationContext } from './Contexts/ApplicationContext';
import RegisterPage from './Pages/RegisterPage';
import CreateFamily from './Pages/CreateFamily';
import DashboardMain from './Pages/DashboardMain';
import CreateProfile from './Pages/CreateProfile';
import UserProfile from './Pages/UserProfile';
import UserProfileDetails from './Pages/UserProfileDetails';
import SingleFamily from './Pages/SingleFamily';
import SearchFamily from './Pages/SearchFamily';
import SingleFoodList from './Pages/SingleFoodList';
import SingleDish from './Pages/SingleDish';
import SingleShopList from './Pages/SingleShopList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    index: true
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/family',
    element: <Family/>
  },
  {
    path: '/demo',
    element: <Demo/>
  },
  {
    path: '/dashboard',
    element: <Dashboard/>,
    children: [
      {
        path: ``,
        element: <DashboardMain/>,
        index: true
      },
      {
        path: `create-menu`,
        element: <CreateFamily/>
      },
      {
        path: `create-family`,
        element: <CreateFamily/>
      },
      {
        path: `search-family`,
        element: <SearchFamily/>
      },
      {
        path: `family/:id`,
        element: <SingleFamily/>
      },
      {
        path: `foodList/:id`,
        element: <SingleFoodList/>
      },
      {
        path: `shopList/:foodListId`,
        element: <SingleShopList/>
      },
      {
        path: `dish/:id`,
        element: <SingleDish/>
      },
      {
        path: `user/create-profile`,
        element: <CreateProfile/>
      },
      {
        path: 'user/details',
        element: <UserProfileDetails/>
      }
    ]
  },
  {
    path: '*',
    element: <NotFound/>
  }
])

const router_guest = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    index: true
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/family',
    element: <Family/>
  },
  {
    path: '/demo',
    element: <Demo/>
  },
  {
    path: '/sign-in',
    element: <LoginPage/>
  },
  {
    path: '/sign-up',
    element: <RegisterPage/>
  },
  {
    path: '*',
    element: <NotFound/>
  }
])

const App: React.FC = () => {
  const { isLoggedIn, loading, error } = UseApplicationContext()

  if (loading) {
    return <div className='w-[100vw] h-[100vh] flex bg-brand-warm'>
      <div className="flex flex-col space-y-3 animate-pulse mx-auto my-auto">
        <h6 className="text-black">food.flow</h6>
      </div>
    </div>
  }

  if (error) {
     return <div className='w-[100vw] h-[100vh] flex bg-red-600'>
      <div className="flex flex-col space-y-3 animate-pulse mx-auto my-auto">
        <h6 className="text-black">food.flow</h6>
      </div>
    </div>
  }

  return isLoggedIn ? <RouterProvider router={router}/> : <RouterProvider router={router_guest}/>
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApplicationContextProvider>
      <App />
    </ApplicationContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

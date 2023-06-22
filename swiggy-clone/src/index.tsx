import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import ErrorComp from "./pages/ErrorComp";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorComp />
  }, 
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  }
]);

root.render(
  <React.StrictMode>
    {/* <App /> */}
   <RouterProvider router={appRouter} ></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

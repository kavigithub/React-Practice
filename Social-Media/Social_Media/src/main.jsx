import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import CreatePost from './components/CreatePost.jsx';
import PostList from './components/PostList.jsx';
import Loader from './components/Loader.jsx';
import ErrorComponent from './components/ErrorComponent.jsx';
//import Blogs from './components/Blogs.jsx';

const Blogs = lazy(() => import('./components/Blogs.jsx'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: '/',
        element: <PostList />,
      },
      {
        path: 'create-post',
        element: <CreatePost />,
      },
      {
        path: 'blog',
        element:<Suspense fallback={<Loader />}><Blogs /></Suspense>
      }
    ]
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
   {/*  <App /> */}
  </React.StrictMode>,
)

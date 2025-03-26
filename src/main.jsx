import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Food from './Component/Food/Food';
import Home from './Component/Home/Home';
import './index.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/food',
        loader:()=>fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
        element:<Food></Food>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

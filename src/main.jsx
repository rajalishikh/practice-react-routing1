import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AllFood from './Component/ALlFood/AllFood';
import Food from './Component/Food/Food';
import FoodUnique from './Component/FoodUnique/FoodUnique';
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
      },
      {
        path:"/details/:UserId",
        loader:({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/categories.php/${params.UserId}`),
        element:<FoodUnique></FoodUnique>
      },
      {
        path:"/AllFood",
        loader:()=>fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a'),
        element:<AllFood></AllFood>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

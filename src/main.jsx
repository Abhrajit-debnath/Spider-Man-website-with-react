import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Components/Layout.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Wallpaper from "./Components/Wallpaper.jsx";
import Gameplay from "./Components/Gameplay.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Layout />}>
    <Route path="" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="wallpaper" element={<Wallpaper/>}/>
    <Route path="gameplay" element={<Gameplay/>}/>
   
  </Route>)
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

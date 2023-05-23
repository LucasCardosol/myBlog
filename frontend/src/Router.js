import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Subscribe from "./pages/subscribe";


const Router = () => {

  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/login" element={<Login />}/>
            <Route exact path="/subscribe" element={<Subscribe />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default Router;

import React from "react";
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

export default function Routas() {
    return (
      <BrowserRouter> 
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='sobre' element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    );
  }
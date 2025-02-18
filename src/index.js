import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Homepage from "./Homepage";
import Trending from "./Trending";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Homepage/>
  </BrowserRouter>
   
)

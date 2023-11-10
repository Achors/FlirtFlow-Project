import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Home from "./Components/Home";
import Products from "./Components/Products";
import AuthPage from "./Components/Log";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/Home" element={<Home />} />
            <Route path= "/Users" element= {<Products />} />
            <Route path="/login" element={<AuthPage />} />
                       
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

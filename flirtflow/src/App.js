import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
// import Home from "./Components/Home";
import Login from "./Components/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="/Login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Login from "./Components/Login";
import UserData from "./Components/UserData";
import Home from "./Components/Home";
import AuthPage from "./Components/AuthPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserData />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
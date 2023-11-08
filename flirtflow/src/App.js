import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Home from "./Components/Home";
import UserData from "./Components/UserData";
import AuthPage from "./Components/log"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
//             <Route path="/home" element={<Home />} />
            <Route path= "/UserData" element= {<UserData />} />
              <Route path="/Login" element={<AuthPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

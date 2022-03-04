import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login-user" element={<Login />} />
        {/*   <Route path="ashaar/page2" element={<Ashaar2 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Dashboard from "./pages/adminPanel/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login-user" element={<Login />} />
        <Route path="/admin-panel" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

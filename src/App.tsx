import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Login from "./pages/LoginPage";
import Dashboard from "./pages/adminPanel/AdminDashboardPage";
import ContactUs from "./pages/ContactUsPage";
import NotFound from "./pages/NotFoundPage";
import Register from "./pages/RegisterPage";
import ClientDashboardPage from "./pages/clientPanel/ClientDashboardPage";
import Profile from "./pages/clientPanel/Profile";
import OrderHistory from "./pages/clientPanel/OrderHistory";
import Cart from "./pages/clientPanel/Cart";
import AuthState from "./context/auth/AuthState";

const App = () => {
  return (
    <AuthState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/admin-panel" element={<Dashboard />} />

          <Route path="/user-panel" element={<ClientDashboardPage />} />
          <Route path="/:id/cart" element={<Cart />} />
          <Route path="/:id/history" element={<OrderHistory />} />
          <Route path="/:id/profile" element={<Profile />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthState>
  );
};

export default App;

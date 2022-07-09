import React from "react";
import { useNavigate } from "react-router";

const ClientDashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      ClientDashboardPage
      <button onClick={() => navigate("/:id/cart")}>cart </button>
      <button onClick={() => navigate("/:id/history")}>سابقه خرید </button>
      <button onClick={() => navigate("/:id/history")}>اطلاعات کاربر </button>
      <button onClick={() => navigate("/")}>بازگشت </button>
    </div>
  );
};

export default ClientDashboardPage;

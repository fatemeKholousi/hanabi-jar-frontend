import React, { useEffect } from "react";
import SideBar from "../../components/sidebar/SideBar";
import axios from "axios";
import CreateProduct from "./modalContent/CreateProduct";

function Dashboard() {
  useEffect(() => {
    axios.get("/api/genres").then(({ data }) => console.log(data));
  }, []);

  return (
    <>
      <SideBar />
      <CreateProduct />
    </>
  );
}

export default Dashboard;

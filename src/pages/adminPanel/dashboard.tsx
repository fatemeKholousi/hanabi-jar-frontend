import React, { useEffect, useState } from "react";
import axios from "axios";
import { BiPlusMedical } from "react-icons/bi";
import { Button } from "antd";
import { t } from "i18next";
import ModalCreateProduct from "./modalContent/CreateProduct";
import withRandomTheme from "../../HOC/withRandomTheme";
import "./adminPanel.style.scss";

const Dashboard = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [data, setData] = useState<any>("");
  const [image, setImage] = useState("");

  useEffect(() => {
    axios
      .get("/api/genres")
      .then(({ data }) => console.log(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios.get("/api/products").then(({ data }) => setData(data));
  }, []);

  useEffect(() => {
    setImage(`http://localhost:5555/${data[16]?.coverImage}`);
  }, [data]);

  function handleOk() {}

  function handleCancel() {
    setIsModalVisible(false);
  }

  function handleShowModal() {
    setIsModalVisible(true);
  }

  return (
    <div className="admin-panel-dashboard-page">
      {isModalVisible && (
        <ModalCreateProduct
          isModalVisible={isModalVisible}
          onShowModal={handleShowModal}
          onCancle={handleCancel}
        />
      )}
      <div className="admin-panel-dashboard-page--head-row">
        <Button onClick={handleShowModal}>
          <BiPlusMedical />
        </Button>
        <h1 className="admin-panel-dashboard-page--head-row__title">
          {t("adminPanel.productManagement")}
        </h1>
      </div>

      <table>
        <caption>He-Man and Skeletor facts</caption>
        <thead>
          <tr>
            <th id="product-name">اسم</th>
            <th id="author-name">نویسنده</th>
            <th id="genre">ژانر</th>
            <th id="delete-button">...</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td headers="author-name-abbrev">lucy mude mongomery</td>
          </tr>
        </tbody>
        <tfoot>پایان</tfoot>
      </table>

      <div className="admin-panel-dashboard-page--snackbar">
        {t("adminPanel.themeIsRandomMessage")}
      </div>
    </div>
  );
};

export default withRandomTheme(Dashboard);

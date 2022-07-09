import React, { useEffect, useState } from "react";
import axios from "axios";
import { BiPlusMedical } from "react-icons/bi";
import { Button } from "antd";
import { t } from "i18next";
import { VscTrash, VscEdit } from "react-icons/vsc";
import { useNavigate } from "react-router";

import ModalCreateProduct from "./modalContent/CreateProduct";
import "./adminPanel.style.scss";

import { useDispatch } from "../../utils/hooks";

const Dashboard = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [data, setData] = useState<any>("");
  const [editProductId, setEditProductId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/api/genres")
      .then(({ data }) => console.log(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  const dispatch = useDispatch();

  //  store edit purpose id to open modal
  // useEffect(() => {
  //   if (editProductId) dispatch(editProductAction(editProductId));
  // }, [editProductId]);

  function handleCancel() {
    setIsModalVisible(false);
  }

  function handleShowModal() {
    setIsModalVisible((flag) => !flag);
  }

  const fetchProducts = () =>
    axios
      .get("/api/products")
      .then(({ data }) => setData(data))
      .catch((error) => console.error(`Error is = ${error}`));

  const fetchProduct = (id: string) => {
    axios
      .get(`/api/products/${id}`)
      .then(({ data }) => {
        setEditProductId(data);
      })
      .then(() => handleShowModal())
      .catch((error) => console.error(`Error is = ${error}`));
  };

  function addProduct() {
    const newProductInfo = {};
    axios.post(`/api/products`).then(({ data }) => console.log(data));
  }
  function deleteProduct() {}
  return (
    <div className="admin-panel-dashboard-page">
      {isModalVisible && (
        <ModalCreateProduct
          isModalVisible={isModalVisible}
          onShowModal={handleShowModal}
          onCancle={handleCancel}
          fieldForEdit={editProductId.length !== 0 ? editProductId : ""}
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
      <button onClick={() => navigate("/")}>بازگشت </button>

      <table>
        <caption>He-Man and Skeletor facts</caption>
        <thead>
          <tr>
            <th id="product-name">اسم</th>
            <th id="author-name">نویسنده</th>
            <th id="genre">ژانر</th>
            <th id="image-cover">تصویر محصول</th>

            <th id="operation-buttons">...</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((product: any) => (
              <tr key="product.title">
                <td headers="author-name-abbrev">{product.name}</td>
                <td headers="author-name-abbrev">{product.author}</td>
                <td headers="author-name-abbrev">{product.genre}</td>

                <td headers="author-name-abbrev">
                  <div
                    style={{
                      opacity: "50%",
                      backgroundColor: "red",
                      width: "200px",

                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0.5rem 1rem",
                    }}
                  >
                    <VscTrash size={25} />
                    <VscEdit
                      size={25}
                      onClick={() => {
                        fetchProduct(product._id);
                      }}
                    />
                  </div>
                  <img
                    src={`http://localhost:5555/${product.coverImage}`}
                    alt="cover"
                    // style={{ position: "relative" }}
                    width={200}
                    height={250}
                  />
                </td>
              </tr>
            ))}
        </tbody>
        <tfoot>پایان</tfoot>
      </table>
    </div>
  );
};

export default Dashboard;

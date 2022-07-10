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
  const [isAddedSuccessfully, setIsUpdatedSuccessfully] = useState(false);

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
  useEffect(() => {
    if (isAddedSuccessfully) {
      fetchProducts();
      setIsUpdatedSuccessfully(false);
    }
  }, [isAddedSuccessfully]);

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

  function deleteProduct(id: string) {
    const config: any = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };
    axios
      .delete(`/api/products/${id}`, config)
      .then(() => {
        setIsUpdatedSuccessfully(true);
        alert("حذف شد");
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="admin-panel-dashboard-page">
      <ModalCreateProduct
        isModalVisible={isModalVisible}
        onShowModal={handleShowModal}
        onCancle={handleCancel}
        successFlag={isAddedSuccessfully}
        onSuccessFlag={(newFlag: boolean) => setIsUpdatedSuccessfully(newFlag)}
        fieldForEdit={editProductId.length !== 0 ? editProductId : ""}
        mode="edit"
        editProductId={editProductId}
      />
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
            // to reverse the array while showing
            data
              .slice(0)
              .reverse()
              .map((product: any) => (
                <tr key={product.title}>
                  <td>{product.name}</td>
                  <td>{product.author}</td>
                  <td>{product.genre}</td>

                  <td>
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
                      <VscTrash
                        size={25}
                        onClick={() => deleteProduct(product._id)}
                      />

                      <VscEdit
                        size={25}
                        onClick={() => {
                          setEditProductId(product._id);
                          handleShowModal();
                        }}
                      />
                    </div>
                    <img
                      src={`http://localhost:5555/${product.coverImage}`}
                      alt="cover"
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

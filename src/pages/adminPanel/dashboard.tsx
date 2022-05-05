import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Button } from "antd";
import ModalCreateProduct from "./modalContent/CreateProduct";
import withRandomTheme from "../../HOC/withRandomTheme";

const Dashboard = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [data, setData] = useState<any>("");
  const refrence = useRef(0);
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
    refrence.current++;
    console.log(refrence);
  }

  return (
    <>
      {isModalVisible && (
        <ModalCreateProduct
          isModalVisible={isModalVisible}
          onShowModal={handleShowModal}
          onCancle={handleCancel}
        />
      )}
      <Button onClick={handleShowModal}>Create New Book</Button>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
      laudantium temporibus harum molestiae doloremque fugiat accusantium, eius
      odit delectus? Sit optio quisquam culpa consequatur exercitationem ipsam
      itaque harum voluptates reprehenderit?
      {image && <img src={image} alt="" />}
    </>
  );
};

export default withRandomTheme(Dashboard);

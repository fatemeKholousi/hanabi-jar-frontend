import React, { FC, useState } from "react";
import { Modal, Button } from "antd";
import ModalInterface from "./modalInterface.types";

const CreateProductModal: FC<ModalInterface> = (props) => {
  const { title, content, showModal, isModalVisible } = props;

  // const [isModalVisible, setIsModalVisible] = useState(false);
  // const showModal = () => {
  //   setIsModalVisible(true);
  // };

  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };

  return (
    <>
      {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
      <Modal
        title={title}
        visible={isModalVisible}
        // onOk={handleOk}
        // onCancel={handleCancel}
      >
        {content}
      </Modal>
    </>
  );
};

export default CreateProductModal;

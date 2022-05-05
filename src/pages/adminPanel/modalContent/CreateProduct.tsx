import React, { useState } from "react";
import { Form, Input, InputNumber, Modal, Select } from "antd";
// eslint-disable-next-line no-redeclare
// import TextArea from "antd/lib/input/TextArea";

const CreateProduct = (props: any) => {
  const { isModalVisible, onShowModal, onCancle } = props;
  const [file, setFile] = useState("");
  const { TextArea } = Input;

  const reader = new FileReader();
  const img: any = document.createElement("img");

  function uploadImage(event: any) {
    const imageGrid = document.getElementById("image-grid");

    const { files } = event.target;
    const file = files[0];

    reader.readAsDataURL(file);
    console.log(reader);
    reader.addEventListener("load", (event) => {
      // Here we are creating an image tag and adding
      // an image to it.
      if (imageGrid) {
        console.log("running");
        imageGrid.appendChild(img);
        img.src = event?.target?.result;
        img.alt = file?.name;
        img.style.width = "100px";
        img.style.height = "100px";
      }
    });
  }
  function content() {
    return (
      <Form
      // labelCol={{ span: 4 }}
      // wrapperCol={{ span: 14 }}
      // layout="horizontal"
      >
        <Form.Item style={{ width: "100%", display: "flex" }}>
          <Form.Item label="عنوان کتاب">
            <Input style={{ width: "40%" }} />
          </Form.Item>
          <Form.Item label="نام نویسنده">
            <Input style={{ width: "40%" }} />
          </Form.Item>
        </Form.Item>

        <Form.Item label="سال انتشار ">
          <Input style={{ width: "40%" }} />
        </Form.Item>
        <Form.Item label="ژانر">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="کاور محصول">
          <input
            type="file"
            onChange={uploadImage}
            accept="image/png, image/jpeg"
          />
        </Form.Item>
        <div id="image-grid" />

        <Form.Item label="موجودی">
          <InputNumber />
        </Form.Item>
        <Form.Item label="چکیده داستان">
          <TextArea
            showCount
            maxLength={100}
            style={{ height: 120 }}
            onChange={(e) => {
              console.log("Change:", e.target.value);
            }}
          />
        </Form.Item>
      </Form>
    );
  }

  return (
    <Modal
      title="افزودن محصول"
      visible={isModalVisible}
      onOk={onShowModal}
      onCancel={onCancle}
    >
      {content()}
    </Modal>
  );
};

export default CreateProduct;

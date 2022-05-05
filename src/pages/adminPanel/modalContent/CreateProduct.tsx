import React from "react";
import { Form, Input, InputNumber, Modal, Select } from "antd";

const CreateProduct = (props: any) => {
  const { isModalVisible, onShowModal, onCancle } = props;
  const { TextArea } = Input;

  const reader = new FileReader();
  const img: any = document.createElement("img");

  function handleUploadImage(event: any) {
    const imageGrid = document.getElementById("image-grid");

    const { files } = event.target;
    const file = files[0];

    reader.readAsDataURL(file);
    reader.addEventListener("load", (event) => {
      //  create image
      if (imageGrid) {
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
      <Form>
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
            onChange={handleUploadImage}
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

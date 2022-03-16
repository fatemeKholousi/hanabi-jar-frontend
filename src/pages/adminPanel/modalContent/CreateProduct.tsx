import {
  Button,
  Cascader,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  TreeSelect,
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import ImageUploader from "../../../components/ImageUploader";
import Modal from "../../../components/modal/Modal";

function CreateProduct() {
  const [isModalVisible, setIsModalVisible] = useState(true);

  function showModal(flag: boolean) {
    setIsModalVisible(!flag);
  }

  function content() {
    return (
      <>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
        >
          <Form.Item label="عنوان کتاب">
            <Input />
          </Form.Item>
          <Form.Item label="نام نویسنده">
            <Input />
          </Form.Item>
          <Form.Item label="سال انتشار ">
            <Input />
          </Form.Item>
          <Form.Item label="ژانر">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="کاور محصول">
            <ImageUploader />
          </Form.Item>

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
            ,
          </Form.Item>
        </Form>
      </>
    );
  }

  return (
    <Modal
      title="افزودن محصول"
      content={content()}
      isModalVisible={true}
      showModal={showModal}
    />
  );
}

export default CreateProduct;

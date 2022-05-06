import React, { useRef, useImperativeHandle, forwardRef } from "react";
import { Form, Input, InputNumber, Modal, Select } from "antd";

export const ContentCreateProduct = forwardRef((props: any, forwardedRef) => {
  const { onUploadImage } = props;
  const { TextArea } = Input;
  const localRefInput = useRef<any>();

  useImperativeHandle(forwardedRef, () => {
    return {
      focusAndBlur: () => {
        localRefInput.current.focus();
        setTimeout(() => {
          localRefInput.current.blur();
        }, 10000);
      },
    };
  });

  return (
    <Form>
      <Form.Item style={{ width: "100%", display: "flex" }}>
        <Form.Item label="عنوان کتاب">
          <input type="text" style={{ width: "40%" }} />
        </Form.Item>
        <Form.Item label="نام نویسنده">
          <input type="text" style={{ width: "40%" }} ref={localRefInput} />
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
          onChange={onUploadImage}
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
});

const CreateProduct = (props: any) => {
  const { isModalVisible, onShowModal, onCancle } = props;
  const inputRef = useRef<any>();

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
  if (isModalVisible && inputRef) {
    inputRef?.current?.focusAndBlur();
  }

  return (
    <Modal
      title="افزودن محصول"
      visible={isModalVisible}
      onOk={onShowModal}
      onCancel={onCancle}
    >
      <ContentCreateProduct onUploadImage={handleUploadImage} ref={inputRef} />
    </Modal>
  );
};

export default CreateProduct;

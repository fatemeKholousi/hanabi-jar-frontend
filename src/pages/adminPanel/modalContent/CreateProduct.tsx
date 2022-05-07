import React, {
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
} from "react";
import { Button, Form, Input, InputNumber, Modal, Select } from "antd";
import axios from "axios";

export const ContentCreateProduct = forwardRef((props: any, forwardedRef) => {
  const { onUploadImage } = props;
  const { TextArea } = Input;
  const localRefInput = useRef<any>();
  const [coverImage, setImageCover] = useState<any>();
  const [bookName, setbookName] = useState("");
  const [stock, setStock] = useState(0);
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [summary, setSummary] = useState("");

  const reader = new FileReader();
  const img: any = document.createElement("img");

  function handleUploadImage(event: any) {
    const imageGrid = document.getElementById("image-grid");

    const { files } = event.target;
    const file = files[0];
    setImageCover(`uploads/${file.name}`);
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
  console.log();

  function sendRequest() {
    const headers = {
      //   "Content-Type": "multipart/form-data",
      contentType: "application/json",
      charset: "utf-8",
      Accept: "*/*",
    };
    const data = {
      name: bookName,
      genre,
      author,
      summary,
      coverImage,
      stock,
      publishedYear,
    };
    axios
      .post("http://localhost:5555/api/products", data, { headers })
      .then(() => console.log("yeeeeeeees"))
      .catch(() => "noooooooo");
    console.log(coverImage);

    // Update the formData object

    // Details of the uploaded file

    // Request made to the backend api
    // Send formData object
  }

  return (
    <Form action="/api/products" method="POST" encType="multipart/form-data">
      <Form.Item label="نام کتاب">
        <Input
          style={{ width: "40%" }}
          value={bookName}
          onChange={(event) => setbookName(event.target.value)}
        />
      </Form.Item>

      <Form.Item label="نام نویسنده">
        <Input
          style={{ width: "40%" }}
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          ref={localRefInput}
        />
      </Form.Item>

      <Form.Item label="سال انتشار ">
        <Input
          style={{ width: "40%" }}
          value={publishedYear}
          onChange={(event) => setPublishedYear(event.target.value)}
        />
      </Form.Item>
      <Form.Item label="ژانر">
        <Select onChange={(selectedItem) => setGenre(selectedItem)}>
          <Select.Option value="romance">romance</Select.Option>
          <Select.Option value="drama">drama</Select.Option>
          <Select.Option value="horror">horror</Select.Option>
          <Select.Option value="thriller">thriller</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="کاور محصول">
        <input
          onChange={(e: any) => {
            const { files } = e.target;
            // files[0].path = "shhhhhhhhhhhhhhhhhhhhhhhhhh";
            setImageCover(files[0]);
          }}
          name="file"
          type="file"
          className="form-control"
          required
        />
      </Form.Item>
      <div id="image-grid" />

      <Form.Item label="موجودی">
        <InputNumber
          value={stock}
          onChange={(stockNumber) => setStock(stockNumber)}
        />
      </Form.Item>
      <Form.Item label="چکیده داستان">
        <TextArea
          showCount
          maxLength={100}
          style={{ height: 120 }}
          onChange={(event) => {
            setSummary(event.target.value);
          }}
        />
      </Form.Item>
      <Button onClick={() => sendRequest()}>save</Button>
    </Form>
  );
});

const CreateProduct = (props: any) => {
  const { isModalVisible, onShowModal, onCancle } = props;
  const inputRef = useRef<any>();

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
      <ContentCreateProduct ref={inputRef} />
    </Modal>
  );
};

export default CreateProduct;

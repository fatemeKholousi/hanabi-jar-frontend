import React, {
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
  useEffect,
} from "react";
import { Form, Input, InputNumber, Modal } from "antd";

export const ContentCreateProduct = forwardRef((props: any, forwardedRef) => {
  const [coverImage, setImageCover] = useState<any>();
  const [bookName, setbookName] = useState("");
  const [stock, setStock] = useState<any>();
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [summary, setSummary] = useState("");

  const [editMode, setEditMode] = useState(false);
  const [data, setData] = useState([]);

  const token = localStorage.getItem("token");
  const { TextArea } = Input;
  const { fieldForEdit } = props;
  const localRefInput = useRef<any>();

  const reader = new FileReader();
  const img: any = document.createElement("img");

  useEffect(() => {
    if (data) setDataFields(data);
  }, [data]);

  useEffect(() => {
    if (fieldForEdit) setDataFields(fieldForEdit);
  }, [fieldForEdit]);

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

  function sendRequest(event: any) {
    const formData = new FormData();
    formData.append("name", bookName);
    formData.append("genre", genre);
    formData.append("author", author);
    formData.append("summary", summary);
    formData.append("coverImage", coverImage);
    formData.append("stock", stock);
    formData.append("publishedYear", publishedYear);
    console.log(formData.append("salam", "salama"));
    event.preventDefault();

    // if (token) {
    //   const config: any = {
    //     headers: {
    //       "x-auth-token": localStorage.getItem("token"),
    //     },
    //   };
    //   axios
    //     .post(`/api/products`, formData , config)
    //     .then(() => {
    //       console.log("you sent it all");
    //     })
    //     .catch((error) => console.log(error));
    // }
  }
  function setDataFields(data: any) {
    setImageCover(data.coverImage);
    setbookName(data.name);
    setStock(data.stock);
    setGenre(data.genre);
    setAuthor(data.author);
    setPublishedYear(data.publishedYear);
    setSummary(data.summary);
  }

  return (
    <form encType="multipart/form-data">
      <Form.Item label="نام کتاب">
        <Input
          style={{ width: "40%" }}
          value={bookName}
          onChange={(event) => setbookName(event.target.value)}
          name="name"
        />
      </Form.Item>

      <Form.Item label="نام نویسنده">
        <Input
          style={{ width: "40%" }}
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          ref={localRefInput}
          name="author"
        />
      </Form.Item>

      <Form.Item label="سال انتشار ">
        <Input
          name="publishedYear"
          style={{ width: "40%" }}
          value={publishedYear}
          onChange={(event) => setPublishedYear(event.target.value)}
        />
      </Form.Item>
      <Form.Item label="ژانر">
        <select name="genre" onChange={(e) => setGenre(e.target.value)}>
          <option value="romance">romance</option>
          <option value="drama">drama</option>
          <option value="horror">horror</option>
          <option value="thriller">thriller</option>
        </select>
      </Form.Item>

      <Form.Item label="کاور محصول">
        <input
          onChange={(e: any) => {
            handleUploadImage(e);
            const { files } = e.target;
            setImageCover(files[0]);
          }}
          name="coverImage"
          type="file"
          required
        />
      </Form.Item>
      <div id="image-grid" />

      <Form.Item label="موجودی">
        <InputNumber
          name="stock"
          value={stock}
          onChange={(stockNumber) => setStock(stockNumber)}
        />
      </Form.Item>
      <Form.Item label="چکیده داستان">
        <TextArea
          value={summary}
          name="summary"
          showCount
          maxLength={100}
          style={{ height: 120 }}
          onChange={(event) => {
            setSummary(event.target.value);
          }}
        />
      </Form.Item>
      <button type="submit" onClick={(e) => sendRequest(e)}>
        save
      </button>
      {/* <Button onClick={() => sendRequest() }>save</Button> */}
    </form>
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

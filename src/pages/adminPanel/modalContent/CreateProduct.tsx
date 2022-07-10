import React, {
  useRef,
  useImperativeHandle,
  forwardRef,
  useEffect,
  useState,
} from "react";
import { Form, Input, InputNumber, Modal } from "antd";
import axios from "axios";

export const ContentCreateProduct = forwardRef((props: any, forwardedRef) => {
  const { TextArea } = Input;
  const { successFlag, onSuccessFlag, editProductId } = props;
  const localRefInput = useRef<any>();
  const token = localStorage.getItem("token");

  const [coverImage, setImageCover] = useState<any>();
  const [bookName, setbookName] = useState("");
  const [stock, setStock] = useState<any>();
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [summary, setSummary] = useState("");

  useEffect(() => {
    if (editProductId) {
      fetchProduct(editProductId);
    }
  }, [editProductId]);

  const reader = new FileReader();
  const img: any = document.createElement("img");

  function handleUploadImage(event: any) {
    const imageGrid = document.getElementById("image-grid");
    const { files } = event.target;
    const file = files[0];
    setImageCover(`uploads/${file.name}`);

    reader.readAsDataURL(file);

    console.log(`file==============${file[0]}`);
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

  console.log(coverImage);
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

  const handleSendRequest = (event: any) => {
    event?.preventDefault();
    const formData = new FormData();
    formData.append("name", bookName);
    formData.append("genre", genre);
    formData.append("author", author);
    formData.append("summary", summary);
    formData.append("coverImage", coverImage);
    formData.append("stock", stock);
    formData.append("publishedYear", publishedYear);

    if (token) {
      const config: any = {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      };
      axios
        .post(`/api/products`, formData, config)
        .then(() => {
          onSuccessFlag(true);
        })
        .catch((error) => console.log(error));
    }
    // postNewProduct(formData);
  };

  const handleShowImage = () => {
    const imageGrid = document.getElementById("image-grid");

    reader.addEventListener("load", (event) => {
      if (imageGrid) {
        imageGrid.appendChild(img);
        img.src = coverImage;
        img.alt = "cover";
        img.style.width = "100px";
        img.style.height = "100px";
      }
    });
  };

  const fetchProduct = (id: string) => {
    axios
      .get(`/api/products/${id}`)
      .then(({ data }) => {
        setbookName(data.name);
        setAuthor(data.author);
        setGenre(data.genre);
        setSummary(data.summary);
        setImageCover(`${data.coverImage}`);

        setStock(data.stock);
        setPublishedYear(data.publishedYear);

        console.log(coverImage);
        // setEditProductId(data);f
      })
      .then(() => {
        handleShowImage();
      })
      .then(() => console.log("did it"))
      .catch((error) => console.error(`Error is = ${error}`));
  };

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
          // value={coverImage}
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

      {coverImage && (
        <img
          src={`http://localhost:5555/${coverImage}`}
          alt=""
          width={100}
          height={100}
        />
      )}

      <Form.Item label="موجودی">
        <InputNumber
          name="stock"
          value={stock}
          onChange={(stockNumber) => setStock(stockNumber)}
        />
      </Form.Item>
      <Form.Item label="چکیده داستان">
        <TextArea
          name="summary"
          showCount
          maxLength={100}
          style={{ height: 120 }}
          value={summary}
          onChange={(event) => {
            setSummary(event.target.value);
          }}
        />
      </Form.Item>
      <button type="submit" onClick={(e) => handleSendRequest(e)}>
        save
      </button>
    </form>
  );
});

const CreateProduct = (props: any) => {
  const {
    isModalVisible,
    onShowModal,
    onCancle,
    successFlag,
    onSuccessFlag,
    editProductId,
  } = props;
  const inputRef = useRef<any>();
  console.log(editProductId);
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
      <ContentCreateProduct
        ref={inputRef}
        successFlag={successFlag}
        onSuccessFlag={onSuccessFlag}
        editProductId={editProductId}
      />
    </Modal>
  );
};

export default CreateProduct;

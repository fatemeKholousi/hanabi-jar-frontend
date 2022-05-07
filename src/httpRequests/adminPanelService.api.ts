import axios from "axios";

const URL = "http://localhost:5555";

export const postNewProduct = (data: any) => {
  axios
    .post(`${URL}/api/products`, data)
    .then()
    .catch((error) => console.error(error));
};

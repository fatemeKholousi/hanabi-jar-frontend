import axios from "axios";

const URL = "http://localhost:5555";

export const postNewProduct = async (data: any, then?: any) => {
  await axios
    .post(`${URL}/api/products`, data)
    .then(() => {})
    .catch((error) => console.log(error));
};

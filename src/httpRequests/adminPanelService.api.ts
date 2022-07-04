import axios from "axios";

const URL = "http://localhost:5555";

export const postNewProductService = async (data: any, then?: any) => {
  await axios
    .post(`${URL}/api/products`, data)
    .then(() => {})
    .catch((error) => console.log(error));
};

export const deleteProductService = (id: string) => {
  axios
    .delete(`${URL}${id}`)
    .then(() => "")
    .catch((error) => console.log(error));
};

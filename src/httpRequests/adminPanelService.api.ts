import axios from "axios";

const URL = "http://localhost:5555";

export const postNewProductService = (data: any) => {
  axios
    .post(`${URL}/api/products`, data)
    .then()
    .catch((error) => console.error(error));
};

export const deleteProductService = (id: string) => {
  axios
    .delete(`${URL}${id}`)
    .then(() => "")
    .catch((error) => console.log(error));
};

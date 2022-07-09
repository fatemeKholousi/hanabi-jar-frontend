import axios from "axios";

const URL = "http://localhost:5555";

export const registerService = async (user: any, then?: any) => {
  await axios
    .post(`${URL}/api/users`, {
      email: user.userName,
      password: user.password,
      name: user.name,
    })
    .then(() => {
      console.log("200");
    })
    .catch((error) => console.log(error));
};

// export const loginService = (user: any) => {
//   axios.post(`${URL}/api/login`, {
//     email: user.userName,
//     password: user.password,
//   });
// };

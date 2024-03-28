import axios from "axios";

// export async function login(username, password) {
//     axios.post('/login', {
//         username: username,
//         password: password,
//       })
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
// }



const baseURL = `http://localhost:3601`;
let headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

if (localStorage.token) {
  headers.Authorization = `Bearer ${localStorage.token}`
}

const axiosInstance = axios.create({
  baseURL,
  headers
})

export default axiosInstance;
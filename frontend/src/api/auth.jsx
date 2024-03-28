import axiosInstance from "./axios.jsx";

export async function login(username, password) {
    return axiosInstance.post('/login', {
        username: username,
        password: password,
      })
      .then(function (response) {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('username', username)
      })
      .catch(function (error) {
        throw error.response.data.message;
      });
}
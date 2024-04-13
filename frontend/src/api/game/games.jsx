import axiosInstance from "../axios.jsx";

export async function getGames() {
  return axiosInstance
    .get("/games")
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      throw error.response.data.message;
    });
}

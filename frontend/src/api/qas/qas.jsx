import axiosInstance from "../axios.jsx";

export async function getQuestions(gameId) {
  return axiosInstance
    .get("/questions?gameId=" + gameId)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      throw error.response.data.message;
    });
}

export async function deleteQuestionById(id, gameId) {
  return axiosInstance
    .delete(`/questions/${id}?gameId=${gameId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      if (error.response.status === 401) {
        localStorage.removeItem("token");
      }
      throw error.response.data.message;
    });
}

export async function createQuestion(data) {
  return axiosInstance
    .post(`/questions`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      if (error.response.status === 401) {
        localStorage.removeItem("token");
        console.log("token removed");
      }
      throw error.response.data.message;
    });
}

export async function editQuestion(data) {
  console.log("starting to edit question");
  return axiosInstance
    .put(`/questions/${data.id}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      if (error.response.status === 401) {
        localStorage.removeItem("token");
      }
      throw error.response.data.message;
    });
}

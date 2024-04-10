import { toast } from "react-toastify";
import axiosInstance from "../axios.jsx";

export async function getQuestions() {
  return axiosInstance
    .get("/questions")
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      throw error.response.data.message;
    });
}

export async function deleteQuestionById(id) {
  return axiosInstance
    .delete(`/questions/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then(function (response) {
      window.location.reload();
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      if (error.response.status === 401) {
        localStorage.removeItem("token");
        window.location.reload();
        toast("user session expire", {
          bodyClassName: "font-pirata bg-black text-white text-center",
          type: "error",
          draggable: true,
          position: "bottom-center",
        });
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
      window.location.reload();
      toast("Question created successfully", {
        bodyClassName: "font-pirata bg-black text-white text-center",

        type: "success",
        draggable: true,
        position: "bottom-center",
      });
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      if (error.response.status === 401) {
        localStorage.removeItem("token");
        console.log("token removed");
        window.location.reload();
        toast("user session expire", {
          bodyClassName: "font-pirata bg-black text-white text-center",
          type: "error",
          draggable: true,
          position: "bottom-center",
        });
      }
      throw error.response.data.message;
    });
}

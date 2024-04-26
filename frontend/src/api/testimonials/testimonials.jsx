import { toast } from "react-toastify";
import axiosInstance from "../axios.jsx";

export async function getTestimonials(gameId) {
  return axiosInstance
    .get("/testimonials?gameId=" + gameId)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      throw error.response.data.message;
    });
}

export async function deleteTestimonialsById(id, gameId) {
  return axiosInstance
    .delete(`/testimonials/${id}?gameId=${gameId}`)
    .then(function (response) {
      window.location.reload();
      return response.data;
    })
    .catch(function (error) {
      axiosInstance.console.log(error);
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

export async function updateStatusTestimonial(id, gameId, status) {
  return axiosInstance
    .patch(`/testimonials/${id}?gameId=${gameId}&status=${status}`)
    .then(function (response) {
      window.location.reload();
      return response.data;
    })
    .catch(function (error) {
      axiosInstance.console.log(error);
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

export async function createTestimonials(data) {
  return axiosInstance
    .post(`/testimonials`, data)
    .then(function (response) {
      window.location.reload();
      toast(data + " created successfully", {
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

export async function editTestimonials(data) {
  console.log("starting to edit testimonials");
  return axiosInstance
    .put(`/testimonials/${data.id}`, data)
    .then(function (response) {
      window.location.reload();
      toast(data + " created successfully", {
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

import { toast } from "react-toastify";
import axiosInstance from "../axios.jsx";

export async function getProducts(gameId) {
  return axiosInstance
    .get("/products?type=ITEM&gameId=" + gameId)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      throw error.response.data.message;
    });
}

export async function getServices(gameId) {
  return axiosInstance
    .get("/products?type=SERVICE&gameId=" + gameId)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      throw error.response.data.message;
    });
}

export async function deleteProductById(id, gameId) {
  return axiosInstance
    .delete(`/products/${id}?gameId=${gameId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
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

export async function createProduct(data) {
  return axiosInstance
    .post(`/products`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then(function (response) {
      window.location.reload();
      toast(data.type + " created successfully", {
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

export async function editProduct(data) {
  console.log("starting to edit product");
  return axiosInstance
    .put(`/products/${data.id}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then(function (response) {
      window.location.reload();
      toast(data.type + " created successfully", {
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

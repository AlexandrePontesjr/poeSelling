import { toast } from "react-toastify";
import axiosInstance from "../axios.jsx";

export async function getProducts() {
  // return axiosInstance.get('/products?type=ITEM')
  return axiosInstance
    .get("/6ee9e3b5-0e27-4e18-894e-a54ca5d853c4")
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      throw error.response.data.message;
    });
}

export async function getServices() {
  return axiosInstance
    .get("/products?type=SERVICE")
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      throw error.response.data.message;
    });
}

export async function deleteProductById(id) {
  return axiosInstance
    .delete(`/products/${id}`, {
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

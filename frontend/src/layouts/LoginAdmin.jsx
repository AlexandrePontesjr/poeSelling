import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../api/auth";
import logo from "../assets/logo.png";
import { useAuth } from "../backend/contexts/useAuth";
import styles from "../styles";

const LoginAdmin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const { authUser, setAuthUser, setIsLoggedIn } = useAuth();

  const logIn = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setErrorMessage("Verifique Username and Password");
        setTimeout(() => {
          setErrorMessage('');
        }, 2000);
      return;
    }
    setIsLoggedIn(true);
    setAuthUser({ username: username });
    login(username, password)
      .then(() => {
        navigate("/admin/services");
      })
      .catch((error) => {
        toast(error, {
          bodyClassName: "font-pirata bg-black text-white text-center",

          type: "error",
          draggable: true,
          position: "bottom-center",
        });
      });
    console.log(authUser);
  };

  // const logOut = (e) => {
  //     e.preventDefault()
  //     setIsLoggedIn(false)
  //     setAuthUser(null)
  // }

  const contextClass = {
    success: "bg-blue-600",
    error: "bg-black",
    info: "bg-gray-600",
    warning: "bg-orange-400",
    default: "bg-indigo-600",
    dark: "bg-white-600 font-gray-300",
  };

  return (
    <div className={`backgroundImage ${styles.flexStart}`}>
      <div className="flex justify-center background-image items-center h-screen">
        <div className="w-96 p-6 shadow-lg bg-black/70 rounded-xl">
          <form action="">
            <img className="h-32 mx-auto" src={logo} alt="logo" />
            <label className="text-3xl text-white font-pirata block text-center font-semibold">
              <i className="fa-solid fa-user"></i> Admin Panel
            </label>
            <div className="mt-3">
              <label htmlFor="username" className="text-[22px] font-pirata text-white hover:text-yellow-400">
                Username
              </label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                id="username"
                className="border-0 font-poppins w-full text-base px-2 py-1 focus:outline-none focus:ring-0 "
                placeholder="Enter Username..."
              />
            </div>
            <div className="mt-3">
              <label htmlFor="password" className="text-[22px] font-pirata text-white hover:text-yellow-400">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                className="font-poppins border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-yellow-400"
                placeholder="Enter Password..."
              />

          {errorMessage && <p className="text-red-500 text-sm mt-4">{errorMessage}</p>}

            </div>
            <div className="mt-5">
              {/* <Link className="font-pirata text-white py-1 w-full rounded-md font-semibold" to="/admin/products">Login</Link> */}
              <button
                className="font-poppins  text-black py-1 w-full rounded-md font-semibold bg-yellow-400"
                onClick={logIn}
              >
                login
              </button>
            </div>
          </form>
        </div>
        <ToastContainer
          toastClassName={(context) =>
            contextClass[context?.type || "default"] +
            " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
          }
          bodyClassName={() => "text-sm font-white font-med block p-3"}
          position="bottom-left"
          autoClose={3000}
        />
      </div>
    </div>
  );
};

export default LoginAdmin;

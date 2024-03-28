import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from "../api/auth";
import logo from "../assets/logo.png";
import { useAuth } from "../backend/contexts/auth";
import styles from "../styles";

const LoginAdmin = () => { 

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const {authUser, setAuthUser, setIsLoggedIn } = useAuth();

    const logIn = (e) => {
        e.preventDefault()
        setIsLoggedIn(true)
        setAuthUser({username: username})
        login(username, password).then(() => {
            navigate('/admin/services')
        }).catch((error) => {
            toast(error, {
                bodyClassName: "font-pirata bg-black text-white text-center",
                
                  type: "error", draggable: true, position: "bottom-center" });
        })
        console.log(authUser)
    }

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
        <div className="w-96 p-6 shadow-lg bg-black rounded-md">
        <form action="">
            <img className="h-32 mx-auto" src={logo} alt="logo"/>
            <label className="text-3xl text-white font-pirata block text-center font-semibold"><i className="fa-solid fa-user"></i> Admin Panel</label>
            <div className="mt-3">
                <label htmlFor="username" className="font-pirata text-white">Username</label>
                <input onChange={(e) => setUsername(e.target.value)} type="text" id="username" className="border font-pirata w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Username..." />
            </div>
            <div className="mt-3">
                <label htmlFor="password" className="font-pirata text-white">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" className="font-pirata border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Password..." />
            </div>
            <div className="mt-5">
                {/* <Link className="font-pirata text-white py-1 w-full rounded-md font-semibold" to="/admin/products">Login</Link> */}
                <button className="font-pirata text-white py-1 w-full rounded-md font-semibold" onClick={logIn}>login</button>
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
}

export default LoginAdmin;

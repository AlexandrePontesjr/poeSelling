import React, { useState } from "react";
import styles from "../styles";
import logo from "../assets/logo.png";
import { useAuth } from "../backend/contexts/auth";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "../components";
import { Link } from "react-router-dom";

const LoginAdmin = () => { 

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

    const logIn = (e) => {
        e.preventDefault()
        setIsLoggedIn(true)
        setAuthUser({username: username})
        console.log(authUser)
    }

    const logOut = (e) => {
        e.preventDefault()
        setIsLoggedIn(false)
        setAuthUser(null)
    }

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
                <Link className="font-pirata text-white py-1 w-full rounded-md font-semibold" to="/admin/products">Login</Link>
            </div>
            </form>
        </div>
    </div>
  </div>
  );
}

export default LoginAdmin;

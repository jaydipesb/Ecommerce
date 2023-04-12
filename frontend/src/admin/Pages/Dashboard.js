import React from 'react'
import { BrowserRouter as Router, Route, Routes,Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PrivateComponent from "../../Auth/PrivateComponent";

import AdminFooter from "../AdminLayout/AdminFooter";
import AdminHeader from "../AdminLayout/AdminHeader";
import AdminContent from "../AdminLayout/AdminContent";
import AdminSidebar from "../AdminLayout/AdminSidebar";
import Users from "../../admin/Pages/Users";
import Products from "../../admin/Pages/Products";


const Dashboard = () => {1
  return (
   <div className="App">
     <h1>Hello world</h1>
    </div>
  )
}

export default Dashboard

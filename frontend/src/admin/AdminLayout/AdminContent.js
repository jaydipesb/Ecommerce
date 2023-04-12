import React from 'react'
import { BrowserRouter , Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PrivateComponent from "../../Auth/PrivateComponent";


import AdminSidebar from "../AdminLayout/AdminSidebar";
import Users from "../../admin/Pages/Users";
import Products from "../../admin/Pages/Products";


const AdminContent = () => {
  return (
    <div>
       <div className="SideMenuAndPageContent">

        <AdminSidebar></AdminSidebar>
          <ToastContainer position="top-center" />
            <Route element={<PrivateComponent />}></Route>
            <Route path="/" element={<Users />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/product" element={<Products />} />

      </div>
    </div>
  )
}

export default AdminContent

import React from "react";
import AdminSideBar from "./AdminSideBar";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="container-fluid back-ground">
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <AdminSideBar />
          </div>
          <div className="col-sm-9 outlet container-pad">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

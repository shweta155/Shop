import React from "react";
import AdminMenu from "../../components/layouts/AdminMenu.js";
import Layout from "./../../components/layouts/Layout.js";

const User = () => {
  return (
    <Layout title={"Dashboard - All Users"}>
      <div className="container-fluid my-4 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-8">
            <h1>All Users</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default User;

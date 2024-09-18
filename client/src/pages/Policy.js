import React from "react";
import Layout from "./../components/layouts/Layout.js";
import { Link } from "react-router-dom";
const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/Images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h3>Privacy Policy</h3>
          <h4>Effective Date: September 18, 2024</h4>
          <p>
            Introduction Shopper ("we," "us," or "our") is committed to
            protecting your privacy. This Privacy Policy explains how we
            collect, use, and disclose information 1 about you when you visit
            our website .  
          </p>
          <button className="bg-dark p-2 text-center  ">
            <Link className="text-white" to="/PrivacyPolicy">
              Privacy Policy
            </Link>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;

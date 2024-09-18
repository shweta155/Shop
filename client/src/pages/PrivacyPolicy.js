import React from "react";
import Layout from "./../components/layouts/Layout.js";

const PrivacyPolicy = () => {
  return (
    <Layout title={"Privacy Policy - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/Images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            <b>Personal Information:</b> This includes your name, email address,
            phone number, shipping address, and billing information.<br></br>
            <b>Processing orders: </b>
            We use your information to process and fulfill your orders.
            <br></br>
            <b>Customer service:</b> We may use your information to provide
            customer support.
            <br></br>
            <b> Marketing:</b>
            We may use your information to send you marketing communications,
            such as emails, newsletters, or promotions.
            <br></br>
            <b>Analytics:</b>
            We use analytics tools to understand how you use our website and to
            improve our services. Sharing Your Information We may share your
            information with third parties, such as:<b>Payment processors:</b>
            We share your payment information with our payment processors to
            process your orders.<br></br>
            <b> Service providers:</b> We may share your information with
            third-party service providers who help us operate our website and
            business.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;

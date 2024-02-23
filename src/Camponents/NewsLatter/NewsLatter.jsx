import React from "react";
import "./NewsLatter.css";
const NewsLatter = () => {
  return (
    <div className="newslatter">
      <h1>Get Exclusive Ofeers On Your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input type="email" placeholder="Your Email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLatter;

import React from "react";
import "./CSS/Page1.css";

function Page1() {
  return (
    <div className="overall">
      <h1 className="NavigationFirst">First</h1>
      <nav className="Navigation">
        <p className="NavigationStyle">Home</p>
        <p className="NavigationStyle">About</p>
        <p className="NavigationStyle">Services</p>
        <p className="NavigationStyle">Project</p>
        <p className="NavigationStyle">Contact</p>
      </nav>
      <div className="ContactHeader">
        <p className="ContactHeaderStyle">ICON</p>
        <p className="ContactHeaderStyle">+9112120102102</p>
      </div>
    </div>
  );
}

export default Page1;

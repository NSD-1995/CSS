import React from "react";
import "./CSS/Page3.css";

import Images4 from "../Images/handshake-man-woman-after-signing-business-contract-closeup.jpg";

function Page3() {
  return (
    <div>
      <div className="OverallPage3">
        <div className="part1set">
          <table>
            <td className="info">
                Information
              </td>
              <tr>
                <td>Name</td>
                <td>Jousha Morgan</td>
              </tr>
              <tr>
                <td>Birthday</td>
                <td>Aug 12-1980</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>+91-8012108243</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>rajdivahar@gmail.com</td>
              </tr>
    
          </table>
        </div>
        <div className="partdetails">
          <div className="part2set">
          <div className="box1">
            <h1>20+</h1>
            <p>Years of Experience</p>
          </div>
          <div className="box2">
            <h1>20+</h1>
            <p>Years of Experience</p>
          </div>
          <div className="box3">
            <h1>20+</h1>
            <p>Years of Experience</p>
          </div>
          <div className="box4">
            <h1>20+</h1>
            <p>Years of Experience</p>
          </div>
          </div>
          
          
        </div>
      </div>
      <div className="OverallPage3part2">
        <div>
          <h1>Companies I worked</h1>
        </div>
        <div className="imagelistpag3">
          <div >
            <img className="imageindividula" src={Images4} />
          </div>
          <div >
            <img  className="imageindividula" src={Images4} />
          </div>
          <div >
            <img  className="imageindividula" src={Images4} />
          </div>
          <div >
            <img className="imageindividula"  src={Images4} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page3;

import React from "react";
import "./CSS/Page6.css";
import Images5 from "../Images/handshake-man-woman-after-signing-business-contract-closeup.jpg";
import Images6 from "../Images/nikhil-KO4io-eCAXA-unsplash.jpg";

function Page6() {
  return (
    <div>
      <div className="part1">
        <img className="part1image" src={Images5} />
        <h1 className="part1text">Projects</h1>
      </div>

      <div className="part2">
        <div className="part2part1">
          <div className="part2all">
            <div>
              <h4>Services</h4>
            </div>
            <div className="part2services">
              <p className="serviceslist">website</p>
              <p className="serviceslist">Branding</p>
              <p className="serviceslist">Ecommerce</p>
              <p className="serviceslist">SEO</p>
            </div>
            <div>
              <h4>Stay Connected</h4>
            </div>
            <div className="scimaglist">
              <img className="scimg" src={Images6} />
              <img className="scimg" src={Images6} />
              <img className="scimg" src={Images6} />
              <img className="scimg" src={Images6} />
            </div>
            <div>
              <h4>Start A PROJECT</h4>
            </div>
            <div>
              <p>I'm a available for freelancing Projects</p>
            </div>
          </div>
          <div className="part2allSecond">
            <div>
              <h4>Start A PROJECT</h4>
            </div>
            <div>
              <p>I'm a available for freelancing Projects</p>
            </div>
            <div>
              <h4>ABOUT</h4>
            </div>
            <div>
              <p>I'm a available for freelancing Projects</p>
            </div>
            <div>
              <h4>EMAIL</h4>
            </div>
            <div>
              <p>I'm a available for freelancing Projects</p>
            </div>
          </div>
        </div>
        <div className="part2part2">
          <div className="part2part2part1">
            <input className="listName" placeholder="Name"></input>
            <input className="listName" placeholder="Email-id"></input>
          </div>
          <div className="secondpart5676">
            <div className="secondpartlist">
              <img className="imageswidth" src={Images6} />
              <p>website</p>
            </div>
            <div className="secondpartlist">
              <img className="imageswidth" src={Images6} />
              <p>website</p>
            </div>
            <div className="secondpartlist">
              <img className="imageswidth" src={Images6} />
              <p>website</p>
            </div>
            <div className="secondpartlist">
              <img className="imageswidth" src={Images6} />
              <p>website</p>
            </div>
          </div>
          <div>
            <textarea
              placeholder="tell me about yourself"
              className="textarea"
            />
          </div>
          <div>
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page6;

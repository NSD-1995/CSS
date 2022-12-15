import React from "react";
import Images from "../Images/couple-working-from-home-together-sofa.jpg";
import Images1 from "../Images/happy-bearded-young-man.jpg";
import "./CSS/Page2.css";

function Page2() {
  return (
    <div className="overallPage2">
      <div className="imges">
        <img className="imges2" src={Images} />
      </div>
      <div className="secondpart">
        <div className="secondPArt1">
        <h1 className="Storytitle">My Story</h1>
        <img className="imges3" src={Images1} />
        </div>
        <div>
          <h1>A little about Joshusa</h1>
          <p>
            The primary purpose of Lorem Ipsum is to create text that does not
            distract from the overall layout and visual hierarchy. Although the
            text is in Latin, it does not have any intelligible meaning. It's
            merely a generic text used to hold a place in a file until the
            actual text or visuals are created to replace it.18-Dec-2019
            The primary purpose of Lorem Ipsum is to create text that does not
            distract from the overall layout and visual hierarchy. Although the
            text is in Latin, it does not have any intelligible meaning.
          </p>
          <p>
            The primary purpose of Lorem Ipsum is to create text that does not
            distract from the overall layout and visual hierarchy. Although the
            text is in Latin, it does not have any intelligible meaning. It's
            merely a generic text used to hold a place in a file until the
            actual text or visuals are created to replace it
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page2;

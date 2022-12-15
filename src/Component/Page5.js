import React from 'react'
import "./CSS/Page5.css";
import Images5 from "../Images/handshake-man-woman-after-signing-business-contract-closeup.jpg";
import Images6 from "../Images/nikhil-KO4io-eCAXA-unsplash.jpg";

function Page5() {
  return (
    <div className='OverallPage5'>
      <div className='part1'>
        <img className='part1image' src={Images5}/>
        <h1 className='part1text'>Projects</h1>
      </div>
      <div className='overallImage'>
      <div className='part2Details'>
          <p>Branding</p>
          <h1>Zoik agency</h1>
          <img  className="part2Image" src={Images6} />
        </div>
        <div className='part2Details'>
          <p>Branding</p>
          <h1>Zoik agency</h1>
          <img  className="part2Image" src={Images6} />
        </div>
        <div className='part2Details'>
          <p>Branding</p>
          <h1>Zoik agency</h1>
          <img  className="part2Image" src={Images6} />
        </div>
      </div>
    </div>
  )
}

export default Page5
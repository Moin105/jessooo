import React from "react";

import dots from '../../Images/dots.png'
function Rowsop({icon}) {
  return (
    <React.Fragment>
      <div className="row">
        <div className="box">
            <div className="left">
   <div className="icon-container">
            <img src={icon} />
          </div>
          <div className="detail-heading">
            <h5>Code of Conduct</h5>
            <p>Company Code of Conduct to be read and signed</p>
          </div>
            </div>
       
         <div className="circle-box">
            <div className="circle">{/* <img>?</img> */}</div>
            <div className="circle">{/* <img>?</img> */}</div>
            <div className="circle">{/* <img>?</img> */}</div>
         </div> 
        </div>
        <span className="dots"><img src={dots}/></span>
      </div>
    </React.Fragment>
  );
}

export default Rowsop;

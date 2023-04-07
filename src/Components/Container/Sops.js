import React from 'react'
import Rowsop from './Rowsop'
import setting from "../../Images/setting.png";
import check from "../../Images/check.png";
import document from "../../Images/document.png";
import { Link } from 'react-router-dom';
import {CgSearch} from 'react-icons/cg'
function Sops() {
  return (
   <React.Fragment>
             <div className='container-sop'>
            <h3>SOPs</h3>
           
            <div className='sop-container-row'>
              <div className='input-container'>
                <span><CgSearch/></span>
                <input type='text' placeholder='Search SOPs'/>
              </div>
              <Link to="/addsops"><button>Add SOP</button></Link>  
            </div>
            <div className='card-sop'>
              <Rowsop icon={setting}/>
              <Rowsop icon={check}/>
              <Rowsop icon={document}/>
            </div>
            </div>
   </React.Fragment>
  )
}

export default Sops
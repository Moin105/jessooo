import React from 'react'
import './styles.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import user from '../../Images/profile.png'
function Header() {
  return (
    <React.Fragment>
        <div className='header'>    
        <React.Fragment>
          <div className='menu'>
              <GiHamburgerMenu/>
          </div>   
        </React.Fragment> 
            <div className='circle'>
                <img src={user}/>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Header
import React from 'react';
import Tab from './Tab';
import  './styles.css';
import logo from '../../Images/logo.png'
import setting from '../../Images/tabsetting.png'
import user from '../../Images/user.png'
import whatsapp from '../../Images/whatsapp.png'
import { showNav, hideNav } from '../../Actions/action';
import { connect } from 'react-redux';

function SideBar() {

  return (
    <React.Fragment>
     <div className='nav-bar'>
           <figure className='logo'>
            <img src={logo}/>
           </figure>
           <div className='btn-container'>
          <Tab name="SOPs" icon={setting} onClick={showNav}/>
            <Tab name="User" icon={user} />
            <Tab name="Support"  icon={whatsapp}/>
           </div>
          
     </div>
    </React.Fragment>
  )
}
const mapStateToProps = state => ({
  show: state.show
},
console.log("first",state.show)

);
const mapDispatchToProps = {
  showNav,
  hideNav
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);

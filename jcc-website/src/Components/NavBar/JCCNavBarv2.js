import './NavBar.css';
import React, {Component} from 'react';
import "./JCCNavBarv2.css";
import Logo from '../../Images/jcc-logo-v1.png';

class JCCNavBar extends Component{
    render() {
      return ( 
          <div>
                    <input type="checkbox" id="check"></input>
                    <header>
                    <label for="check">
                        <i class="fas fa-bars" id="sidebar_btn"></i>
                    </label>
                    {/* <div class="left_area">
                        <h3>Coding <span>Snow</span></h3>
                    </div> */}
                    {/* <div class="right_area">
                        <a href="#" class="logout_btn">Logout</a>
                    </div> */}
                    </header>
                    <div class="sidebar">
                    <center>
                        <img src={Logo} class="profile_image" alt=""/>
                        <h4>Japanese Culture Club</h4>
                    </center>
                    <a href="#"><i class="fas fa-desktop"></i><span>Dashboard</span></a>
                    <a href="#"><i class="fas fa-cogs"></i><span>Components</span></a>
                    <a href="#"><i class="fas fa-table"></i><span>Tables</span></a>
                    <a href="#"><i class="fas fa-th"></i><span>Forms</span></a>
                    <a href="#"><i class="fas fa-info-circle"></i><span>About</span></a>
                    <a href="#"><i class="fas fa-sliders-h"></i><span>Settings</span></a>
                    </div>
          </div>
      )
    }
}


export default JCCNavBar;


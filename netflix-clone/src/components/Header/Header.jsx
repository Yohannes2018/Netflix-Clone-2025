import React from 'react'
import './Header.css'
import NetflixLogo from '../../assets/images/Netflix_Logo_RGB.png'
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBox from "@mui/icons-material/AccountBox";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
function Header() {
  return (
    <div className="header-outer-container">
      <div className="header-container">
        <div className="header-left">
          <ul>
            <li><img src={NetflixLogo} alt="Netflix Logo" width="100" /></li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header-right">
          <ul>
            <li><SearchIcon /></li>
            <li><NotificationsNoneIcon /></li>
            <li><AccountBox /></li>
            <li><ArrowDropDownCircleIcon/></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header
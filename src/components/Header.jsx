import hamMenu from '../icons/hamburger-menu.svg'
import logo from '../icons/youtube-logo.svg'
import search from '../icons/search.svg'
import voiceSearchIcon from '../icons/voice-search-icon.svg'
import upload from '../icons/upload.svg'
import YTapps from '../icons/youtube-apps.svg'
import notifications from '../icons/notifications.svg'
import myChannel from '../icons/my-channel.jpg'

import './Header.css'
export default function Header(){
    return (
        <header className="header">
      <div className="left-section">
        <img className="hamburger-menu" src={hamMenu} alt='Menu' />
        <img className="youtube-logo" src={logo} alt='Logo' />
      </div>
      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" />
        <button className="search-button">
          <img className="search-icon" src={search} alt='Search' />
          <div className="toolTip">Search</div>
        </button>
        <button className="voice-search-button">
          <img className="voice-search-icon" src={voiceSearchIcon} alt='voice search' />
          <div className="toolTip">Search with your voice</div>
        </button>
      </div>
      <div className="right-section">
        <div className="create-btn">
          <img className="upload-icon" src={upload} alt='Upload' />
          <div className="toolTip">Create</div>
        </div>
        <div className="apps-btn">
          <img className="youtube-apps-icon" src={YTapps} alt='YouTube Apps' />
          <div className="toolTip">Youtube Apps</div>
        </div>
        <div className="notifications-icons-container">
          <img className="notifications-icon" src={notifications} alt='Notifications' />
          <div className="toolTip">Notifications</div>
          <div className="notifications-count">3</div>
        </div>
        <img className="current-user-picture" src={myChannel} alt='My Channel' />
      </div>
    </header>
        
    )
}
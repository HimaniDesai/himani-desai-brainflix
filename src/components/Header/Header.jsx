import "./Header.scss";
import companyLogo from '../../assets/logo/Brainflix-logo.svg';
import profilePic from '../../assets/images/Mohan-muruge.jpg';
// import upload_icon from '../../assets/icons/upload.svg';
import Button from "../Button/Button";
import { Link } from "react-router-dom";


function Header() {

    return (
      <>
        <header className="header">
          
          <div className="header-wrapper">
          <Link to='/'><img className="header-wrapper__logo" src={companyLogo}></img></Link>
          </div>
          
          
          <div className="search-section">
            <div className="search-section-wrapper">
              <label>
                <input type='text' className="search-section-wrapper__input" placeholder="Search"></input>
              </label>
              {/* <a href={'/src/App.js'}><button className="search-section__button-tablet">UPLOAD</button></a> */}
              <Button text='UPLOAD' class='search-section__button-tablet'/>
              <img className="search-section-wrapper__user" src={profilePic}></img>
            </div>
            <button className="search-section__button">UPLOAD</button>
          </div> 
        </header>
      </>
    );
}


export default Header;
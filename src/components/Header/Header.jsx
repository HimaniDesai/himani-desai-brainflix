import "./Header.scss";
import companyLogo from '../../assets/logo/Brainflix-logo.svg';
import profilePic from '../../assets/images/Mohan-muruge.jpg';
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
              <Link to={'/upload'}><button  className='search-section__button-tablet'>UPLOAD</button></Link>
              <img className="search-section-wrapper__user" src={profilePic}></img>
            </div>
            <Link to={'/upload'}><button className="search-section__button">UPLOAD</button></Link>
          </div> 
        </header>
      </>
    );
}


export default Header;
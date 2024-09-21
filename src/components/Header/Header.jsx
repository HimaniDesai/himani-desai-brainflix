import "./Header.scss";
import companyLogo from '../../assets/logo/Brainflix-logo.svg';
import profilePic from '../../assets/images/Mohan-muruge.jpg';


function Header() {

    return (
      <>
        <header className="header">
          <div className="header-wrapper">
            <img className="header-wrapper__logo" src={companyLogo}></img>
          </div>
          
          <div className="search-section">
            <div className="search-section-wrapper">
              <label>
                <input type='text' className="search-section-wrapper__input" placeholder="Search"></input>
              </label>
              <a href={'/src/App.js'}><button className="search-section__button-tablet">UPLOAD</button></a>
              <img className="search-section-wrapper__user" src={profilePic}></img>
            </div>
            <a href={'/src/App.js'}><button className="search-section__button">UPLOAD</button></a>
          </div> 
        </header>
      </>
    );
}


export default Header;
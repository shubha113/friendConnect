import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../styles/navbar.css'

const Navbar = () => {
  const [isLoggedIn] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logout clicked");
  };
  const toggleMobileMenu = () =>{
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h1>FriendConnect</h1>
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link"></Link>

          {isLoggedIn ? (
            <>
              <Link to="/friends" className="nav-link">
                Friends
              </Link>
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </>
          ) : (
            <button onClick={() => navigate("/login")} className="login-btn">
              Login
            </button>
          )}
        </div>{" "}
        <div className="mobile-menu">
        <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

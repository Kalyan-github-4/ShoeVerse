import "./Nav.css";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Nav = ({handleInputChange}) => {
  return (
    <nav>
      <div className="logo-container">
        <h1><img src="shoes-svgrepo-com.svg" alt="logo" width="45" height="45"/>ShoeVerse</h1>
      </div>
      
      <div className="nav-container">
        <input 
          type="text" 
          className="search-input"
          placeholder="Search for shoes..."
          onChange={handleInputChange}
        />
      </div>

      <div className="profile-container">
        <a href="#" aria-label="Wishlist">
          <FaRegHeart className="nav-icons"/>
        </a>
        <a href="#" aria-label="Cart" className="cart-badge" data-count="0">
          <IoCartOutline className="nav-icons"/>
        </a>
        <a href="#" aria-label="Account">
          <FaRegUser className="nav-icons"/>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
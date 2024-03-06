import { BsFillPersonCheckFill } from "react-icons/bs";
import { RiHeartAddFill } from "react-icons/ri";
import { BsFillBagPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  let bagItem = useSelector(state => state.Bag);
  return (
    <header>
      <div className="logo_container">
        <Link to="/">
        <img
            className="myntra_home"
            src="images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon">search</span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <BsFillPersonCheckFill />
          <span className="action_name text-black">Profile</span>
        </div>

        <div className="action_container">
        <RiHeartAddFill />
          <span className="action_name text-black">Wishlist</span>
        </div>

        <Link to={`/bag`} className="action_container">
          <BsFillBagPlusFill />
          <span className="action_name text-black">Bag</span>
          <span className="bag-item-count">{bagItem.length}</span>
        </Link>  
      </div>
    </header>
  );
};

export default Header;

import "./navbar.css";
import OlxLogo from "../../assets/Olx_logo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButtonPlus from "../../assets/SellButtonPlus";
import SellButton from "../../assets/SellButton";
import { AuthContext, FirebaseContext } from "../../store/Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { auth } = useContext(FirebaseContext); // Use 'auth' from FirebaseContext

  const logout = () => {
    auth.signOut(); // Call signOut from auth
    navigate("/");
  };

  return (
    <div className="Navbar">
      <div
        className="OlxLogo"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        <OlxLogo />
      </div>

      <div className="placeSearch">
        <Search />
        <input
          type="text"
          placeholder="Search City, area or loc..."
          defaultValue="India"
        />
        <Arrow />
      </div>

      <div className="productSearch">
        <div className="input">
          <input type="text" placeholder="Find car, mobile phone and more..." />
        </div>
        <div className="searchAction">
          <Search color="#ffffff" />
        </div>
      </div>

      <div className="language">
        <span> ENGLISH </span>
        <Arrow />
      </div>

      <div className="loginPage">
        <span style={{ marginRight: "6px" }}>{user && user.displayName}</span>
        {!user && (
          <span
            onClick={() => navigate("/login")}
            style={{ cursor: "pointer" }}
          >
            Login
          </span>
        )}
        {user && (
          <span
            onClick={logout}
            style={{ backgroundColor: "lightblue", cursor: "pointer" }}
          >
            Logout
          </span>
        )}
      </div>

      <div
        className="sellMenu"
        onClick={() => (user ? navigate("/sellproduct") : navigate("/login"))}
      >
        <SellButton />
        <div className="sellMenuContent">
          <SellButtonPlus />
          <span>SELL</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { useContext, useEffect, useState } from "react";
import OlxLogo from "../../assets/olx-seeklogo.svg";
import "./login.css";
import { FirebaseContext, AuthContext } from "../../store/Context"; // Import AuthContext
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const Login = () => {
  const { setUser, user } = useContext(AuthContext); // Use AuthContext here
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { auth } = useContext(FirebaseContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message before login attempt

    try {
      const userAuth = await signInWithEmailAndPassword(auth, email, password);
      const userId = userAuth.user.uid;

      // Assuming `db` is imported and configured for Firestore
      const userDocRef = doc(db, "users", userId);
      const userData = await getDoc(userDocRef);

      setUser(userData.data());
      console.log(user);
    } catch (error) {
      setError(error.message);
      console.log("Login failed:", error.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <img className="login-logo" src={OlxLogo} alt="OLX Logo" />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Login" />
        </form>
        <a href="/signup" className="redirect-link">
          Register..!
        </a>
      </div>
    </div>
  );
};

export default Login;

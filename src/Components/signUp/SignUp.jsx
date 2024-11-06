import { useState, useContext } from "react";
import OlxLogo from "../../assets/olx-seeklogo.svg";
import { FirebaseContext } from "../../store/Context";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./signUp.css";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const { auth } = useContext(FirebaseContext);
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();

    if (!userName || !email || !password) {
      setMessage("Please fill in all fields.");
    } else if (password.length <= 4) {
      setMessage("Password length should be at least 5 characters.");
    } else {
      setMessage("");
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        // Set display name
        await updateProfile(user, { displayName: userName });

        setSuccess("User created successfully!");
        navigate("/login");
      } catch (error) {
        setMessage(error.message);
        setSuccess("");
      }
    }
  };

  return (
    <div className="signUp-page">
      <div className="signUp-box">
        <div className="content">
          <img src={OlxLogo} alt="OLX Logo" />
          <h5 style={{ color: "red" }}>{message}</h5>
          <h5 style={{ color: "green" }}>{success}</h5>
          <form onSubmit={handleForm}>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Name..."
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
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
            <input type="submit" value="Sign Up" />
          </form>
          <a href="/login" className="redirect-link">
            Already have an account?
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

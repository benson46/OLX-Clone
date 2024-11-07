import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LoginPage from "./Pages/Login";
import SignUpPage from "./Pages/SignUp";
import SellProduct from "./Pages/SellProduct";
import Error from "./Pages/Error";
import { AuthContext, FirebaseContext } from "./store/Context";
import { useContext, useEffect } from "react";
import ProductDetailPage from "./Pages/ProductDetailsPage";

const App = () => {
  const { setUser } = useContext(AuthContext);
  const { auth } = useContext(FirebaseContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe(); // Clean up the subscription on unmount
  }, [auth, setUser]);

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/sellproduct" element={<SellProduct />} />
          <Route path="/productview/:productId" element={<ProductDetailPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

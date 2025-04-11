import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../../store/Context";
import { collection, getDocs } from "firebase/firestore"; // Import necessary Firestore functions
import "./post.css";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import { useNavigate } from "react-router-dom";

function Posts() {
  const { db } = useContext(FirebaseContext); // Use firestore from FirebaseContext
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const collectionRef = collection(db, "products");
        const dbRes = await getDocs(collectionRef);

        const fetchedDocuments = dbRes.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Fetch additional products from the external API
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts([...fetchedDocuments, ...response.data]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProduct();
  }, [db]);

  return (
    <div className="postParentDiv">
      {loading ? (
        <Spinner />
      ) : (
        <div className="moreView">
          <div className="cards">
            {products.map((product) => (
              <div className="card" key={product.id} onClick={()=>navigate(`/productview/${product.id}`)}>
                <div className="image">
                  <img
                    src={product.url || product.image}
                    alt={product.name || "Product Image"}
                  />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9; {product.price}</p>
                  <h3 className="name">{product.name || product.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Posts;

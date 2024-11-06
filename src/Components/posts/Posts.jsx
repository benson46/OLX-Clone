import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../../store/Context";
import { collection, getDocs } from "firebase/firestore"; // Import necessary Firestore functions
import "./post.css";
import axios from "axios";
import Spinner from "../Spinner/Spinner";

function Posts() {
  const { firestore } = useContext(FirebaseContext); // Use firestore from FirebaseContext
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Use firestore instead of db
        const collectionRef = collection(firestore, "products");
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
  }, [firestore]);

  console.log(products);
  return (
    <div className="postParentDiv">
      {loading ? (
        <Spinner />
      ) : (
        <div className="moreView">
          <div className="cards">
            {products.map((product) => (
              <div className="card" key={product.id}>
                <div className="favorite"></div>
                <div className="image">
                  <img
                    src={product.url || product.image}
                    alt={product.name || "Product Image"}
                  />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9; {product.price}</p>
                  <h3 className="name">{product.name || product.title}</h3>
                  <span className="kilometer">{product.category}</span>
                </div>
                <div className="date">
                  <span>{product.createdAt}</span>
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

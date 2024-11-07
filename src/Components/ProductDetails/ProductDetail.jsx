import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import axios from "axios";
import { db } from "../../config/Firebase";
import "./productDetails.css";
import Spinner from "../Spinner/Spinner";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, "products", productId);
        const productDoc = await getDoc(docRef);
    
        if (productDoc.exists()) {
          setProduct(productDoc.data());
        } else {
          fetchProductFormApi();
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    
    const fetchProductFormApi = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);

        setProduct({
          title: response.data.title,
          price: response.data.price,
          description: response.data.description,
          image: response.data.image, // Adjust field name if needed
          name: "Unknown Seller", // Default name if missing
          email: "No Email", // Default email if missing
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    
    

    fetchProduct();
  }, []);

  return (
    <>
      {loading && <Spinner />}
      {!loading && (
        <div className="product-detail-page">
          <div className="product-div">
            <div className="product-image">
              <img
                className="img"
                src={product?.image || product?.url}
                alt=""
              />
            </div>

            <div className="product-details">
              <h1>{product?.title || product?.name}</h1>

              <h2> {`Rs. ${product?.price}`} </h2>

              <p> {product?.description} </p>
            </div>
          </div>

          <div className="seller-details">
            <h3>Seller's Details</h3>

            <p>Seller's Name : {product?.name || `user12`} </p>
            <p>Seller's Email : {product?.email || `No Email`}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;

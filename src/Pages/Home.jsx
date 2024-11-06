import Ads from "../components/ads/Ads";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Posts from "../components/posts/Posts";

const Home = () => {
  return (
    <>
      <Navbar />
      <Ads />
      <Posts />
      <Footer />
    </>
  );
};

export default Home;

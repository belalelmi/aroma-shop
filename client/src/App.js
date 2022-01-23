import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.scss";
import Home from "./screens/HomeScreen";
import About from "./screens/AboutScreen";
import Footer from "./components/Footer";
import ExploreScreen from "./screens/ExploreScreen";
import ScentScreen from "./screens/ScentScreen";
import PricingScreen from "./screens/PricingScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/AboutUs" element={<About />} />
        <Route path="/ExploreScents" element={<ExploreScreen />} />
        <Route path="/product/:id" element={<ScentScreen />} />
        <Route path="/plans" element={<PricingScreen />} />
        <Route path="/cart/:id/*" element={<CartScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

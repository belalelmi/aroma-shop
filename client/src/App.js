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
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentChoiceScreen from "./screens/PaymentChoice";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/login/shipping" element={<ShippingScreen />} />
        <Route path="/payment" element={<PaymentChoiceScreen />} />
        <Route path="/placeorder" element={<PlaceOrderScreen />} />
        <Route path="/login" element={<LoginScreen location={window.location} />} />
        <Route path="/register" element={<RegisterScreen location={window.location} />} />
        <Route path="/profile" element={<ProfileScreen location={window.location} />} />
        <Route path="/AboutUs" element={<About />} />
        <Route path="/cart/:id/*" element={<CartScreen />} />
        <Route path="/ExploreScents" element={<ExploreScreen />} />
        <Route path="/product/:id" element={<ScentScreen />} />
        <Route path="/plans" element={<PricingScreen />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;


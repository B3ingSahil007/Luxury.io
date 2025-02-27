import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import MyProfile from './pages/MyProfile';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ShopContext } from './context/ShopContext';

const App = () => {
  const { token } = useContext(ShopContext);

  // Wrapper for Protected Routes
  const ProtectedRoute = ({ children }) => {
    if (!token) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <>
      <div className="container">
        <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" transition={Slide} bodyClassName="toastBody" />
        <Navbar />
        <SearchBar />
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<Login />} />
          {/* Protected Routes */}
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/collection" element={<ProtectedRoute> <Collection /> </ProtectedRoute>} />
          <Route path="/about" element={<ProtectedRoute> <About /> </ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute> <Contact /> </ProtectedRoute>} />
          <Route path="/product/:productId" element={<ProtectedRoute> <Product /> </ProtectedRoute>} />
          <Route path="/cart" element={<ProtectedRoute> <Cart /> </ProtectedRoute>} />
          <Route path="/myprofile" element={<ProtectedRoute> <MyProfile /> </ProtectedRoute>} />
          <Route path="/placeorder" element={<ProtectedRoute> <PlaceOrder /> </ProtectedRoute>} />
          <Route path="/orders" element={<ProtectedRoute> <Orders /> </ProtectedRoute>} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;

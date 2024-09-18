import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import Policy from "./pages/Policy.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Pagenotfound from "./pages/PageNotFound.js";
import Categories from "./pages/Categories.js";
import Register from "./pages/Auth/Register.js";
import Login from "./pages/Auth/login.js";
import Dashboard from "./pages/user/Dashboard.js";
import PrivateRoute from "./components/routes/PrivateRoute.js";
import ForgotPasssword from "./pages/Auth/ForgotPassword.js";
import AdminRoute from "./components/routes/AdminRoute.js";
import AdminDashboard from "./pages/Admin/AdminDashboard.js";
import CreateCategory from "./pages/Admin/CreateCategory.js";
import CreateProduct from "./pages/Admin/CreateProduct.js";
import User from "./pages/Admin/User.js";
import UserOrders from "./pages/user/UserOrders.js";
import UserProfile from "./pages/user/UserProfile.js";
import Products from "./pages/Admin/Products.js";
import UpdateProduct from "./pages/Admin/UpdateProduct.js";
import Search from "./pages/Search.js";
import ProductDetails from "./pages/ProductDetails.js";
import CategoryProduct from "./pages/CategoryProduct.js";
import CartPage from "./pages/CartPage.js";
import AdminOrders from "./pages/Admin/AdminOrders.js";
import PrivacyPolicy from "./pages/PrivacyPolicy.js";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        {/* nested route : fristlty check the private route and then execute teh nested route */}

        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<UserOrders />} />
          <Route path="user/profile" element={<UserProfile />} />
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/users" element={<User />} />
          <Route path="admin/orders" element={<AdminOrders />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPasssword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;

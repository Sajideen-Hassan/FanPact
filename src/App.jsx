import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { DataProvider } from './context/DataContext';
import { WishlistProvider } from './context/WishlistContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import LandingPage from './pages/shop/LandingPage';
import SportsSelectionPage from './pages/shop/SportsSelectionPage';
import SchoolSelectionPage from './pages/shop/SchoolSelectionPage';
import TeamSelectionPage from './pages/shop/TeamSelectionPage';
import PlayersPage from './pages/shop/PlayersPage';
import PlayerDetailsPage from './pages/shop/PlayerDetailsPage';
import CartPage from './pages/shop/CartPage';
import CheckoutPage from './pages/shop/CheckoutPage';
import OrderConfirmationPage from './pages/shop/OrderConfirmationPage';
import BlogPage from './pages/shop/BlogPage';
import WishlistPage from './pages/shop/WishlistPage';
import AboutUsPage from './pages/info/AboutUsPage';
import ContactPage from './pages/info/ContactPage';
import TermsPage from './pages/info/TermsPage';
import PrivacyPage from './pages/info/PrivacyPage';
import CookiePolicyPage from './pages/info/CookiePolicyPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import AdminDashboard from './pages/admin/AdminDashboard';

function Layout() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <CartProvider>
          <WishlistProvider>
            <Router>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<LandingPage />} />
                  <Route path="shop" element={<LandingPage />} />
                  <Route path="market" element={<SportsSelectionPage />} />
                  <Route path="shop/sport/:sportId" element={<SchoolSelectionPage />} />
                  <Route path="shop/school/:schoolId" element={<TeamSelectionPage />} />
                  <Route path="shop/team/:teamId" element={<PlayersPage />} />
                  <Route path="player/:playerId" element={<PlayerDetailsPage />} />
                  <Route path="cart" element={<CartPage />} />
                  <Route path="wishlist" element={<WishlistPage />} />
                  <Route path="blog" element={<BlogPage />} />
                  <Route path="about" element={<AboutUsPage />} />
                  <Route path="contact" element={<ContactPage />} />
                  <Route path="terms" element={<TermsPage />} />
                  <Route path="privacy" element={<PrivacyPage />} />
                  <Route path="cookie-policy" element={<CookiePolicyPage />} />
                  <Route path="checkout" element={<CheckoutPage />} />
                  <Route path="order-confirmation" element={<OrderConfirmationPage />} />

                  <Route path="login" element={<LoginPage />} />
                  <Route path="register" element={<RegisterPage />} />
                </Route>

                {/* Admin Route - Separate Layout typically, keeping simple for now */}
                <Route path="/admin" element={<AdminDashboard />} />
              </Routes>
            </Router>
          </WishlistProvider>
        </CartProvider>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;

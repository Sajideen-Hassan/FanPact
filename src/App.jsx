import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { DataProvider } from './context/DataContext';
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
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<LandingPage />} />
                <Route path="shop" element={<SportsSelectionPage />} />
                <Route path="shop/sport/:sportId" element={<SchoolSelectionPage />} />
                <Route path="shop/school/:schoolId" element={<TeamSelectionPage />} />
                <Route path="shop/team/:teamId" element={<PlayersPage />} />
                <Route path="player/:playerId" element={<PlayerDetailsPage />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="checkout" element={<CheckoutPage />} />
                <Route path="order-confirmation" element={<OrderConfirmationPage />} />

                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
              </Route>

              {/* Admin Route - Separate Layout typically, keeping simple for now */}
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </Router>
        </CartProvider>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;

import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './Cart.css';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="page-container empty-cart">
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added any gear yet.</p>
        <Link to="/shop" className="secondary-btn">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1 className="page-title">Shopping Cart</h1>
      
      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={`-`} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="cart-item-price">${item.price}</p>
              </div>
              
              <div className="cart-actions">
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, item.size, Math.max(1, item.quantity - 1))}>
                    <Minus size={16} />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}>
                    <Plus size={16} />
                  </button>
                </div>
                
                <button 
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id, item.size)}
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
          
          <button className="clear-cart-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
        
        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${cartTotal}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="summary-divider"></div>
          <div className="summary-row total">
            <span>Total</span>
            <span>${cartTotal}</span>
          </div>
          
          <button className="checkout-btn" onClick={() => navigate('/checkout')}>
            Proceed to Checkout <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

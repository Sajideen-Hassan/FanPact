import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useCart } from '../../context/CartContext';
import './Cart.css';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const { cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);

    if (!stripe || !elements) {
      setTimeout(() => {
        clearCart();
        navigate('/order-confirmation');
      }, 1500);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
      setIsProcessing(false);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setTimeout(() => {
        clearCart();
        navigate('/order-confirmation');
      }, 1000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h3>Shipping Information</h3>
      <div className="form-group">
        <label>Full Name</label>
        <input type="text" placeholder="John Doe" required />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" placeholder="john@example.com" required />
      </div>
      <div className="form-group">
        <label>Address</label>
        <input type="text" placeholder="123 Street Name" required />
      </div>
      
      <h3>Payment Details</h3>
      <div className="form-group">
        <div className="card-element-container">
          <CardElement options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#fff',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }} />
        </div>
      </div>
      
      <button type="submit" className="checkout-btn" disabled={!stripe || isProcessing}>
        {isProcessing ? 'Processing...' : `Pay c:\Users\abide\OneDrive\Desktop\Sajideen\E-comerce{cartTotal}`}
      </button>
    </form>
  );
}

export default function CheckoutPage() {
  return (
    <div className="page-container">
      <h1 className="page-title">Checkout</h1>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import './Cart.css';

export default function OrderConfirmationPage() {
  return (
    <div className="page-container" style={{ textAlign: 'center', paddingTop: '6rem' }}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <CheckCircle size={80} color="var(--color-highlight)" style={{ marginBottom: '2rem' }} />
      </motion.div>
      
      <motion.h1 
        className="page-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Order Confirmed!
      </motion.h1>
      
      <motion.p 
        className="page-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Thank you for your purchase. Your gear is on its way.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        style={{ marginTop: '3rem' }}
      >
        <Link to="/shop" className="secondary-btn">Continue Shopping</Link>
      </motion.div>
    </div>
  );
}

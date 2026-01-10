import React from 'react';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import './Cart.css'; // Reusing some cart styles or I'll create Wishlist.css
import './Wishlist.css';

const WishlistPage = () => {
    const { wishlist, removeFromWishlist } = useWishlist();
    const { addToCart } = useCart();

    return (
        <div className="wishlist-page">
            <div className="wishlist-header">
                <h1>Your Wishlist</h1>
                <p>{wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved for later</p>
            </div>

            <div className="wishlist-container">
                {wishlist.length === 0 ? (
                    <div className="empty-wishlist">
                        <div className="empty-icon">❤️</div>
                        <h2>Your wishlist is empty</h2>
                        <p>Explore our products and save your favorites!</p>
                        <button className="explore-btn" onClick={() => window.location.href = '/'}>
                            Start Shopping
                        </button>
                    </div>
                ) : (
                    <div className="wishlist-grid">
                        {wishlist.map(item => (
                            <div key={item.id} className="wishlist-card">
                                <div className="wishlist-image">
                                    <img src={item.image} alt={item.name} />
                                    <button className="remove-wish-btn" onClick={() => removeFromWishlist(item.id)}>
                                        &times;
                                    </button>
                                </div>
                                <div className="wishlist-info">
                                    <h3>{item.name}</h3>
                                    <p className="wishlist-price">${item.price}</p>
                                    <button className="add-to-cart-btn" onClick={() => addToCart(item)}>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default WishlistPage;

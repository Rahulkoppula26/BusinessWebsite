import React from "react";
import { useOutletContext, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './FavoritesPage.css';

function FavoritesPage() {
  const { favorites, setFavorites, cart, setCart, setNotification } = useOutletContext();

  const handleRemoveFromFavorites = (productId) => {
    setFavorites(favorites.filter(item => item.id !== productId));
    setNotification({ message: 'Removed from favorites!' });
  };

  const handleAddToCart = (product) => {
    // Check if item already exists in cart
    const existingItem = cart.find(cartItem => cartItem.item.id === product.id);
    if (existingItem) {
      // Increment quantity if item already exists
      setCart(cart.map(cartItem =>
        cartItem.item.id === product.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      // Add new item with quantity 1
      setCart([...cart, { item: product, quantity: 1 }]);
    }
    // Remove from favorites
    setFavorites(favorites.filter(item => item.id !== product.id));
  };

  return (
    <div className="favorites-container">
      <div className="back-link-container">
        <Link to="/" className="back-link">
          <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '8px' }} />
          Back to Home
        </Link>
      </div>
      <h2 className="favorites-title">Your Favorites</h2>
      {favorites.length === 0 ? (
        <div className="empty-favorites">
          <div className="empty-favorites-icon">❤️</div>
          <h3 className="empty-favorites-title">No favorites yet</h3>
          <p className="empty-favorites-text">Start exploring our products and add your favorites here.</p>
          <Link to="/" className="shop-now-btn">
            🛍️ Shop Now
          </Link>
        </div>
      ) : (
        <ul className="favorites-list">
          {favorites.map((item, idx) => (
            <li key={idx} className="favorite-item">
              <Link to={`/product/${item.id}`} className="favorite-item-link">
                <img src={item.images[0]} alt={item.name} className="favorite-item-img" />
                <div className="favorite-item-details">
                  <div className="favorite-item-name">{item.name}</div>
                  <div className="favorite-item-desc">{item.desc}</div>
                  <div className="favorite-item-price">₹{item.price}</div>
                </div>
              </Link>
              <div className="favorite-item-actions">
                <button
                  onClick={(e) => { e.stopPropagation(); handleAddToCart(item); }}
                  className="add-to-cart-btn"
                >
                  Add to Cart
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); handleRemoveFromFavorites(item.id); }}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoritesPage;

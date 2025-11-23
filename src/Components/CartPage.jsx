import React from "react";
import { useOutletContext, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './CartPage.css';

function CartPage() {
  const { cart, setCart, setNotification } = useOutletContext();

  const handleRemoveFromCart = (idx) => {
    setCart(cart.filter((_, i) => i !== idx));
    setNotification({ message: 'Removed from cart!' });
  };

  const handleUpdateQuantity = (idx, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(idx);
      return;
    }
    setCart(cart.map((cartItem, i) =>
      i === idx
        ? { ...cartItem, quantity: newQuantity }
        : cartItem
    ));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, cartItem) => total + (cartItem.item.price * cartItem.quantity), 0);
  };

  return (
    <div className="cart-container">
      <div className="back-link-container">
        <Link
          to="/"
          className="back-link"
        >
          <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '8px' }} />
          Back to Home
        </Link>
      </div>
      <h2 className="cart-title">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h3 className="empty-cart-title">Your cart is empty</h3>
          <p className="empty-cart-text">Looks like you haven't added any items to your cart yet.</p>
          <Link
            to="/"
            className="shop-now-btn"
          >
            🛍️ Shop Now
          </Link>
        </div>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((cartItem, idx) => (
              <li key={idx} className="cart-item">
                <img src={cartItem.item.images[0]} alt={cartItem.item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <div className="cart-item-name">{cartItem.item.name}</div>
                  <div className="cart-item-desc">{cartItem.item.caption}</div>
                  <div className="cart-item-size">Size: {cartItem.size}</div>
                  <div className="cart-item-price">₹{cartItem.item.price}</div>
                  <div className="quantity-controls">
                    <button
                      onClick={() => handleUpdateQuantity(idx, cartItem.quantity - 1)}
                      className="quantity-btn minus"
                      disabled={cartItem.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="quantity-display">Qty: {cartItem.quantity}</span>
                    <button
                      onClick={() => handleUpdateQuantity(idx, cartItem.quantity + 1)}
                      className="quantity-btn plus"
                    >
                      +
                    </button>

                  </div>
                  <button
                  onClick={() => handleRemoveFromCart(idx)}
                  className="remove-btn"
                >
                  Remove
                </button>
                </div>

              </li>
            ))}
          </ul>
          <div className="cart-total">
            <div className="total-price">
              Total: ₹{getTotalPrice()}
            </div>
            <div className="proceed-btn-container">
              <button
                onClick={() => window.location.href = '/payment'}
                className="proceed-btn"
              >
                🎉 Proceed to Payment ₹{getTotalPrice()}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;

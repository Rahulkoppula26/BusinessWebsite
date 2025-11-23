import React, { useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './PaymentPage.css';

function PaymentPage() {
  const { cart, setCart, setNotification } = useOutletContext();
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    phone: '',
    address: '',
    email: ''
  });

  const getTotalPrice = () => {
    return cart.reduce((total, cartItem) => total + (cartItem.item.price * cartItem.quantity), 0);
  };



  const handleProceedToPayment = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    // Validate shipping details
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!shippingDetails.name.trim() || !shippingDetails.phone.trim() || !shippingDetails.address.trim() || !emailRegex.test(shippingDetails.email.trim())) {
      setNotification({ message: 'Please fill in all shipping details (Name, Phone, Address, Email) before proceeding. Ensure email is valid.' });
      return;
    }

    setLoading(true);

    // Simulate payment processing
    setTimeout(() => {
      alert(`🎉 Payment Successful!\n\nTotal Amount: ₹${getTotalPrice()}\nItems Purchased: ${cart.length}\n\nShipping Details:\nName: ${shippingDetails.name}\nPhone: ${shippingDetails.phone}\nAddress: ${shippingDetails.address}\nEmail: ${shippingDetails.email}\n\nThank you for shopping with Varahi Enterprise!`);
      setCart([]); // Clear cart
      setLoading(false);
      // Redirect to home
      window.location.href = '/';
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <p>Add some items to your cart before proceeding to payment.</p>
        <a href="/">Continue Shopping</a>
      </div>
    );
  }

  return (
    <div className="payment-container">
      <Link to="/cart" className="back-link">
        <FontAwesomeIcon icon={faArrowLeft} />
        Back to Cart
      </Link>
      <h2 className="payment-title">💳 Secure Payment</h2>

      {/* Order Summary */}
      <div className="order-summary">
        <h3>Order Summary</h3>
        <ul>
          {cart.map((cartItem, idx) => (
            <li key={idx}>
              <span>{cartItem.item.name} (x{cartItem.quantity})</span>
              <span>₹{cartItem.item.price * cartItem.quantity}</span>
            </li>
          ))}
        </ul>
        <div className="total">
          <span>Total Amount:</span>
          <span>₹{getTotalPrice()}</span>
        </div>
      </div>

      {/* Shipping Details */}
      <div className="shipping-details">
        <h3>Shipping Details</h3>
        <div className="shipping-form">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              value={shippingDetails.name}
              onChange={(e) => setShippingDetails({ ...shippingDetails, name: e.target.value })}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              value={shippingDetails.phone}
              onChange={(e) => setShippingDetails({ ...shippingDetails, phone: e.target.value })}
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="form-group">
            <label>Shipping Address</label>
            <textarea
              value={shippingDetails.address}
              onChange={(e) => setShippingDetails({ ...shippingDetails, address: e.target.value })}
              placeholder="Enter your full shipping address"
              rows="3"
              required
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              value={shippingDetails.email}
              onChange={(e) => setShippingDetails({ ...shippingDetails, email: e.target.value })}
              placeholder="Enter your email address"
              required
            />
          </div>
        </div>
      </div>

      {/* Payment Method Selection */}
      <div className="payment-methods">
        <h3>Select Payment Method</h3>
        <div className="payment-options">
          <label className={`payment-option ${paymentMethod === 'card' ? 'selected' : ''}`}>
            <input
              type="radio"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            💳 Credit/Debit Card
          </label>
          <label className={`payment-option ${paymentMethod === 'upi' ? 'selected' : ''}`}>
            <input
              type="radio"
              value="upi"
              checked={paymentMethod === 'upi'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            📱 UPI
          </label>
          <label className={`payment-option ${paymentMethod === 'netbanking' ? 'selected' : ''}`}>
            <input
              type="radio"
              value="netbanking"
              checked={paymentMethod === 'netbanking'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            🏦 Net Banking
          </label>
        </div>
      </div>

      {/* Payment Form Placeholder */}
      <div className="payment-placeholder">
        <p>
          🔒 Secure payment form would be displayed here in production
        </p>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button
          className={`btn-primary ${loading ? 'disabled' : ''}`}
          onClick={handleProceedToPayment}
          disabled={loading}
        >
          {loading ? '⏳ Processing...' : `🎉 Pay ₹${getTotalPrice()}`}
        </button>
      </div>

      {/* Security Notice */}
      <div style={{
        marginTop: 24,
        padding: 16,
        background: '#e8f5e8',
        borderRadius: 8,
        border: '1px solid #4caf50'
      }}>
        <p style={{ margin: 0, textAlign: 'center', color: '#2e7d32' }}>
          🔐 Your payment information is secure and encrypted. We use industry-standard security measures to protect your data.
        </p>
      </div>
    </div>
  );
}

export default PaymentPage;

import { useState, useEffect } from 'react';
import Header from './Components/Header';
import Toast from './Components/Toast';
import { Outlet } from 'react-router-dom';

function App() {
  // Cart state: array of {item, quantity} objects
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  // Favorites state: array of items
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  // Notification state: { message: string, type: string } or null
  const [notification, setNotification] = useState(null);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Auto-clear notification after 3 seconds
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <>
      <Header cart={cart} favorites={favorites} />
      <Outlet context={{ cart, setCart, favorites, setFavorites, setNotification }} />
      {notification && (
        <Toast message={notification.message} onClose={() => setNotification(null)} />
      )}
    </>
  );
}

export default App;

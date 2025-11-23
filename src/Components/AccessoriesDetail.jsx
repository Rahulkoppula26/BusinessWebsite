import { useParams, useOutletContext, Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft, faChevronRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { accessories } from '../utils/accessoriesMockdata';
import './ProductDetail.css';

function AccessoriesDetail() {
    const { id } = useParams();
    const { cart, setCart, favorites, setFavorites, setNotification } = useOutletContext();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const product = accessories.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Accessory not found</div>;
    }

    const handleAddToCart = (product) => {
      const existingItem = cart.find(cartItem => cartItem.item.id === product.id);
      if (existingItem) {
        setCart(cart.map(cartItem =>
          cartItem.item.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ));
      } else {
        setCart([...cart, { item: product, quantity: 1 }]);
      }
      setNotification({ message: 'Added to cart!' });
    };

    const handleToggleFavorite = (product) => {
      const isFavorite = favorites.some(item => item.id === product.id);
      if (isFavorite) {
        setFavorites(favorites.filter(item => item.id !== product.id));
        setNotification({ message: 'Removed from favorites!' });
      } else {
        setFavorites([...favorites, product]);
        setNotification({ message: 'Added to favorites!' });
      }
    };

    const isFavorite = (productId) => {
      return favorites.some(item => item.id === productId);
    };

    const nextImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
      );
    };

    const prevImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
      );
    };

  return (
    <div className="product-detail-page">
      <div style={{ marginBottom: 24, marginTop: 24 }}>
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            color: '#667eea',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: 'bold',
            padding: '8px 16px',
            border: '2px solid #667eea',
            borderRadius: '8px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#667eea';
            e.target.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#667eea';
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '8px' }} />
          Back to Home
        </Link>
      </div>
      <div className="product-detail-container">
        <div className="product-image-gallery">
            <div className="main-image-container">
                <img
                    src={product.images[currentImageIndex]}
                    alt={product.name}
                    className="main-product-image"
                />
                <button className="nav-btn prev-btn" onClick={prevImage}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button className="nav-btn next-btn" onClick={nextImage}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
            <div className="thumbnail-container">
                {product.images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(index)}
                    />
                ))}
            </div>
        </div>
        <div className="product-info">
            <h1 className="product-title">{product.name}</h1>
            <p className="product-description">{product.desc}</p>
            <span className="product-price">₹{product.price}</span>

            <div className="action-buttons">
                <button
                    className={`favorite-btn ${isFavorite(product.id) ? 'favorited' : ''}`}
                    onClick={() => handleToggleFavorite(product)}
                    title={isFavorite(product.id) ? 'Remove from favorites' : 'Add to favorites'}
                >
                    <FontAwesomeIcon icon={isFavorite(product.id) ? faHeartSolid : faHeartRegular} />
                </button>
                <button
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(product)}
                >
                    <span>Add to Cart</span>
                    <div className="ripple"></div>
                </button>
            </div>
        </div>
      </div>
      <div className="additional-product-info">
        {product.details && (
          <div className="product-details-section">
              <h3>DETAILS</h3>
              <pre>{product.details}</pre>
          </div>
        )}
        {product.washCare && (
          <div className="product-wash-care">
              <h3>WASH CARE</h3>
              <pre>{product.washCare}</pre>
          </div>
        )}
      </div>
      <h2 className="related-products-title">Related Accessories</h2>
      <div className="product-grid">
        {accessories.filter(p => p.id !== product.id).map(product => (
          <Link key={product.id} to={`/accessory/${product.id}`} className="product-card-link">
            <div className="product-card">
              <div className="card-bg"></div>
              <button
                className={`favorite-btn ${isFavorite(product.id) ? 'favorited' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleToggleFavorite(product);
                }}
                title={isFavorite(product.id) ? 'Remove from favorites' : 'Add to favorites'}
              >
                <FontAwesomeIcon icon={isFavorite(product.id) ? faHeartSolid : faHeartRegular} />
              </button>
              <div className="product-image-container">
                <div className="image-slider">
                  {product.images.map((image, index) => (
                    <img
                      key={index}
                      className="product-image"
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className="product-details">
                <h2 className="product-title">{product.name}</h2>
                <p className="product-description">{product.caption}</p>
                <span className="product-price">₹{product.price}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AccessoriesDetail;

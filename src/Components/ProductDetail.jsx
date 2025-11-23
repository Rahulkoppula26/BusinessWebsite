import { useParams, useOutletContext, Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft, faChevronRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { products } from '../utils/mockdata';
import { accessories } from '../utils/accessoriesMockdata';
import { gifts } from '../utils/giftsMockdata';
import './ProductDetail.css';

function ProductDetail() {
    const { id } = useParams();
    const { cart, setCart, favorites, setFavorites, setNotification } = useOutletContext();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedSize, setSelectedSize] = useState('M');
    const [availableSizes, setAvailableSizes] = useState([]);
    const [isDeveloperMode, setIsDeveloperMode] = useState(false);

    const allProducts = [...products, ...accessories, ...gifts];
    const product = allProducts.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleAddToCart = (product) => {
      if (!selectedSize || !availableSizes.includes(selectedSize)) {
        alert('Please select an available size before adding to cart.');
        return;
      }
      const existingItem = cart.find(cartItem => cartItem.item.id === product.id && cartItem.size === selectedSize);
      if (existingItem) {
        setCart(cart.map(cartItem =>
          cartItem.item.id === product.id && cartItem.size === selectedSize
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ));
      } else {
        setCart([...cart, { item: product, quantity: 1, size: selectedSize }]);
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
            
            <div className="size-selector">
                <label>Size:</label>
                <div className="size-buttons">
                    {product.sizes.map(size => (
                        <button
                            key={size}
                            className={`size-btn ${selectedSize === size ? 'selected' : ''} ${availableSizes.includes(size) ? '' : 'disabled'}`}
                            onClick={() => availableSizes.includes(size) && setSelectedSize(size)}
                            disabled={!availableSizes.includes(size)}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>
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
                <button
                    className="developer-mode-btn"
                    onClick={() => setIsDeveloperMode(!isDeveloperMode)}
                    style={{ marginLeft: '10px', padding: '8px 16px', backgroundColor: '#ff6b6b', color: 'white', border: 'none', borderRadius: '4px' }}
                >
                    {isDeveloperMode ? 'Exit Developer Mode' : 'Developer Mode'}
                </button>
            </div>
            {isDeveloperMode && (
                <div className="developer-panel" style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
                    <h3>Manage Available Sizes</h3>
                    <div className="size-checkboxes">
                        {product.sizes.map(size => (
                            <label key={size} style={{ marginRight: '10px' }}>
                                <input
                                    type="checkbox"
                                    checked={availableSizes.includes(size)}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setAvailableSizes([...availableSizes, size]);
                                        } else {
                                            setAvailableSizes(availableSizes.filter(s => s !== size));
                                        }
                                    }}
                                />
                                {size}
                            </label>
                        ))}
                    </div>
                </div>
            )}
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
      <h2 className="related-products-title">Related Products</h2>
      <div className="product-grid">
        {(() => {
          let related = [];
          if (product.category === 'Cloths') {
            related = products.filter(p => p.id !== product.id);
          } else if (product.category === 'Accessories') {
            related = accessories.filter(p => p.id !== product.id);
          } else if (product.category === 'Gifts') {
            related = gifts.filter(p => p.id !== product.id);
          }
          return related.map(rel => {
            const linkPath = rel.category === 'Accessories' ? `/accessory/${rel.id}` : `/product/${rel.id}`;
            return (
              <Link key={rel.id} to={linkPath} className="product-card-link">
                <div className="product-card">
                  <div className="card-bg"></div>
                  <button
                    className={`favorite-btn ${isFavorite(rel.id) ? 'favorited' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleFavorite(rel);
                    }}
                    title={isFavorite(rel.id) ? 'Remove from favorites' : 'Add to favorites'}
                  >
                    <FontAwesomeIcon icon={isFavorite(rel.id) ? faHeartSolid : faHeartRegular} />
                  </button>
                  <div className="product-image-container">
                    <div className="image-slider">
                      {rel.images.map((image, index) => (
                        <img
                          key={index}
                          className="product-image"
                          src={image}
                          alt={`${rel.name} ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="product-details">
                    <h2 className="product-title">{rel.name}</h2>
                    <p className="product-description">{rel.caption}</p>
                    <span className="product-price">₹{rel.price}</span>
                  </div>
                </div>
              </Link>
            );
          });
        })()}
      </div>
    </div>
  );
}

export default ProductDetail;

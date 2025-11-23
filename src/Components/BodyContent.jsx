import "./BodyContent.css"
import { useOutletContext, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FooterSection from './FooterSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import Accessories from './Accessories';
import Gifts from './Gifts';

function BodyContent() {
    const { favorites, setFavorites, setNotification } = useOutletContext();
    const [selectedCategory, setSelectedCategory] = useState('Cloths');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/clothes');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        if (selectedCategory === 'Cloths') {
            fetchProducts();
        }
    }, [selectedCategory]);

    const handleToggleFavorite = (product) => {
      const isFavorite = favorites.some(item => item.id === product.id);
      if (isFavorite) {
        // Remove from favorites
        setFavorites(favorites.filter(item => item.id !== product.id));
      } else {
        // Add to favorites
        setFavorites([...favorites, product]);
        setNotification({ message: 'Added to favorites!' });
      }
    };

    const isFavorite = (productId) => {
      return favorites.some(item => item.id === productId);
    };

    return (
        <>
            <div className="hero-section">
                <img src="/clothStoreImg.png" alt="Varahi Enterprise Store" />
            </div>

            <div className="introduction-section">
                <h1>Welcome to Varahi Enterprise</h1>
                <p>Discover a wide range of high-quality products at unbeatable prices.
                From the latest electronics to trendy fashion, we have everything you need to elevate your lifestyle.
                Enjoy seamless shopping with fast delivery and excellent customer service. Start exploring now and find your perfect match!</p>
            </div>

            <div id="Products" className="category-tabs">
                <button onClick={() => setSelectedCategory('Cloths')} className={selectedCategory === 'Cloths' ? 'active' : ''}>Cloths</button>
                <button onClick={() => setSelectedCategory('Accessories')} className={selectedCategory === 'Accessories' ? 'active' : ''}>Accessories</button>
                <button onClick={() => setSelectedCategory('Gifts')} className={selectedCategory === 'Gifts' ? 'active' : ''}>Gifts</button>
            </div>

            {selectedCategory === 'Cloths' && (
              <div className="product-grid">
                {loading ? (
                  <p>Loading products...</p>
                ) : (
                products.map(product => (
                  <div key={product.id} className="product-card">
                    {/* <div className="card-bg"></div> */}

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
                      <Link to={`/product/${product.id}`}>
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
                      </Link>
                    </div>
                      <Link to={`/product/${product.id}`}>

                    <div className="product-details">
                      <h2 className="product-title">{product.name}</h2>
                      <p className="product-description">{product.caption}</p>
                      <span className="product-price">₹{product.price}</span>
                    </div>
                    </Link>
                  </div>
                ))
                )}
              </div>
            )}
            {selectedCategory === 'Accessories' && <Accessories />}
            {selectedCategory === 'Gifts' && <Gifts />}

            <FooterSection />
        </>
    );
}

export default BodyContent;

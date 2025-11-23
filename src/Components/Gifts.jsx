import React, { useState, useEffect } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

function Gifts() {
    const { favorites, setFavorites, setNotification } = useOutletContext();
    const [gifts, setGifts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGifts = async () => {
            try {
                const response = await fetch('/api/gifts');
                const data = await response.json();
                setGifts(data);
            } catch (error) {
                console.error('Error fetching gifts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchGifts();
    }, []);

    const handleToggleFavorite = (product) => {
        const isFavorite = favorites.some(item => item._id === product._id);
        if (isFavorite) {
            setFavorites(favorites.filter(item => item._id !== product._id));
            setNotification({ message: 'Removed from favorites!' });
        } else {
            setFavorites([...favorites, product]);
            setNotification({ message: 'Added to favorites!' });
        }
    };

    const isFavorite = (productId) => {
        return favorites.some(item => item._id === productId);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-grid">
            {gifts.map(product => (
                <div key={product._id} className="product-card">
                    <button
                        className={`favorite-btn ${isFavorite(product._id) ? 'favorited' : ''}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleToggleFavorite(product);
                        }}
                        title={isFavorite(product._id) ? 'Remove from favorites' : 'Add to favorites'}
                    >
                        <FontAwesomeIcon icon={isFavorite(product._id) ? faHeartSolid : faHeartRegular} />
                    </button>

                    <div className="product-image-container">
                        <Link to={`/gift/${product._id}`}>
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
                    <Link to={`/gift/${product._id}`}>
                        <div className="product-details">
                            <h2 className="product-title">{product.name}</h2>
                            <p className="product-description">{product.caption}</p>
                            <span className="product-price">₹{product.price}</span>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Gifts;

import { useState } from 'react';
import './ItemCard.css';

const ItemCard = ({ item, onAddToCart, onBuyNow }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(item);
  };

  const handleBuyNow = () => {
    onBuyNow(item);
  };

  return (
    <div 
      className={`item-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="card-image-container">
        {item.image ? (
          <img 
            src={item.image} 
            alt={item.title}
            className="product-image"
          />
        ) : (
          <div className="image-placeholder">
            <div className="placeholder-content">
              <div className="placeholder-icon">📷</div>
              <span className="placeholder-text">Image Coming Soon</span>
            </div>
          </div>
        )}
      </div>

      <div className="card-content">
        <div className="card-header">
          <h3 className="item-title">{item.title}</h3>
          <div className="price-container">
            <span className="current-price">₹{item.price.toLocaleString('en-IN')}</span>
            {item.originalPrice && (
              <span className="original-price">₹{item.originalPrice.toLocaleString('en-IN')}</span>
            )}
          </div>
        </div>

        <div className="product-info">
          <ul className="info-list">
            {item.features.map((feature, index) => (
              <li key={index} className="info-item">
                <span className="bullet">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="card-footer">
          <div className="rating-section">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <span 
                  key={i} 
                  className={`star ${i < Math.floor(item.rating) ? 'filled' : ''}`}
                >
                  ⭐
                </span>
              ))}
            </div>
            <span className="rating-text">({item.reviews} reviews)</span>
          </div>

          <div className="card-actions">
            <button className="btn btn-primary" onClick={handleAddToCart}>
              🛒 Add Cart
            </button>
            <button className="btn btn-secondary" onClick={handleBuyNow}>
              ⚡ Buy Now
            </button>
          </div>

          <div className={`stock-status ${item.inStock ? 'in-stock' : 'out-of-stock'}`}>
            {item.inStock ? '✅ In Stock' : '❌ Out of Stock'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

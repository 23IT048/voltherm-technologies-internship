import { useState } from 'react';
import './ItemCard.css';

const ItemCard = ({ item, onAddToCart, onBuyNow, onShare }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleAddToCart = () => {
    // TODO: API call to add item to cart
    // Example: await addToCartAPI(item.id, quantity)
    onAddToCart(item);
  };

  const handleBuyNow = () => {
    // TODO: API call to initiate purchase
    // Example: await initiateCheckoutAPI(item.id)
    onBuyNow(item);
  };

  const handleShare = () => {
    // TODO: API call to generate shareable link
    // Example: const shareLink = await generateShareLinkAPI(item.id)
    onShare(item);
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
            onLoad={() => setIsImageLoaded(true)}
            onError={() => setIsImageLoaded(false)}
          />
        ) : (
          <div className="image-placeholder">
            {/* TODO: Replace with actual image when available */}
            <div className="placeholder-content">
              <div className="placeholder-icon">📷</div>
              <span className="placeholder-text">Image Coming Soon</span>
            </div>
          </div>
        )}
        <div className="image-overlay">
          <button className="quick-view-btn" onClick={handleShare}>
            👁️ Quick View
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="card-content">
        {/* Center Column - Title, Price, and Info */}
        <div className="center-column">
          <div className="card-header">
            <h3 className="item-title">{item.title}</h3>
            <div className="price-container">
              <span className="current-price">₹{item.price.toLocaleString('en-IN')}</span>
              {item.originalPrice && (
                <span className="original-price">₹{item.originalPrice.toLocaleString('en-IN')}</span>
              )}
            </div>
          </div>

          {/* Product Info Bullets */}
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
        </div>

        {/* Right Column - Rating and Buttons */}
        <div className="right-column">
          {/* Rating and Reviews */}
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

          {/* Action Buttons */}
          <div className="card-actions">
            <button 
              className="btn btn-primary add-to-cart"
              onClick={handleAddToCart}
            >
              🛒 Add Cart
            </button>
            <button 
              className="btn btn-secondary buy-now"
              onClick={handleBuyNow}
            >
              ⚡ Buy Now
            </button>
            <button 
              className="btn btn-outline share-btn"
              onClick={handleShare}
            >
              🔗 Share
            </button>
          </div>

          {/* Additional Info */}
          <div className="additional-info">
            <div className="shipping-info">
              <span className="shipping-icon">🚚</span>
              <span>Free shipping</span>
            </div>
            <div className="stock-status">
              <span className={`status-indicator ${item.inStock ? 'in-stock' : 'out-of-stock'}`}>
                {item.inStock ? '✅ In Stock' : '❌ Out of Stock'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
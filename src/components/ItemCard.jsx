import './ItemCard.css';

const ItemCard = ({ item }) => {
  return (
    <div className="item-card">
      <h3 className="item-title">{item.title}</h3>
      <div className="price-section">
        <span className="current-price">₹{item.price.toLocaleString('en-IN')}</span>
      </div>
      <div className="rating-section">
        <span>Rating: {item.rating} ⭐</span>
      </div>
      <div className={`stock-status ${item.inStock ? 'in-stock' : 'out-of-stock'}`}>
        {item.inStock ? '✅ In Stock' : '❌ Out of Stock'}
      </div>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
};

export default ItemCard;

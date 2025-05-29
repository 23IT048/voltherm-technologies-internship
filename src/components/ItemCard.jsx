const ItemCard = ({ item }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px', borderRadius: '8px' }}>
      <h3>{item.title}</h3>
      <p>Price: ₹{item.price.toLocaleString('en-IN')}</p>
      <div>Rating: {item.rating} ⭐</div>
      <div>Status: {item.inStock ? '✅ In Stock' : '❌ Out of Stock'}</div>
      <button style={{ marginTop: '10px', padding: '8px 16px' }}>Add to Cart</button>
    </div>
  );
};

export default ItemCard;

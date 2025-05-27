const ItemCardList = () => {
  const items = [
    {
      id: 1,
      title: "Lithium Batteries for 2W/3W Electric Vehicles",
      price: 45999
    },
    {
      id: 2,
      title: "Lithium Batteries for Telecom Sector", 
      price: 78999
    }
  ];

  return (
    <div>
      <h2>Our Products</h2>
      <div>
        {items.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
            <h3>{item.title}</h3>
            <p>Price: ₹{item.price.toLocaleString('en-IN')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemCardList;

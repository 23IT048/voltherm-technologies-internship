import ItemCard from './ItemCard';
import './ItemCardList.css';

const ItemCardList = () => {
  const items = [
    {
      id: 1,
      title: "Lithium Batteries for 2W/3W Electric Vehicles",
      price: 45999,
      rating: 4.5,
      inStock: true
    },
    {
      id: 2,
      title: "Lithium Batteries for Telecom Sector", 
      price: 78999,
      rating: 4.8,
      inStock: true
    },
    {
      id: 3,
      title: "Energy Storage System",
      price: 125999,
      rating: 4.9,
      inStock: false
    }
  ];

  return (
    <div className="item-list-container">
      <div className="list-header">
        <h2 className="list-title">Our Products</h2>
      </div>
      <div className="item-list">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemCardList;

import { useState } from 'react';
import ItemCard from './ItemCard';
import './ItemCardList.css';

const ItemCardList = () => {
  const [items] = useState([
    {
      id: 1,
      title: "Lithium Batteries for 2W/3W Electric Vehicles",
      price: 45999,
      originalPrice: 52999,
      rating: 4.5,
      reviews: 128,
      inStock: true,
      image: "/src/assets/img1.jpg",
      features: [
        "Active/ Passive Advanced Thermal Management System",
        "Quick Charge",
        "Built-in Active Balancing Smart BMS for Protection"
      ]
    },
    {
      id: 2,
      title: "Lithium Batteries for Telecom Sector", 
      price: 78999,
      rating: 4.8,
      reviews: 89,
      inStock: true,
      image: "/src/assets/img2.jpg",
      features: [
        "High Energy Density",
        "Stackable (Rack Mounted)",
        "Fuel Gauge"
      ]
    },
    {
      id: 3,
      title: "Energy Storage System",
      price: 125999,
      originalPrice: 145999,
      rating: 4.9,
      reviews: 45,
      inStock: false,
      image: "/src/assets/img3.jpg",
      features: [
        "Solar Application",
        "Industrial Application",
        "Data Centers"
      ]
    }
  ]);

  const handleAddToCart = (item) => {
    console.log('Added to cart:', item.title);
    alert(`${item.title} added to cart!`);
  };

  const handleBuyNow = (item) => {
    console.log('Buy now clicked:', item.title);
    alert(`Redirecting to checkout for ${item.title}`);
  };

  return (
    <div className="item-list-container">
      <div className="list-header">
        <h2 className="list-title">Voltherm Technologies</h2>
        <p className="list-subtitle">Trusted Sustainability Partner</p>
      </div>
      <div className="item-list">
        {items.map((item) => (
          <ItemCard 
            key={item.id} 
            item={item}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemCardList;

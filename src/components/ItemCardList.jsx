import { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import './ItemCardList.css';

const ItemCardList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock data - replace with actual API call
  const mockItems = [
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
        "Built-in Active Balancing Smart BMS for Protection",
        "Cost-Effective",
        "Customized Tough Enclosure"
      ]
    },
    {
      id: 2,
      title: "Lithium Batteries for Telecom Sector",
      price: 78999,
      originalPrice: null,
      rating: 4.8,
      reviews: 89,
      inStock: true,
      image: "/src/assets/img2.jpg",
      features: [
        "High Energy Density",
        "Stackable (Rack Mounted)",
        "Fuel Gauge",
        "RS485/RS232 Communication",
        "Unique Space Saving Design"
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
        "Data Centers",
        "Server Rooms",
        "Residential Application"
      ]
    }
  ];

  useEffect(() => {
    // TODO: Replace with actual API call
    // Example: fetchItemsFromAPI()
    const fetchItems = async () => {
      try {
        setLoading(true);
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // TODO: Replace with actual API endpoint
        // const response = await fetch('/api/items');
        // const data = await response.json();
        // setItems(data);
        
        setItems(mockItems);
      } catch (error) {
        console.error('Error fetching items:', error);
        // TODO: Handle error state
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const handleAddToCart = async (item) => {
    try {
      // TODO: API call to add item to cart
      // await fetch('/api/cart/add', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ itemId: item.id, quantity: 1 })
      // });
      
      console.log('Added to cart:', item.title);
      // Show success notification
      showNotification(`${item.title} added to cart!`, 'success');
    } catch (error) {
      console.error('Error adding to cart:', error);
      showNotification('Failed to add item to cart', 'error');
    }
  };

  const handleBuyNow = async (item) => {
    try {
      // TODO: API call to initiate checkout
      // const response = await fetch('/api/checkout/initiate', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ itemId: item.id })
      // });
      // const { checkoutUrl } = await response.json();
      // window.location.href = checkoutUrl;
      
      console.log('Buy now clicked:', item.title);
      showNotification(`Redirecting to checkout for ${item.title}`, 'info');
    } catch (error) {
      console.error('Error initiating checkout:', error);
      showNotification('Failed to initiate checkout', 'error');
    }
  };

  const handleShare = async (item) => {
    try {
      // TODO: API call to generate share link
      // const response = await fetch(`/api/items/${item.id}/share`);
      // const { shareUrl } = await response.json();
      
      if (navigator.share) {
        await navigator.share({
          title: item.title,
          text: `Check out this amazing product: ${item.title}`,
          url: window.location.href
        });
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        showNotification('Link copied to clipboard!', 'success');
      }
    } catch (error) {
      console.error('Error sharing:', error);
      showNotification('Failed to share item', 'error');
    }
  };

  const showNotification = (message, type) => {
    // TODO: Implement proper notification system
    // For now, using simple alert
    alert(message);
  };

  if (loading) {
    return (
      <div className="item-list-container">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading amazing products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="item-list-container">
      <div className="list-header">
        <h1 className="list-title">Voltherm Technologies</h1>
        <p className="list-subtitle">Trusted Sustainability Partner</p>
      </div>
      
      <div className="item-list">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            onShare={handleShare}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemCardList;
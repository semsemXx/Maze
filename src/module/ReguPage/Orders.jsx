import React, { useEffect, useState } from 'react';
import axios from 'axios';
import classes from '@/css/Orders.module.css';
import Checkbox from '@/components/Page/checkbox';
import { useNavigate } from 'react-router-dom';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState(null);
  const navigate = useNavigate();
  

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:5000/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const filteredOrders = orders.filter(order =>
    order._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    `${order.deliveryDetails.firstName} ${order.deliveryDetails.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||
    order.deliveryDetails.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.deliveryDetails.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.deliveryDetails.postalCode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedOrders = [...filteredOrders].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.subtotal - b.subtotal;
    } else if (sortOrder === 'desc') {
      return b.subtotal - a.subtotal;
    }
    return 0;
  });

  const handleSort = () => {
    setSortOrder(prevSortOrder => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  const handleDeliveryDone = async (orderId) => {
    try {
        const response = await axios.post('http://localhost:5000/deliveredOrders', { orderId });
        console.log(response.data); 
        alert(`Order ${orderId} marked as delivered!`);
        setOrders(prevOrders => prevOrders.filter(order => order._id !== orderId)); 
    } catch (error) {
        console.error('Error updating delivery status:', error);
        alert('Failed to mark order as delivered.');
    }
};



const handleCheckboxChange = (orderId) => {
  console.log(`Checkbox changed for Order ID: ${orderId}`); 
  handleDeliveryDone(orderId);
};


  const handleNavigateToCharts = () => {
    navigate('/charts');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.Orders}>
      <h1 className={classes.all}>ORDERS</h1>
      <button onClick={handleNavigateToCharts} className={classes.chartButton}>
        View Orders
      </button>
      <div className={classes.searchAndSort}>
        <input
          type="text"
          placeholder="Search orders..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={classes.searchBar}
        />
        <button onClick={handleSort} className={classes.sortButton}>
          Sort by Total {sortOrder === 'asc' ? '(Highest to Lowest)' : '(Lowest to Highest)'}
        </button>
      </div>
      <table className={classes.ordersTable}>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Address</th>
            <th>Items</th>
            <th>Total</th>
            <th>Date</th>
            <th>Delivery</th>
          </tr>
        </thead>
        <tbody>
          {sortedOrders.length > 0 ? (
            sortedOrders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.deliveryDetails.firstName} {order.deliveryDetails.lastName}</td>
                <td>{order.deliveryDetails.address}, {order.deliveryDetails.city}, {order.deliveryDetails.postalCode}</td>
                <td>
                  {order.items.map((item, index) => (
                    <div key={index}>
                      {item.name} (Size: {item.size}) - {item.price} DT
                    </div>
                  ))}
                </td>
                <td>{order.subtotal} DT</td>
                <td>
                  {order.createdAt ? new Date(order.createdAt).toLocaleDateString() : 'Date not available'}
                </td>
                <td>
                  <Checkbox
                    checked={order.delivered}
                    onChange={() => handleCheckboxChange(order._id)}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No orders found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

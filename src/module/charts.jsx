import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "@/css/charts.module.css";

export default function Charts() {
    const [deliveredOrders, setDeliveredOrders] = useState([]);

    useEffect(() => {
      const fetchDeliveredOrders = async () => {
          try {
              const response = await axios.get('http://localhost:5000/deliveredOrders');
              console.log(response.data);  
              setDeliveredOrders(response.data);
          } catch (error) {
              console.error('Error fetching delivered orders:', error);
          }
      };
      fetchDeliveredOrders();
  }, []);
  

    const totalEarnings = deliveredOrders.reduce((total, order) => total + order.subtotal, 0);

    return (
        <div className={classes.Div}>
            <h1>Delivered Orders</h1>
            <table className={classes.ordersTable}>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Address</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {deliveredOrders.length > 0 ? (
                        deliveredOrders.map((order) => (
                            <tr key={order._id}>
                                <td>{order._id}</td>
                                <td>
                                    {order.deliveryDetails.firstName} {order.deliveryDetails.lastName}
                                </td>
                                <td>
                                    {order.deliveryDetails.address}, {order.deliveryDetails.city}, {order.deliveryDetails.postalCode}
                                </td>
                                <td>{order.subtotal} DT</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No delivered orders found</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <h2>Total Earnings: {totalEarnings} DT</h2>
        </div>
    );
}

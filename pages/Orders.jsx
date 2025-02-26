import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import axios from 'axios';
import { toast } from 'react-toastify';

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);
  const [cancellationRequested, setCancellationRequested] = useState({});

  // Load user orders
  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(
        `${backendUrl}/api/order/userorders`,
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status;
            item['payment'] = order.payment;
            item['paymentMethod'] = order.paymentMethod;
            item['date'] = order.date;
            item['orderId'] = order._id; // Include the order ID
            allOrdersItem.push(item);
          });
        });
        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to load orders.');
    }
  };

  // Cancel order handler
  const cancelOrder = async (orderId) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/order/cancel`,
        { orderId },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success('Order cancellation request sent successfully.');
        setCancellationRequested((prev) => ({
          ...prev,
          [orderId]: true, // Mark this order as cancellation requested
        }));
        loadOrderData(); // Reload orders after cancellation
      } else {
        toast.error(response.data.message || 'Failed to cancel the order.');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while cancelling the order.');
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div>
        {orderData.map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img className="w-16 sm:w-20" src={item.image[0]} alt="" />
              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-center gap-3 mt-1 text-base text-gray-700">
                  <p>{currency}{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Size: {item.size}</p>
                </div>
                <p className="mt-1">
                  Date: <span className="text-gray-400">{new Date(item.date).toDateString()}</span>
                </p>
                <p className="mt-1">
                  Payment: <span className="text-gray-400">{item.paymentMethod}</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p
                  className={`min-w-2 h-2 rounded-full ${
                    item.status === 'Cancelled' ? 'bg-red-500' : 'bg-green-500'
                  }`}
                ></p>
                <p className="text-sm md:text-base">{item.status}</p>
              </div>

              {/* Cancel Order Button */}
              {item.status !== 'Cancelled' && !cancellationRequested[item.orderId] && (
                <button
                  onClick={() => cancelOrder(item.orderId)}
                  className="border px-4 py-2 text-sm font-medium rounded-sm bg-red-500 text-white"
                >
                  Cancel Order
                </button>
              )}

              {/* Cancellation Requested Button */}
              {cancellationRequested[item.orderId] && (
                <button
                  disabled
                  className="border px-4 py-2 text-sm font-medium rounded-sm bg-gray-500 text-white"
                >
                  Cancellation Requested
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;

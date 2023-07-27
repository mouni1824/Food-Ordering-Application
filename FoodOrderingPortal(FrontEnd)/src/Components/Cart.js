import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Cart = ({ cartItems }) => {
  const [items, setItems] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    // Use a separate state to maintain unique items with their quantities and prices
    const uniqueItems = [];
    cartItems.forEach((item) => {
      const existingItemIndex = uniqueItems.findIndex((cartItem) => cartItem.id === item.id);
      if (existingItemIndex !== -1) {
        uniqueItems[existingItemIndex].quantity += 1;
      } else {
        uniqueItems.push({ ...item, quantity: 1 });
      }
    });
    setItems(uniqueItems);
  }, [cartItems]);

  useEffect(() => {
    // Calculate the total price for each item and the grand total price
    let total = 0;
    items.forEach((item) => {
      const itemPrice = item.price * item.quantity;
      total += itemPrice;
    });
    setGrandTotal(total);
  }, [items]);

  const handleAddQuantity = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleRemoveQuantity = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
          : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <div className='cart-whole'>
      <Navbar />
      <h1>Cart</h1>
      {items.length === 0 ? (
        <div style={{color:'white'}} className='empty-cart'></div>
      ) : (
        <div className='cart-main'>
          {items.map((item) => (
            <div className='cart-item' key={item.id}>
             
            <div className='cart-img'>
                <img src={item.img} alt={item.type} style={{ width: 150, height: 90 }} />
              </div>

              <div className='item-details'>
                <p>{item.type}</p>
                <p>{item.hotel}</p>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
              </div>

              <div className='item-quantity'>
                <p style={{ color: 'white', position: 'relative', bottom: 12 }}>Quantity</p>
                <button onClick={() => handleAddQuantity(item.id)}>+</button>
                <button onClick={() => handleRemoveQuantity(item.id)}>-</button>
              </div>

              <div className='item-remove'>

                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                <p style={{color:'white'}}>Total Price:  ₹{item.price * item.quantity}</p>
               
              </div>
            
              </div>
          ))}
          <div className='cart-grand-total'>
            <center><p  id='grand-total' style={{color:'white'}}>Grand Total:₹{grandTotal}</p></center>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

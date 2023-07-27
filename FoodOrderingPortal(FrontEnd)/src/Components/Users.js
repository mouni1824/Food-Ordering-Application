import React, { useState, useEffect } from 'react';
import axios from 'axios';

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: 'black', // Background color black
      color: 'white', // Text color white
    },
    customerCard: {
      width: '400px',
      padding: '20px',
      boxShadow: '2px 2px 4px gray',
      borderRadius: '4px',
      margin: '10px',
      backgroundColor: 'white', // Card background color white
      color: 'black', // Text color black
    },
    name: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#ff761a', // Name text color #ff761a
    },
    email: {
      fontSize: '16px',
      color: '#333',
    },
    address: {
      fontSize: '14px',
      color: '#666',
    },
  };
  
export default function Users() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Fetch the customers when the component mounts
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/getCust');
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Users</h2>
      {customers.map((customer) => (
        <div key={customer.customer_id} style={styles.customerCard}>
          <div style={styles.name}>{customer.customer_name}</div>
          <div style={styles.email}>{customer.customer_email}</div>
          <div style={styles.address}>{customer.customer_address}</div>
          
          
        </div>
      ))}
    </div>
  );
}

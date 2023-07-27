import React from 'react';

const styles = {
    container:{
        backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', // Set background image to not repeat
    height: '100vh',
        backgroundImage: 'url("https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-simple-food-delivery-meal-fashion-poster-background-yellow-back-image_158378.jpg")'

    },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '60px',
    backgroundColor: 'black',
    color: 'white',
    padding: '0 20px',
  },
  brand: {
    fontSize: '20px',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'white',
  },
  navItems: {
    display: 'flex',
    alignItems: 'center',
  },
  navLink: {
    textDecoration: 'none',
    color: 'white',
    marginLeft: '20px',
  },
};

export default function Admin() {
  return (
    <div  style={styles.container}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.brand}>Admin Dashboard</div>
        <div style={styles.navItems}>
          <a href="/admin/dashboard" style={styles.navLink}>Dashboard</a>
          <a href="/admin/users" style={styles.navLink}>Users</a>
          <a href="admin/restaurant" style={styles.navLink}>Restaurants</a>
          {/* Add more links here */}
        </div>
      </nav>
      {/* Rest of the admin page content */}
      <div>
        <h1>Welcome to the Admin Dashboard</h1>
        {/* Add your admin page content here */}
      </div>
    </div>
  );
}

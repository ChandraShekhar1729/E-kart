
import React from 'react';

const Navbar = (props) => {
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <img style={styles.cartIcon} src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQfpaV1GRU5RWtT0x2xMj6EtVerttd2xTjJn27ZHZN0COvZ9uuC" alt="cart-icon" />
        <span style={styles.cartCount}>{props.count}</span>
      </div>
    </div>
  );
}

const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20
  },
  nav: {
    height: 70,
    background: '#4267b2',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cartIconContainer: {
    position: 'relative'
  },
  cartCount: {
    background: 'yellow',
    borderRadius: '50%',
    padding: '4px 8px',
    position: 'absolute',
    right: 0,
    top: -9
  }
};


export default Navbar;






















// import React from 'react';

// class Navbar extends React.Component {
// render(){
//     return (
// <div>
//     <div>
// <img src="https://t3.gstatic.com/images?q=tbn:ANd9GcROR_Tx5FngR3bV3UCKNCbK9QLqo9Z6Dw2ABpZBzNFWqsw26nfU" alt="cart-icon"/>
// <span>3</span>
// </div> 
// </div>
//     )
// }

// }



// export default Navbar
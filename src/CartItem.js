import React from 'react';
const CartItem = (props) => {
    const { price, title, qty } = props.product;
    const {
      product,
      onIncreaseQuantity,
      onDecreaseQuantity,
      onDeleteProduct
    } = props;
    return (
<div className="cart-item">
    <div className='left-block'>
        <img style={styles.image} src={product.img}/>
    </div>
    <div className='right-block'>
  <div style={{fontSize:25}}>{title}</div>
  <div style={{color:'#777'}}> Rs {price}</div>
  <div style={{color:'#777'}} >Qty: {qty}</div>
  <div className="cart-item-actions">
    {/*Buttons this is the way to write commnet */}
 
 <img 
 alt="increase" 
 className="action-icon" 
 src="https://cdn-icons-png.flaticon.com/128/1828/1828926.png"
 onClick={()=> onIncreaseQuantity(product)}
 />
 <img 
 alt="decrease"
 className="action-icon"
  src="https://cdn-icons-png.flaticon.com/128/10041/10041624.png"
  onClick={()=>onDecreaseQuantity(product)}
  />
 <img
  alt="delete"
   className="action-icon" 
   src="https://cdn-icons-png.flaticon.com/128/3405/3405244.png"
   onClick={()=> onDeleteProduct(product.id)}
   
 />
  </div>
  </div>
</div>
    );
}


// designing the objecs  for styling this can also be done like this

const styles={
    image:{
       height: 130,
       width:130,
       borderRadius:4,
       background:'#ccc'
    }
}



export default CartItem;
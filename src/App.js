//import logo from './logo.svg';
//import index from'./index.css';
//import CartItem from "./CartItem";
import React from 'react';
import Cart from './Cart'
import Navbar from './Navbar'
class App extends React.Component {
  constructor(){
    super();
    this.state={
     products:[
      {
        price:999,
        title:'Watch',
        qty:1,
        img:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTBOulI2lWQbFXZrs2xFVi0tbtoGZ-eHNVmQTAwe5YAMnWKNHrP',
        id:1
      },
      {
        price:990,
        title:'Mobile Phone',
        qty:4,
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnGI9ox2vdPt2omOrQq1TEtvyFVt-INs8ed37QznQZ9ZhH82Ps',
        id:2
      },
      {
        price:9999,
        title:'Laptop',
        qty:1,
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqjZNcePVVz1CS68wKFVUiJfyS4IttpN8uZ-npU9PkGn9QdP5D',
        id:3
      },
      {price:999,
        title:'Wall-Clock',
        qty:1,
        img:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQAXs0xtG4dbvG1wYFE5pcqNYMvjeDSZk4ECT1WEOG9p-929fGn',
        id:3
      }
       
     ]
    }
  }


  handleIncreaseQuantity=(product)=>{
  const{products}=this.state;
  const index=products.indexOf(product);

  products[index].qty+=1;
  this.setState({
    
    products
  })

  
  }
  handleDecreaseQuantity=(product)=>{
    const{products}=this.state;
    const index=products.indexOf(product);
  

    if((products[index].qty)===0){
      return;
    }
    products[index].qty-=1;

    this.setState({
      
      products
    })
  
    
    }

    handleDeleteProduct=(id)=>{
      const{products}=this.state;
      const items = products.filter((item) => item.id !== id); // [{}]
      //const item=products.filter((item)=>{ return item.id!==id})// return array having items not containg the deleted one 

       
      this.setState({
        products:items
       })
   
    }

 getCartCount=()=>{
  const{products}=this.state;

  let count=0;
products.forEach((product)=>{
  count+=product.qty;
})

   return count;

}
getCartTotal = () => {
  const { products } = this.state;

  let cartTotal = 0;

  products.map((product) => {
   cartTotal = cartTotal + product.qty * product.price
  })

 return cartTotal;
}

  render(){
    const {products}=this.state;
return(
    <div className="App">
   <Navbar count={this.getCartCount()}/>
   
    
     <Cart
     products={products}
     onIncreaseQuantity={this.handleIncreaseQuantity}
     onDecreaseQuantity={this.handleDecreaseQuantity}
     onDeleteProduct={this.handleDeleteProduct}
     />
     <div style={{padding:10,fontSize:20}}>TOTAL:{this.getCartTotal()}</div>
   

    </div>
 ) ;
}
}

export default App;

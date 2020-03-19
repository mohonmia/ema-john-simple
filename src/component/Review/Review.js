import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import Reviewitem from './Reviewitem/Reviewitem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderplaced] = useState(false);

    const removeClicked = (productKey) =>{
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
        
    }
    const handPlaceorder = () =>{
        setCart([]);
        setOrderplaced(true);
        processOrder();
    }
    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        
        const cartProducts = productKeys.map(key =>{
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    },[]);

    let thankyou;
    if(orderPlaced){
        thankyou=  <img src={happyImage} alt=""/>
    }

    return (
        <div className="twin-container">
            <div className="product-container">
            <h1>cart items: {cart.length}</h1>{
                cart.map(pd => 
                <Reviewitem removeClicked={removeClicked}  key={pd.key} product={pd}>
                </Reviewitem>)
            }
            {
                thankyou
            }
            </div>
            <div className="cart-containeer">
                 <Cart cart={cart}>
                     <button onClick={handPlaceorder} className="main-button">Place order</button>
                 </Cart>
            </div>
            
        </div>
    );
};

export default Review;
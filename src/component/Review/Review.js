import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import Reviewitem from './Reviewitem/Reviewitem';
import Cart from '../Cart/Cart';

const Review = () => {
    const [cart, setCart] = useState([]);
    const removeClicked = (productKey) =>{
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
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
    return (
        <div className="twin-container">
            <div className="product-container">
            <h1>cart items: {cart.length}</h1>{
                cart.map(pd => 
                <Reviewitem removeClicked={removeClicked}  key={pd.key} product={pd}>
                </Reviewitem>)
            }
            </div>
            <div className="cart-containeer">
                 <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Review;
import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const fast10 = fakeData.slice(0,10);  
    const [products, setProducts] = useState(fast10);
    const [cart, setCart] = useState([]);
    const handlerProduct = (product) =>{
        console.log("produc added", product);
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(pd=> <Product 
                        handlerProduct={handlerProduct} product={pd}></Product>)
                }
            </div>
            <div className="cart-containeer">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
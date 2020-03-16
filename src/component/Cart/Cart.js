import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let i = 0;i <cart.length;i++){
        let product = cart[i];
        total = total + product.price;
    }
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }else if(total > 15){
        shipping = 4.99;
    }else if(total > 0){
        shipping = 12.99;
    }
    const tax = (total / 10).toFixed(2);
    const grandTotal = (total+shipping+Number(tax)).toFixed(2);
    const formatNumber = num => {
        const precession = num.toFixed(2);
        return Number(precession);
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items order: {cart.length}</p>
            <p>Product price: {formatNumber(total)}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Tax + vat: {tax}</p>
            <p>Total price: {grandTotal}</p>
        </div>
    );
};

export default Cart;
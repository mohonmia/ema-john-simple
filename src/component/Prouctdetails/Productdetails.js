import React from 'react';
import { useParams } from 'react-router-dom';

const Productdetails = () => {
    const {productKey} = useParams();
    return (
        <div>
            <h2>{productKey}this is product details page</h2>
        </div>
    );
};

export default Productdetails;
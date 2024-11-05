import React, { useState } from 'react';

const Cart = () => {
    const [cart,setCart] = useState([])
    
    return (
        <div className='container mx-auto mt-5'>
        <div className='flex justify-between items-center'>
            <h1 className='text-3xl font-semibold'>Cart</h1>
            <div className='flex gap-5'>
                <button className='btn'>Total:</button>
                <button className='btn btn-secondary'>Sort By Price</button>
                <button className='btn btn-primary'>Purchase</button>
            </div>
        </div>
    </div>
    );
};

export default Cart;
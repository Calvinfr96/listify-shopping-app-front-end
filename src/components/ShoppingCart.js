import React from 'react'
import CartItem from './CartItem'

function ShoppingCart() {
    return (
        <div className="ShoppingCart">
            <ul>
                <CartItem />
            </ul>
        </div>
    )
}

export default ShoppingCart
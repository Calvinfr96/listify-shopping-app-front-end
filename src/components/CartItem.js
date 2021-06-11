import React from 'react'

function CartItem() {
    return (
        <li className="CartItem">
            <span>Shopping Item Name</span>
            <span>$Price</span>
            <span>Category</span>
            <button>Remove from Cart</button>
        </li>
    )
}

export default CartItem
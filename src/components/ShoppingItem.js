import React from 'react'

function ShoppingItem() {
    return (
        <li className="ShoppingItem">
            <span>Shopping Item Name</span>
            <span>$Price</span>
            <span>Category</span>
            <button>Add to Cart</button>
        </li>
    )
}

export default ShoppingItem
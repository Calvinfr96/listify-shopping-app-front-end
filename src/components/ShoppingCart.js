import React from 'react'
import CartItem from './CartItem'

function ShoppingCart({cartItems}) {
    const cartItemComponents = cartItems.map(item => {
        return <CartItem key={`Item ${item.id}`} name={item.name} category={item.category} price={item.price} />
    })
    return (
        <div className="ShoppingCart">
            <ul>
                {cartItemComponents}
            </ul>
        </div>
    )
}

export default ShoppingCart
import React from 'react'
import CartItem from './CartItem'

function ShoppingCart({cartItems, cartTotal, isLoaded}) {
    const cartItemComponents = cartItems.map(item => {
        return <CartItem key={`Item ${item.id}`} item={item} />
    })
    if (!isLoaded) {
        return (
            <div className="ShoppingCart">
            <h3>Shopping Cart</h3>
            <p>Loading...</p>
        </div>  
        )
    }
    if (cartItems.length === 0) {
        return (
            <div className="ShoppingCart">
                <h3>Shopping Cart</h3>
                <p>No items in shopping cart</p>
            </div>
        )  
    }
    return (
        <div className="ShoppingCart">
            <h3>Shopping Cart</h3>
            <ul>
                {cartItemComponents}
            </ul>
            <h3 className="CartTotal">{`Cart Total: $${cartTotal.toFixed(2)}`}</h3>
        </div>
    )
}

export default ShoppingCart
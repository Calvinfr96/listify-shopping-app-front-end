import React from 'react'
import CartItem from './CartItem'

function ShoppingCart({cartItems, cartTotal}) {
    const cartItemComponents = cartItems.map(item => {
        return <CartItem key={`Item ${item.id}`} name={item.name} category={item.category} price={item.price} />
    })
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
import React from 'react'
import ItemList from './ItemList'
import ShoppingCart from './ShoppingCart'

export default function ShoppingContainer() {
    return (
        <div className="ShoppingContainer">
            <ItemList />
            <ShoppingCart />
        </div>
    )
}

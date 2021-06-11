import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import ShoppingCart from './ShoppingCart'

export default function ShoppingContainer() {
    const baseURL = "http://localhost:3000/shoppingItems";
    const [shoppingItems, setShoppingItems] = useState([]);
    useEffect(() => {
        fetch(baseURL)
            .then(resp => resp.json())
            .then(data => {
                setShoppingItems(data)
            })
    }, [])
    return (
        <div>
            <div className="ShoppingContainer">
                <ItemList shoppingItems={shoppingItems} />
                <ShoppingCart />
            </div>
        </div>
    )
}

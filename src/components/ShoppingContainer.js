import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import ShoppingCart from './ShoppingCart'

export default function ShoppingContainer() {
    const baseURL = "http://localhost:3000/shoppingItems";
    const [shoppingItems, setShoppingItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All")

    useEffect(() => {
        fetch(baseURL)
            .then(resp => resp.json())
            .then(data => {
                setShoppingItems(data)
            })
    }, [])

    const displayedItems = shoppingItems.filter(item => selectedCategory === "All" || selectedCategory === item.category);
    const cartItems = shoppingItems.filter(item => item.isInCart);

    function changeCartStatus(item, id) {
        const URL = `${baseURL}/${id}`
        const configObj = {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                ...item,
                isInCart: !item.isInCart
            })
        }
        fetch(URL, configObj)
            .then(resp => resp.json())
            .then(newItem => {
                const newItems = shoppingItems.map(item => {
                    if (item.id === id) {
                        return newItem
                    }
                    return item
                })
                setShoppingItems(newItems)
            })
    }
    return (
        <div>
            <div className="ShoppingContainer">
                <ItemList
                    shoppingItems={displayedItems}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    changeCartStatus={changeCartStatus} />
                <ShoppingCart cartItems={cartItems} />
            </div>
        </div>
    )
}

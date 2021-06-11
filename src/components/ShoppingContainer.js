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

    const displayedItems = shoppingItems.filter(item => selectedCategory === "All" || selectedCategory === item.category)
    return (
        <div>
            <div className="ShoppingContainer">
                <ItemList
                    shoppingItems={displayedItems}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory} />
                <ShoppingCart />
            </div>
        </div>
    )
}

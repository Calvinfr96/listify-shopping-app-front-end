import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import ShoppingCart from './ShoppingCart'
import NewItemForm from "./NewItemForm"

function ShoppingContainer() {
    const baseURL = "http://localhost:3000";
    const [shoppingItems, setShoppingItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Default")
    const [itemPrices, setItemPrices] = useState([]);

    useEffect(() => {
        fetch(`${baseURL}/shoppingItems`)
            .then(resp => resp.json())
            .then(data => {
                setShoppingItems(data)
            })
    }, [])

    const displayedItems = shoppingItems.filter(item => selectedCategory === "All" || selectedCategory === "Default" || selectedCategory === item.category);
    const cartItems = shoppingItems.filter(item => item.isInCart);
    const cartPrices = cartItems.map(item => item.price)
    const total = cartPrices.reduce((prevTotal, itemPrice) => prevTotal + itemPrice,0)

    function changeCartStatus(item, id) {
        const URL = `${baseURL}/shoppingItems/${id}`
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
                if (newItem.isInCart) {
                    setItemPrices([...itemPrices, newItem.price])
                }
                if (!newItem.isInCart) {
                    const updatedItemPrices = itemPrices.filter(price => !(newItem.price === price && newItem.id === id))
                    setItemPrices(updatedItemPrices)
                }
            })
    }

    function deleteItem(id) {
        const URL = `${baseURL}/shoppingItems/${id}`
        fetch(URL, {method: "DELETE"})
            .then(resp => resp.json())
            .then(() => {
                const updatedItems = shoppingItems.filter(item => item.id !== id)
                setShoppingItems(updatedItems)
            })
    }

    function captialize(string) {
        return string[0].toUpperCase() + string.slice(1)
    }

    function addItem(formData) {
        const URL = `${baseURL}/shoppingItems`
        const configObj = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: captialize(formData.name),
                price: formData.price,
                category: formData.category,
                isInCart: false
            })
        }
        fetch(URL, configObj)
            .then(resp => resp.json())
            .then(newItem => {
                setShoppingItems([...shoppingItems, newItem])
            })
    }

    return (
        <div>
            <div className="ItemForm">
                <NewItemForm addItem={addItem} />
            </div>
                <div className="ShoppingContainer">
                    <ItemList
                        shoppingItems={displayedItems}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        changeCartStatus={changeCartStatus}
                        deleteItem={deleteItem} />
                    <ShoppingCart cartItems={cartItems} cartTotal={total} />
                </div>
        </div>
    )
}

export default ShoppingContainer
import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import ShoppingCart from './ShoppingCart'
import NewItemForm from "./NewItemForm"

function ShoppingContainer() {
    const baseURL = "https://listify-shopping-app-back-end.herokuapp.com";
    const [shoppingItems, setShoppingItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Default")
    const [itemPrices, setItemPrices] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch(`${baseURL}/shoppingItems`)
            .then(resp => resp.json())
            .then(data => {
                setShoppingItems(data)
                setIsLoaded(isLoaded => !isLoaded)
            })
    }, [])

    function alphabetizeByCategory(a, b) {
        if (a.category < b.category){
          return -1;
        }
        if (a.category > b.category){
          return 1;
        }
        return 0;
      }

    const availableItems = shoppingItems.filter(item => selectedCategory === "All" || selectedCategory === "Default" || selectedCategory === item.category);
    if (availableItems.length > 1) {
        availableItems.sort(alphabetizeByCategory);
    }
    const cartItems = shoppingItems.filter(item => item.isInCart);
    if (cartItems.length > 1) {
        cartItems.sort(alphabetizeByCategory);
    }
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
                        shoppingItems={availableItems}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        changeCartStatus={changeCartStatus}
                        deleteItem={deleteItem}
                        isLoaded={isLoaded} />
                    <ShoppingCart cartItems={cartItems} cartTotal={total} isLoaded={isLoaded} />
                </div>
        </div>
    )
}

export default ShoppingContainer
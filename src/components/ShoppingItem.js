import React from 'react'

function ShoppingItem({ item, changeCartStatus, deleteItem }) {
    function handleChangeCartStatus() {
        changeCartStatus(item, item.id)
    }

    function handleDelete() {
        deleteItem(item.id)
    }
    return (
        <li className="ShoppingItem">
            <button onClick={handleDelete} >X</button>
            <span>{item.name}</span>
            <span>${item.price}</span>
            <span>{item.category}</span>
            <button onClick={handleChangeCartStatus} >{item.isInCart ? "Remove from Cart" : "Add to Cart"}</button>
        </li>
    )
}

export default ShoppingItem
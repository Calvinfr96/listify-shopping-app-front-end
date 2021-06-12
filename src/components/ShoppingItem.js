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
            <button onClick={handleDelete} className="Delete" >X</button>
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
            <span>{item.category}</span>
            <button onClick={handleChangeCartStatus} className={item.isInCart ? "Remove" : "Add"} >
                {item.isInCart ? "Remove from Cart" : "Add to Cart"}
            </button>
        </li>
    )
}

export default ShoppingItem
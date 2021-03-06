import React from 'react'
import FilterButton from './FilterButton'
import ShoppingItem from './ShoppingItem'

function ItemList({ shoppingItems, selectedCategory, setSelectedCategory, patchCartStatus, deleteItem, isLoaded }) {
    const itemComponents = shoppingItems.map(item => {
        return <ShoppingItem 
                    key={`Item ${item.id}`} 
                    item={item} 
                    patchCartStatus={patchCartStatus}
                    deleteItem={deleteItem} />
    })
    if (!isLoaded) {
        return (
        <div className="ItemList">
            <h3>Available Items</h3>
            <p>Loading...</p>
        </div>  
        )
    }
    if (shoppingItems.length === 0) {
        return (
            <div className="ItemList">
                <h3>Available Items</h3>
                <p>No items to display</p>
            </div>
        )  
    }
    return (
        <div className="ItemList">
            <h3>Available Items</h3>
            <FilterButton selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <ul>
                {itemComponents}
            </ul>
        </div>
    )
}

export default ItemList
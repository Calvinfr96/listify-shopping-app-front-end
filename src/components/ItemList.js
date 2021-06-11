import React from 'react'
import FilterButton from './FilterButton'
import ShoppingItem from './ShoppingItem'

function ItemList({ shoppingItems, selectedCategory, setSelectedCategory }) {
    const itemComponents = shoppingItems.map(item => {
        return <ShoppingItem key={`Item ${item.id}`} name={item.name} category={item.category} price={item.price} />
    })
    return (
        <div className="ItemList">
            <FilterButton selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <ul>
                {itemComponents}
            </ul>
        </div>
    )
}

export default ItemList
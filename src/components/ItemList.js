import React from 'react'
import FilterButton from './FilterButton'
import ShoppingItem from './ShoppingItem'

function ItemList({ shoppingItems }) {
    const itemComponents = shoppingItems.map(item => {
        return <ShoppingItem key={`Item ${item.id}`} name={item.name} category={item.category} price={item.price} />
    })
    return (
        <div className="ItemList">
            <FilterButton />
            <ul>
                {itemComponents}
            </ul>
        </div>
    )
}

export default ItemList
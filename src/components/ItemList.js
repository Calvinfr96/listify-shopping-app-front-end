import React from 'react'
import FilterButton from './FilterButton'
import ShoppingItem from './ShoppingItem'

function ItemList() {
    return (
        <div className="ItemList">
            <FilterButton />
            <ShoppingItem />
        </div>
    )
}

export default ItemList
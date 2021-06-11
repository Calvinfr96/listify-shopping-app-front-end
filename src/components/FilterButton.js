import React from 'react'

function FilterButton({ selectedCategory, setSelectedCategory }) {
    function handleChange(event) {
        setSelectedCategory(event.target.value)
    }

    return (
        <div className="FilterButton">
            <select name="Filter" value={selectedCategory} onChange={handleChange} >
                <option name="All">All</option>
                <option name="Bakery">Bakery</option>
                <option name="Dairy & Eggs">Dairy & Eggs</option>
                <option name="Deli">Deli</option>
                <option name="Frozen">Frozen</option>
                <option name="Grocery">Grocery</option>
                <option name="Meat">Meat</option>
                <option name="Produce">Produce</option>
                <option name="Sea Food">Sea Food</option>
            </select>
        </div>
    )
}

export default FilterButton
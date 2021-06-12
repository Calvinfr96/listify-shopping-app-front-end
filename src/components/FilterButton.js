import React from 'react'

function FilterButton({ selectedCategory, setSelectedCategory }) {
    function handleChange(event) {
        setSelectedCategory(event.target.value)
    }

    return (
        <div className="FilterButton">
            <select name="Filter" value={selectedCategory} onChange={handleChange} >
                <option disabled value="Default">Select Filter</option>
                <option value="All">All</option>
                <option value="Bakery">Bakery</option>
                <option value="Dairy & Eggs">Dairy & Eggs</option>
                <option value="Deli">Deli</option>
                <option value="Frozen">Frozen</option>
                <option value="Grocery">Grocery</option>
                <option value="Meat">Meat</option>
                <option value="Produce">Produce</option>
                <option value="Sea Food">Sea Food</option>
            </select>
        </div>
    )
}

export default FilterButton
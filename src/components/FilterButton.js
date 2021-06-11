import React from 'react'

function FilterButton() {
    return (
        <div className="FilterButton">
            <select name="Filter">
                <option name="Bakery">Bakery</option>
                <option name="Dairy">Dairy</option>
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
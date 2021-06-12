import React, {useState} from 'react'

function NewItemForm({addItem}) {
    const [formData, setFormData] = useState({
        name: "",
        category: "Select Category",
        price: "",
        isInCart: false
    })

    function handleChange(event) {
        const name = event.target.name;
        let value = event.target.value;
        if (event.target.type === "number") {
            value = parseFloat(event.target.value)
        }
        setFormData({
            ...formData,
            [name]: value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        addItem(formData)
        setFormData({
            name: "",
            category: "Select Category",
            price: "",
            isInCart: false
        })
    }

    return (
        <div className="ItemForm">
            <form>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Item name" />
                <span><strong> Category: </strong></span>
                <select name="category" value={formData.category} onChange={handleChange} >
                    <option name="default" disabled>Select Category</option>
                    <option name="Bakery">Bakery</option>
                    <option name="Dairy & Eggs">Dairy & Eggs</option>
                    <option name="Deli">Deli</option>
                    <option name="Frozen">Frozen</option>
                    <option name="Grocery">Grocery</option>
                    <option name="Meat">Meat</option>
                    <option name="Produce">Produce</option>
                    <option name="Sea Food">Sea Food</option>
                </select>
                <input type="number" name="price" value={formData.price} onChange={handleChange} step="0.01" placeholder="Item Price" />
                <button type="submit" onClick={handleSubmit} >Add Item</button>
            </form>    
        </div>
    )
}

export default NewItemForm
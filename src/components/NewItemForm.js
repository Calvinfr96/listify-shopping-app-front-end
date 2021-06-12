import React, {useState} from 'react'

function NewItemForm({addItem}) {
    const [formData, setFormData] = useState({
        name: "",
        category: "default",
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
            category: "default",
            price: "",
            isInCart: false
        })
    }

    return (
        <div className="ItemForm">
            <h3>Add to Available Items Here:</h3>
            <form>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Item name" />
                <select name="category" value={formData.category} onChange={handleChange} >
                    <option value="default" disabled>Select Category</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Dairy & Eggs">Dairy & Eggs</option>
                    <option value="Deli">Deli</option>
                    <option value="Frozen">Frozen</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Meat">Meat</option>
                    <option value="Produce">Produce</option>
                    <option value="Sea Food">Sea Food</option>
                </select>
                <input type="number" name="price" value={formData.price} onChange={handleChange} step="0.01" placeholder="Item Price" />
                <button type="submit" onClick={handleSubmit} >Add Item</button>
            </form>    
        </div>
    )
}

export default NewItemForm
import React, {useState} from 'react'

function NewItemForm({addItem}) {
    const [formData, setFormData] = useState({
        name: "",
        category: "",
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
            category: "",
            price: "",
            isInCart: false
        })
    }

    return (
        <div className="ItemForm">
            <form>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Item name" />
                <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Item Category" />
                <input type="number" name="price" value={formData.price} onChange={handleChange} step="0.01" placeholder="Item Price" />
                <button type="submit" onClick={handleSubmit} >Add Item</button>
            </form>    
        </div>
    )
}

export default NewItemForm
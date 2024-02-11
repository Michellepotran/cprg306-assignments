"use client";

import {useState} from 'react';

// Initialize the state variables for name, quantity, and category. 
export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");  


    // Create a handleSubmit function that will prevent the form's default submission behavior. 
    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log("A new item was submitted: " + name, quantity, category);\

        // Create an item object with the current values of name, quantity, and category.
        const item = {
        name: name, 
        quantity: quantity,
        category: category,
        };

        // log the item object to the console.
        console.log(item);

        // Display an alert with the current state of name, quantity, and category. 
        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

        // Resetting the state variables to their initial values. 
        setName("");
        setQuantity(1);
        setCategory("Produce");

    };

    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input 
                    type="text" 
                    placeholder = "Item Name" 
                    value={name} 
                    onChange={(event) => setName(event.target.value)} 
                    required/> 
                </label>
                <br />
                <label>
                    Quantity:
                    <input 
                    type="number" 
                    min="1"
                    max="99"
                    value={quantity} 
                    onChange={(event) => setQuantity(Number(event.target.value))} 
                    required/>
                </label>
                <br />
                <label>
                    Category:
                    <select
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}> 
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen Foods">Frozen Foods</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Household">Household</option>
                    <option value="Other">Other</option>
                    </select>
                </label>
                <br />
                <button type="submit"> Submit </button>
            
            </form>
        </div>
    );
  }


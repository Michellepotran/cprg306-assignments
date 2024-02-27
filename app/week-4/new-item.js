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
        alert(`Name: ${name} \nQuantity: ${quantity} \nCategory: ${category}`);

        // Resetting the state variables to their initial values. 
        setName("");
        setQuantity(1);
        setCategory("Produce");

    };

    
    return (
        <div class= "flex justify-center items-center bg-gray-800 rounded-lg max-w-xs mx-auto m-4 p-4">
            <form onSubmit={handleSubmit}> 
                <div class="flex justify-center items-center">
                    <label>
                    <input class="text-black rounded-lg p-2 m-2 w-full"
                    type="text" 
                    placeholder = "Item Name" 
                    value={name} 
                    onChange={(event) => setName(event.target.value)} 
                    required/> 
                    </label>
                </div>
                <br />
                <div class="flex justify-between">
                  <label>
                    <input class="text-black rounded-lg p-2 m-2 w-half"
                    type="number" 
                    min="1"
                    max="99"
                    value={quantity} 
                    onChange={(event) => setQuantity(Number(event.target.value))} 
                    required/>
                </label>  
                
                <br />
                
                <label>
                <select class="text-black rounded-lg p-2 m-2 w-half"
                value={category}
                placeholder="Category"
                onChange={(event) => setCategory(event.target.value)}> 
                <option class="text-black" value="Produce">Produce</option>
                <option class="text-black"value="Dairy">Dairy</option>
                <option class="text-black"value="Bakery">Bakery</option>
                <option class="text-black"value="Meat">Meat</option>
                <option class="text-black"value="Frozen Foods">Frozen Foods</option>
                <option class="text-black"value="Canned Goods">Canned Goods</option>
                <option class="text-black"value="Dry Goods">Dry Goods</option>
                <option class="text-black"value="Beverages">Beverages</option>
                <option class="text-black"value="Snacks">Snacks</option>
                <option class="text-black"value="Household">Household</option>
                <option class="text-black"value="Other">Other</option>
                </select>
                </label>
                
                </div>
                <br />
                <div class="flex justify-center items-center">
                    <button class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit"> Submit </button>
                </div>
                
            
            </form>
        </div>
    );
  }

"use client"; 
import React, { useState } from 'react';
import NewItem from './new-item'; 
import ItemList from './item-list'; 
import itemsData from './items.json'; 

export default function Page() {
  const [items, setItems] = useState(itemsData); // initialize state variable with itemsData


  const handleAddItem = (item) => {
    const newItems = [...items, item]; // create a new array with the added item
    setItems(newItems); // update the items state with the new array
    // You can also make an API request here to save the new item to a database using the client
  };

  return (
    <main>
      <h1 className="text-3xl font-bold ml-4 mt-4">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} /> {/* pass handleAddItem as a prop */}
      <ItemList items={items} /> {/* pass the items state as a prop */}
    </main>
  );
}
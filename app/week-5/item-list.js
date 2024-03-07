import React, { useState } from 'react';
import Item from './item';
import items from './items.json';
  
  export default function ItemList() {
    const [sortBy, setSortBy] = useState('name');
  
    const sortItems = () => {
      if (sortBy === 'name') {
        items.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortBy === 'category') {
        items.sort((a, b) => a.category.localeCompare(b.category));
      }
    };
  
    sortItems();
  
    const handleSortByName = () => {
      setSortBy('name');
    };
  
    const handleSortByCategory = () => {
      setSortBy('category');
    };
  
    return (
      <>
        <div>
          <button class = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSortByName}>
            Name
          </button>
        <div> 

        </div>
          <button class = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSortByCategory}>
            Category
          </button>
        </div>
        
        {items.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </>
    );
  }
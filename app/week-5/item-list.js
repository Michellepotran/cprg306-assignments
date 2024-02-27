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
          <button
            onClick={handleSortByName}
            style={{
              backgroundColor: sortBy === 'name' ? 'lightblue' : 'inherit',
            }}
          >
            Sort by Name
          </button>
          <button
            onClick={handleSortByCategory}
            style={{
              backgroundColor: sortBy === 'category' ? 'lightblue' : 'inherit',
            }}
          >
            Sort by Category
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
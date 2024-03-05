import React, { useState } from 'react';
import Item from './item';

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState('name');

  const sortItems = () => {
    const sortedItems = [...items]; // Create a copy of items
    if (sortBy === 'name') {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'category') {
      sortedItems.sort((a, b) => a.category.localeCompare(b.category));
    }
    return sortedItems; // Return the sorted copy
  };

  const sortedItems = sortItems(); // Call sortItems to get the sorted copy

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
      {sortedItems.map((item) => (
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
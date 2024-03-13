"use client";
import React, { useState } from 'react';
import ItemList from './item-list.js';
import NewItem from './new-item';
import itemsData from './items.json';
import MealIdeas from './meal-ideas.js';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  function handleItemSelect(newItem) {
    const newItemSplit = newItem.split(',');
    const newItemNoEmoji = newItemSplit[0].replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g,
      ''
    );
    const newItemTrimmed = newItemNoEmoji.trim();
    setSelectedItemName(newItemTrimmed);
  }

  const handleAddItem = (newItem) => {
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  return (
    <main className="bg-slate-950">
      <h1 className="pl-4 pt-4 text-3xl text-white font-extrabold">Shopping List</h1>
      <div className="flex">
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
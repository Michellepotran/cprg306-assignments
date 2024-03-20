import React, { useState } from 'react';
import Item from "./item";
import items from "./items.json";

// use the useState hook to create a state variable sortBy and its setter function setSortBy. This will be used to determine the sorting preference of the user. 
export default function ItemList() {
  const[sortBy, setSortBy] = useState('name'); // setting the initial value of sortBy to "name" - indicating that the list should initially be sorted by name.
  // useState hook allows you to add state to functional components
  // const[sortBy (current state value), setSortBy (function to update that value)] = useState('name' (initial state value));

  // use JavaScripts sort function to sort the items array based on the sortBy state variable 
  // if SortBy is "name", sort the items by their name property 
  // if sortBy is "category", sort the items by their category property. 
  const sortItems = () => { // the sortItems function is called within the component to get the sorted items, and the result is stored in the sortedItems variable. 
    const sortedItems = Array.from(items); // Create a copy of items and ensures that we don't modify the original array directly 
    if (sortBy === 'name'){
      sortedItems.sort((a, b) => a.name.localeCompare(b.name)); // Sort the items by name

    } else if (sortBy === 'category'){
      sortedItems.sort((a, b) => a.category - b.category); // Sort the items by quantity
    }
    return sortedItems; // return the sort copy 
  };

  // Create Sort Buttons 
  // create two buttons that allow the user to change the value of sortBy to "name" or "category". These buttons should change the sorting of the items when clicked.
  return(
    <>
    <div>
        <button onClick={() => setSortBy('name')}>Sort by Name</button>
        <button onClick={() => setSortBy('category')}>Sort by Category</button>
    </div>
    {sortItems().map((item) => (<Item 
      key={item.id}
      name={item.name}
      quantity={item.quantity}
      category={item.category}
      />))}
      </>

  );

}
  
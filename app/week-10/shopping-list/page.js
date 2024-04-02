"use client";

import { getItems, addItem } from "../_services/shopping-list-service";
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { Redirect } from "react-router-dom";

export default function ShoppingListPage() {
    const { user } = useUserAuth();
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      loadItems();
    }, []);
  
    async function loadItems() {
      if (user) {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
      }
    }
  
    function handleAddItem(item) {
      if (user) {
        addItem(user.uid, item)
          .then((itemId) => {
            const newItem = { id: itemId, data: item };
            setItems((prevItems) => [...prevItems, newItem]);
          })
          .catch((error) => {
            console.error("Error adding item:", error);
          });
      }
    }
  
    if (!user) {
      // If the user is not logged in, redirect to the landing page or any other desired route
      return <Redirect to="/" />;
    }
  
    return (
      <div>
        <h1>Shopping List</h1>
        {/* Add your shopping list content here */}
      </div>
    );
  }
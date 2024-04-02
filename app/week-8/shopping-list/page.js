"use client";
import { useUserAuth } from "../_utils/auth-context";
import { Redirect } from "react-router-dom";

export default function ShoppingListPage() {
  const { user } = useUserAuth();

  if (!user) {
    // If the user is not logged in, redirect to the landing page or any other desired route
    return <Redirect to="/" />;
  }

  // Render the shopping list page content if the user is logged in
  return (
    <div>
      <h1>Shopping List</h1>
      {/* Add your shopping list content here */}
    </div>
  );
}
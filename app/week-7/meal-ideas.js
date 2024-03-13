import React, { useEffect, useState } from 'react';

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMealIdeas = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await response.json();
        setMeals(data.meals);
      } catch (error) {
        console.error('Error fetching meal ideas:', error);
      }
    };

    if (ingredient) {
      fetchMealIdeas();
    } else {
      setMeals([]);
    }
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-2xl text-white font-bold mt-4">Meal Ideas</h2>
      <ul className="mt-2">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="text-white">
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
}
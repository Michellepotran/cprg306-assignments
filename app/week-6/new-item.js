import { useState } from 'react';

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('Produce');

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      id: generateId(),
      name: name,
      quantity: quantity,
      category: category,
    };

    onAddItem(item);

    setName('');
    setQuantity(1);
    setCategory('Produce');
  };

  const generateId = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let id = '';
    for (let i = 0; i < 10; i++) {
      id += characters[Math.floor(Math.random() * characters.length)];
    }
    return id;
  };

  return (
    <div className="flex justify-center items-center bg-gray-800 rounded-lg max-w-xs mx-auto m-4 p-4">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center">
          <label>
            <input
              className="text-black rounded-lg p-2 m-2 w-full"
              type="text"
              placeholder="Item Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </label>
        </div>
        <br />
        <div className="flex justify-between">
          <label>
            <input
              className="text-black rounded-lg p-2 m-2 w-half"
              type="number"
              min="1"
              max="99"
              value={quantity}
              onChange={(event) => setQuantity(Number(event.target.value))}
              required
            />
          </label>

          <br />

          <label>
            <select
              className="text-black rounded-lg p-2 m-2 w-half"
              value={category}
              placeholder="Category"
              onChange={(event) => setCategory(event.target.value)}
            >
              <option className="text-black" value="Produce">
                Produce
              </option>
              <option className="text-black" value="Dairy">
                Dairy
              </option>
              <option className="text-black" value="Bakery">
                Bakery
              </option>
              <option className="text-black" value="Meat">
                Meat
              </option>
              <option className="text-black" value="Frozen Foods">
                Frozen Foods
              </option>
              <option className="text-black" value="Canned Goods">
                Canned Goods
              </option>
              <option className="text-black" value="Dry Goods">
                Dry Goods
              </option>
              <option className="text-black" value="Beverages">
                Beverages
              </option>
              <option className="text-black" value="Snacks">
                Snacks
              </option>
              <option className="text-black" value="Household">
                Household
              </option>
              <option className="text-black" value="Other">
                Other
              </option>
            </select>
          </label>
        </div>
        <br />
        <div className="flex justify-center items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
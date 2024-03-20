export default function Item({ name, quantity, category, onSelect }) {
    return (
      <ul className="bg-slate-950 w-15 max-w-xs m-4 p-2" onClick={onSelect}>
        <h3 className="text-xl font-bold">{name}</h3>
        <p>Quantity: {quantity}</p>
        <p>Category: {category}</p>
      </ul>
    );
  }
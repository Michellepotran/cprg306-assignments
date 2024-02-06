
// Creating a component called Item - name, quantity and category are being pulled from that object 
// Remember that Item is a function that accepts one parameter and that parameter is an object - that object is being passed to the Item's function right here 
// The curly braces are used to extract the properties from the object and now they are set as item, quantity and category
// react components are always capitalized

export default function Item({ name, quantity, category }) {
    return (
      <ul className= "bg-slate-950 w-15 max-w-xs m-4 p-2">
        <h3 className="text-xl font-bold">{name}</h3>
        <p>Quantity: {quantity}</p>
        <p>Category: {category}</p>
      </ul>
    );
  }
  
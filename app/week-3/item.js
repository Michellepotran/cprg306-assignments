
// Creating a component called Item - name, quantity and category are being pulled from that object 
// Remember that Item is a function that accepts one parameter and that parameter is an object - that object is being passed to the Item's function right here 
// The curly braces are used to extract the properties from the object and now they are set as item, quantity and category
// react components are always capitalized
//function Item({name, quantity, category}){}

export default function Item({name, quantity, category}){
    return (
        <li>
            <p> {name} </p>
            <p> {quantity} </p>
            <p> {category} </p>
        </li>
    );
}
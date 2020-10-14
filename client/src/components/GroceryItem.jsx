import React from 'react';
import AddGrocery from './AddGrocery.jsx'

const GroceryItem = (props) => (
  <div>
    {props.item.map(elem=>(<p>{elem.description} {elem.quantity}</p>))} 
  </div>
)

export default GroceryItem;
import React from 'react';
import GroceryItem from './GroceryItem.jsx';

const GroceryList = (props) => (
  <div className="groceries">
    {props.data.map(elem=>(<GroceryItem item={elem} />))}
  </div>
)

export default GroceryList;
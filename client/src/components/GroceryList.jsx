import React from 'react';
import GroceryItem from './GroceryItem.jsx';

const GroceryList = (props) => (
  <div className="groceries">
    <div className="groceryItems">
      {(<GroceryItem item={props.data}/>)}
    </div>
  </div>
)

export default GroceryList;
import React from 'react';

const GroceryList = (props) => (
  <div className="groceries">
     {props.items.map(element=>(<p>element.description</p>)) //get back to this spot };
  </div>
)

export default GroceryList;
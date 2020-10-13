import React from 'react';
var items = require('../../../database/data.js');

const GroceryList = (props) => (
  <div className="groceries">
    {items.groceryList.map(item=>(<p>{item.description} {item.quantity}</p>))}; 
  </div>
)

export default GroceryList;
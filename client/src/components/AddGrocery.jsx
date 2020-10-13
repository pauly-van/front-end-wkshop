import React from 'react';
import GroceryItem from './GroceryItem.jsx';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 

    }
  }

  render () {
    return(
      <div>
       <div className="addItemsContainer"></div>
         <form>
           <label>Description:</label>
           <input type="text"></input><br></br>
           <label>Quantity:</label>
           <input type="number"></input>
           <input type="submit" value="Add Grocery"></input>
         </form>
       </div>
    )
  }
}

export default AddGrocery;


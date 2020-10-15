import React from 'react';
import GroceryItem from './GroceryItem.jsx';
var data = require('../../../database/data.js');

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { 
      id: null,
      quantity: null,
      description: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.addToData = this.addToData.bind(this);
  }

  handleChange({target}){
      this.setState({
        [target.name]: target.value
      });
  }

  addToData() {
    this.state.id = data.groceryList.length+1;
    this.state.description = this.state.description.toLowerCase();
    this.state.quantity = Number.parseInt(this.state.quantity);
    this.props.update(this.state); 
  }

  render () {
    return(
      <div>
       <div className="addItemsContainer"></div>
         <form>
           <label>Description:</label>
           <input type="text" name="description" value={this.state.description} onChange={this.handleChange}></input><br></br>
           <label>Quantity:</label>
           <input type="number" name="quantity" value={this.state.quantity} onChange={this.handleChange}></input>
           <input type='button' value='Add Grocery' onClick={this.addToData} ></input>
         </form>
       </div>
    )
  }
}

export default AddGrocery;


import React from 'react';
import ReactDOM from 'react-dom';
import AddGrocery from './components/AddGrocery.jsx';
import GroceryList from './components/GroceryList.jsx';
var data = require('../../database/data.js');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: data.groceryList 
    }
  }

  updateList (addgroc){
    let hasItem = data.groceryList.some(item=>item.description===addgroc.description);

    if(hasItem){
      data.groceryList.forEach(item=>{
        if(item.description===addgroc.description){
          item.quantity+=Number.parseInt(addgroc.quantity);
        }
      });
    }else{
      data.groceryList.push(addgroc);
    }

    console.log(data.groceryList);
    this.setState({
      list: data.groceryList
    }) 
  }

  render (){
    return (
      <div>
      <div className='groceryApp'></div>
        <h1>Grocery List</h1>
          <div className='addGroceryContainer'>
            <AddGrocery update={this.updateList.bind(this)} />
          </div>
          <div className="groceryListContainer">
            <GroceryList data={this.state.list} />
          </div> 
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
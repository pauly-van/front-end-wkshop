import React from 'react';
import ReactDOM from 'react-dom';
import AddGrocery from './components/AddGrocery.jsx';
import GroceryList from './components/GroceryList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  render (){
    return (
      <div>
      <div className='groceryApp'></div>
        <h1>Grocery List</h1>
          <div className='addGroceryContainer'>
            <AddGrocery />
          </div>
          <div className="groceryListContainer">
            <GroceryList />
          </div> 
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
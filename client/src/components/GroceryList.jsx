import React from 'react';
import GroceryItem from './GroceryItem.jsx';

export default class GroceryList extends React.Component{
  constructor(props){
    super(props);
    this.props = props;
    this.state = {

    }
  }

  removeStriked(descript){
    console.log(descript);
  }

  render() {
    return(
      <div className="groceries">
        {this.props.data.map(elem=>(<GroceryItem item={elem} removeStriked={this.removeStriked.bind(this)} />))}
      </div>
    )
  }
}

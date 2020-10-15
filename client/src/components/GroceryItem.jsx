import React from 'react';

export default class GroceryItem extends React.Component{
  constructor(props){
    super(props);
    this.props = props;
    this.state = {
      striked: false
    }
  }

  onItemClick(event){
    this.setState({
      striked: !this.state.striked 
    });
    this.props.removeStriked(event.target.id);
  }

  render(){
    let style = {
      textDecoration: this.state.striked ? 'line-through' : 'none'
    };

    return (
      <div>
        <p style={style} id={this.props.item.description} onClick={this.onItemClick.bind(this)}>{this.props.item.description} {this.props.item.quantity}</p> 
      </div>
    )
  }
}

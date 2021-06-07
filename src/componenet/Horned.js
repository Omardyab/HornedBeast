import React from 'react';



class Horned extends React.Component{
render(){
    return(
        <div>
      <h2 className='title'>Title : {this.props.title}</h2>
      <img src={this.props.url} alt={this.props.description} title={this.props.title}></img>
      <p className='desc'>Description:{this.props.description}</p>
      </div>
      
        );
}
}
export default Horned ;
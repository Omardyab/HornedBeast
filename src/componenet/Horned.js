import React from 'react';
import Card from 'react-bootstrap/Card';


class Horned extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      HornedVote : 0
    }
  }
  HornedPluseone=()=> {
    this.state({
      HornedNum: this.state.HornedNum+1

    })
  }
render(){
    return(
        <div>
      {/* <h2 className='title'>Title : {this.props.title}</h2>
      <img src={this.props.url} alt={this.props.description} title={this.props.title}></img>
      <p className='desc'>Description:{this.props.description}</p> */}
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
      
      </div>
      
        );
}
}
export default Horned ;
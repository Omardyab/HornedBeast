import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class Horned extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      HornedNum : 0
    }
  }
  HornedPluseone=()=> {
    this.setState({
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
  <Card.Img variant="top" src={this.props.url} onClick={this.HornedPluseone} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
    ❤️={this.state.HornedNum}
    </Card.Text>
    <Card.Text>
    {this.props.description}
    </Card.Text>
     </Card.Body>
 </Card>      
</div>
      
    )
  }
}
export default Horned ;
import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class Horned extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      HornedVote : 0
    }
  }
  HornedPluseone=()=> {
    this.setstate({
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
  <Card.Img variant="top" onClick={this.HornedPluseone} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>(title is add here )
    <Card.Text>
    ❤️={this.state.HornedNum}(update the value of the votes)
    </Card.Text>
    <Card.Text>
    {this.props.description}(update the des)
    </Card.Text>
   
  </Card.Body>
 </Card>
      
</div>
      
        );
}
}
export default Horned ;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import ListGroupItem from 'react-bootstrap/ListGroupItem';
class Horned extends React.Component{
  constructor(props){ 
    super(props)
    this.state={
      HornedNum : 0,
      show:false,
        }
  }
  HornedPluseone=()=> {
    this.setState({
    HornedNum: this.state.HornedNum+1,
   })
  //  this.ShowModal();
  }
  ShowModalMethod = () => {
    this.props.ShowModal(this.props.title)
  }
  CloseModal = () => {
    this.setState({ show: false });
  }
render(){
    return(
    
  <Card style={{ width: '18rem' }} onClick={this.ShowModalMethod}>
  <Card.Img variant="top" onClick={this.HornedPluseone}
  src={this.props.imageUrl}  alt={this.props.keyword} />
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
             
    )
  }
}
export default Horned ;


     // eslint-disable-next-line no-lone-blocks
     {/* <h2 className='title'>Title : {this.props.title}</h2>
      <img src={this.props.url} alt={this.props.description} title={this.props.title}></img>
      <p className='desc'>Description:{this.props.description}</p> */}
// eslint-disable-next-line no-lone-blocks
{/* <SelectedBeasts 
          show={this.state.show}
          CloseModal={this.CloseModal}
          title={this.props.title}
          description={this.props.description}
          imageUrl={this.props.image_url}
          horns={this.props.horns}
        />      */}
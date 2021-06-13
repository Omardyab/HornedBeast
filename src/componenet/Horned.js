import {React} from 'react';
import Card from 'react-bootstrap/Card';
import selectedMonster from './selectedMonster';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import 'bootstrap/dist/css/bootstrap.min.css';

class Horned extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      HornedNum : 0,
      show:false,
        }
  }
  HornedPluseone=()=> {
    this.setState({
    HornedNum: this.state.HornedNum+1,
   })
   this.ShowModal();
  }
  ShowModal = () => {
    this.setState({ show: true });
  };
  CloseModal = () => {
    this.setState({ show: false });
  };
render(){
    return(
        <div>
      {/* <h2 className='title'>Title : {this.props.title}</h2>
      <img src={this.props.url} alt={this.props.description} title={this.props.title}></img>
      <p className='desc'>Description:{this.props.description}</p> */}
 <Card style={{ width: '1rem' }}>
  <Card.Img variant="top" onClick={this.HornedPluseone}src={this.props.image_url}  alt={this.props.keyword} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
    ❤️={this.state.HornedNum}
    </Card.Text>
    <Card.Text>
    {this.props.description}
    </Card.Text>
     </Card.Body>
     <ListGroup className="list-group-flush">
            <ListGroupItem> Horns : {this.props.horns}</ListGroupItem>
            <ListGroupItem> ❤️ :  {this.state.HornedPluseone}</ListGroupItem>
          </ListGroup>
 </Card> 
 
 <selectedMonster
          show={this.state.show}
          CloseModal={this.CloseModal}
          title={this.props.title}
          description={this.props.description}
          imageUrl={this.props.image_url}
          horns={this.props.horns}
        />     
</div>
      
    )
  }
}
export default Horned ;
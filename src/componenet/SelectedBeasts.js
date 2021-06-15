import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class selectedMonster extends React.Component{
  handleclose=()=> {
    this.props.CloseModal()
  }
render(){
    return(
              <Modal size="lg" ria-labelledby="contained-modal-title-vcenter"  show={this.props.show} 
      onHide={this.handleclose} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {this.props.Selected.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
           <Card.Img variant="top" src={this.props.Selected.image_url} alt={this.props.Selected.keyword} />
           <Card.Title>{this.props.Selected.title}</Card.Title>
            <Card.Text>
              {this.props.Selected.description}
            </Card.Text>
            <Card.Text>
              {this.props.Selected.keyword}
            </Card.Text>
            <Card.Text>
              {this.props.Selected.horns}
            </Card.Text>
        </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.handleclose} >Close</Button>
      </Modal.Footer>
    </Modal> 
      );
}
}
export default selectedMonster;
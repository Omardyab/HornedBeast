import React from 'react';
import Form from 'react-bootstrap/Form'

class Forms extends React.Component {
    selectHorns=(event)=>{
        event.preventDefault(); 
        this.setState({
          Horns: event.target.value,
         
         })
         console.log('this is number of horns ', this.state);
       }
    render() {
        return (
            <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>How Many Horns?</Form.Label>
            <Form.Control as="select" custom name='HornsNum' onChange={this.selectHorns} style = {{width: '10rem'}} centerd>
                        <option value='one'>1</option>
                        <option value='two'>2</option>
                        <option value='three' >3</option>
                        <option value='one-hunderd'> 100</option>
                        <option>All</option>
            </Form.Control>
          </Form.Group>
        </Form>
        )
    }
    }
    export default Forms;

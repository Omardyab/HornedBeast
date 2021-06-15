import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './componenet/Footer';
import Header from './componenet/header';
import Main from './componenet/Main';
import Beastdata from './componenet/data.json';
import SelectedBeasts from './componenet/SelectedBeasts';
import Forms from './componenet/Forms'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      Beastdata : Beastdata,
      show: false,
      selected: {}, 
      Horns: 'ALL',
    }
  }
  ShowModal=(title) =>{
    const selectedbeast=Beastdata.find(horned => 
      {
        if (horned.title===title)
        {
          return horned; 
        }
        console.log(Beastdata);
      })

      this.setState({
        selected :selectedbeast ,
        show:true
      }) 
    } 

   CloseModal = () => {
    this.setState({ show: false });
   }
  
    render(){
    return(
      <div>
      <Header/> 
      <Forms /> 
      <Main ShowModal={this.ShowModal} Beasts={this.state.Beastdata}/>      
      <SelectedBeasts ShowModal={this.ShowModal} show={this.state.show} CloseModal={this.CloseModal} Selected={this.state.selected}/>
      <Footer/>
    </div>
      )
}
}
export default App;

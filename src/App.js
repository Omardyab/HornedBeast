import React from 'react';
import Footer from './componenet/Footer';
import Header from './componenet/header';
import Main from './componenet/Main.js';
import Monsters from './component/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
render(){
    return(
      <div>
      <Header/> 
      <Main Monsters={Monsters}/>
      <Footer/>
    </div>
      )
}
}
export default App;

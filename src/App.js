import React from 'react';
import Footer from './componenet/Footer';
import Header from './componenet/header';
import Main from './componenet/Main.js';


class App extends React.Component{
render(){
    return(
      <div>
      <Header/> 
      <Main/>
      <Footer/>
    </div>
      )
}
}
export default App;

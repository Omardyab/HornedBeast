import React from 'react';
import Horned from './Horned';
import CardGroup from 'react-bootstrap/CardGroup'
// import CardGroup from 'react-bootstrap/';
class Main extends React.Component{
render(){
 return(
  <div>

  <CardGroup>
                  
                 {this.props.Beasts.map(beast => {
                  return (<Horned
                    imageUrl={beast.image_url}
                    title={beast.title}
                    description={beast.description}
                    keyword={beast.keyword}
                    ShowModal={this.props.ShowModal}
                    horns={beast.horns}/>
                    )
                 })
               }  
                  </CardGroup>


</div>
            
     

      )
}
}
export default Main;



  // eslint-disable-next-line no-lone-blocks
  {/* <Horned title={'UniWhal'} description={'A unicorn and a narwhal nuzzling their horns'} url={"http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"}/>
      <Horned title={'Rhino Family'} description={'Mother (or father) rhino with two babies'} url={"https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80"}/>
      <Horned title={'Unicorn Head'} description={'Someone wearing a creepy unicorn head mask'} url={"https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg"}/> */}
      // eslint-disable-next-line no-lone-blocks
      {/* <Card>
        {
        data.map((item)=>{
          return (<Horned title ={item.title} description={item.description} url={item.image_url}/>)
        })
        }
      </Card> */}
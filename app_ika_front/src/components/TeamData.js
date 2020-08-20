import React from 'react';
import Team from './Team'
import Header from './Header'
import Footer from './Footer'
import Flexbox from 'flexbox-react';
import Escudo1 from './../img/3.jpg'
import Escudo2 from './../img/4.jpg'
import Escudo3 from './../img/5.png'
import Escudo4 from './../img/A.jpg'


function TeamData(name,fundate,escudo) {

  return ( 
    
    <div>
  <Flexbox flexDirection="column">
  <Flexbox element="header" height="60px" marginBottom="20px">
    <Header></Header>
  </Flexbox>
 
  <Flexbox className="dady" flexGrow={4}  >
    <Team escudo={Escudo1} name={"Liverpool"} fundate={" 12 de agosto de 1970"}></Team>)
    <Team escudo={Escudo2} name={"Chelsea"} fundate={" 12 de Septiembre de 1902"}></Team>
    <Team escudo={Escudo3} name={"Manchester City"} fundate={" 12 de ºMayo de 1907"}></Team>
    <Team escudo={Escudo4} name={"Arsenal"} fundate={" 12 de Julio de 1899"}></Team>
  </Flexbox> 
  <Flexbox element="footer" height="60px" marginTop="20px">
    <Footer></Footer>
  </Flexbox>
</Flexbox>
    </div>
  );
}

export default TeamData;

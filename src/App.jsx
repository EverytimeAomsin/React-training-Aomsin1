import React from 'react';
import Navbar1 from "./component/Navbar/Navbar1"
import Nav2 from "./component/Navbar/Navbar2"
import {  MDBRow, MDBCol } from "mdbreact";
import  Routing from "./Page/routes"
import Cone from "./Page/Class/Cone"
import './component/css/Page.css'
import Iframe from 'react-iframe'
function App() {
  return (
    <div className="all">
      <Navbar1 />
    <MDBRow>
    <MDBCol md="4"><Nav2 /></MDBCol>
    <MDBCol md="8"><Routing /> </MDBCol>
  </MDBRow>
     
   <div>
   <Iframe url="https://codesandbox.io/s/black-pine-902yd?fontsize=14&hidenavigation=1&theme=dark"
        width="1800px"
        height="1000px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
   </div>
    </div>
  );
}

export default App;

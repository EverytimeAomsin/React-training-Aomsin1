import React from 'react';
import { MDBBtn, MDBCardHeader,MDBCol, MDBRow,MDBListGroup,MDBListGroupItem, MDBContainer } from "mdbreact";

const Nav2 = () => {
return (
<MDBContainer>
<MDBListGroup style={{ width: "22rem" }}>
<MDBCardHeader color="deep-orange lighten-1">  


   <h4 style={{marginLeft:'90px'}}>แผงควบคุม</h4>
   <MDBRow>
    <MDBCol md="6">Functional</MDBCol>
    <MDBCol md="6">Class component</MDBCol>
  </MDBRow>
</MDBCardHeader>
<MDBListGroupItem className="d-flex justify-content-between align-items-center"> <MDBBtn color="danger" href="/FucOne"> บทที่ 1</MDBBtn>
<MDBBtn color="secondary" href="/Ctwo">บทที่ 1</MDBBtn>
    </MDBListGroupItem>
    
    <MDBListGroupItem className="d-flex justify-content-between align-items-center"> <MDBBtn color="danger" href="/FucTwo">บทที่ 2</MDBBtn>
    </MDBListGroupItem>
    <MDBListGroupItem className="d-flex justify-content-between align-items-center"> <MDBBtn color="danger" href="/FucThree">บทที่ 3</MDBBtn>
    </MDBListGroupItem>
    <MDBListGroupItem className="d-flex justify-content-between align-items-center"> <MDBBtn color="danger" href="/FucThree">บทที่ 2</MDBBtn>
    </MDBListGroupItem>
    <MDBListGroupItem className="d-flex justify-content-between align-items-center"> <MDBBtn color="danger" href="/Fucfive">บทที่ 5</MDBBtn>
    </MDBListGroupItem>
  </MDBListGroup>
  
</MDBContainer>
);
};

export default Nav2;
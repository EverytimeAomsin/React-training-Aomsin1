import React, { useState, useEffect } from "react";

function Ctwo() {
  const Cone =( props) => { 
    const {user1,user2} = props;
     return (
       <div>
   <p>{ user2 +'หวัดดีเบล'}</p>
   <p>{ user1 +'หวัดดีเบล'}</p>
   <p>{ user2 +'ไปกินข้าวกันไหม'+ user1 +' เดียวเราเลี้ยงเอง '}</p>
   <p>{ user1 +'อ้อ เดียว'+user1+'ขอถามแฟนเราก่อนแปปนะ' +user2}</p>
       </div>
     );
   }
  return (
    <div>
      <Cone user1="Bell "  user2="Aomsin "  />
    </div>
  );
}
export default Ctwo;
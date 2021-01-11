import React from 'react';
const Cone =( props) => { 
    const {user,email} = props;
     return (
       <div>
   <p>{'ชื่อ  ' +user + ' อีเมล์ ' +email+'@hotmail.com'}</p>
  
       </div>
     );
   }
   export default  Cone;
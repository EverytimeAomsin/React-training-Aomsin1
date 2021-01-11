import React,{useState, useEffect} from'react'

function Fucfive(){
    const [Name,setname] = useState('')
    function NameChange(e){ //สร้างฟังชัน กำหนดพารามิเตอร์ e ทำหน้าที่อ่านข้อมูล
        setname(e.target.value);
        
    }
    return(
        <div>
            <p>ชื่อของคุณ : {Name}</p>
            <input type="text" value={Name} onChange={NameChange} />
        </div>
    )
}
export default Fucfive ;
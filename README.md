***เพื่อนคนไหนสงสัย ถามเราได้เลยนะ<br>
React คือ Javascipt library ที่สร้างโดย Facebook มีหน้าที่สร้างส่วนแสดงผล โดยอาศัย Js ที่เรียกว่า JSX โดยใช้หลักการแบ่งแยกออกเป็นส่วนๆที่เรียกว่า คอมโพเนนท์ แล้วนำมาประกอบกัน

*****ก่อนใช้งาน React ต้องติดตั้ง Node ก่อนซึ่งสามารถโหลดได้ที่ https://nodejs.org/en/

สำหรับการใช้งาน React.js เราจะใช้ create-react-app <br>
1.เปิด cmd  แล้ว cd เลือกพื้นที่จะสร้างโปรเจ็ค<br>
2.ในการติดตั้งสามารถใช้คำสั้งได้ทั้ง npm และ yarn <br>
 yarn จะใช้<br>
  1.yarn global add create-react-app<br>
  2.create-react-app เขียนชื่อโปรเจ็คที่เราต้องการไป เช่น create-react-app test<br>
  3.cd เขียนชื่อโปรเจ็คของเราไป<br>
  4.yarn start<br>
 npm จะใช้<br>
  1.npx create-react-app เขียนชื่อโปรเจ็คที่เราต้องการไป<br>
  2.cd เขียนชื่อโปรเจ็คของเราไป<br>
  3.npm start<br>
เมื่อรันแล้ว มันจะเปิดหน้าเว็บเราให้อัตโนมัติ โดย default แล้วจะเป็น http://localhost:3000


คือวิธีการดู library เราสามารถดูได้ที่ไฟล์ package.json หรือแม้แต่ตัว ver react เองก็ดูได้ที่ไฟล์นี้ที่หัวข้อ dependencies

เริ่มแรกตัวเริ่มต้น ไฟล์ต่างๆจะมี <br>
public/index.html : คือไฟล์ html หลักของเรา<br>
src/index.js : เป็นไฟล์หลักของ React<br>
src/App.js : ไฟล์สำหรับ Component ที่ชื่อว่า App<br>

เราจะมาลองเปลี่ยนหน้าเริ่มต้นของเว็บเรากัน<br>
ไปที่ src/App.js<br>
เราสามารถเปลียนหน้าตาเว็บได้โดยแก้ <br>
return(<br>
 <br>
 ....แก้ตรงนี้....<br>
 <br>
)<br>
<br>
ลอง save ดู อ่า จุดพิเศษอย่างหนึ่งของคือเมื่อ save แล้วเราไม่ต้องรีหน้าเว็บใหม่เพราะตัว react จะจัดการให้เองครับ<br>
<br>
การคอมเม้น react จะเป็น /* */ หรือ {/*  */}<br>
<br>
เรื่องต่อมาการเขียน react มีสองแบบคือ แบบ  class component กับ functional component<br>
ใน ver. หลังๆเราสามารถใช้ functional แทน class ในหลายๆกรณีได้แล้วเช่น จัดการ life cycle<br>
<br>
--------------------------------------------------------------------------------<br>
ฟอร์มของการเขียน functional (อ่าก่อนจะเขียนไฟล์ใหม่อย่าลืม import React from 'react' ก่อนนะ<br>
<br>
function ชื่อฟังชัน() {<br>
return(<br>
<div><br>
 เขียนตรงนี้<br>
 </div><br>
 )<br>
 }<br>
export default ชื่อฟังชัน<br>
<br>
หรือจะเขียนหัวเป็น<br>
export default function ชื่อฟังชัน(){<br>
ถ้าทำแบบนี้เราจะไม่ต้องเขียน export<br>
<br>
---------------------------------------------------------------------------<br>
ฟอร์มของการเขียน class (อ่าก่อนจะเขียนไฟล์ใหม่อย่าลืม import React from 'react' ก่อนนะ จะเป็น<br> 
<br>
class ชื่อคลาส extends Component {<br>
  render() {<br>
    return (<br>
     <div> /* เราเขียน div เพราะจะได้เขียนได้หลายบรรทัด */<br>
 <br>
    เขียนตรงนี้เลย<br>
     <br>
     </div> <br>
    )<br>
  }<br>
}<br>
export default ชื่อคลาส<br>
-------------------------------------------------------------------<br>
<br>
จบการสอนไว้ก่อนนะ เจอกันในเรื่อง redux  reactrouter และการเชื่อมกับ firebase<br>

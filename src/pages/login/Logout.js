import { Fragment } from "react";
import Navbar from '../../component/Navbar'
import x2 from '../../assets/x2.png'

export default function  Logout()
 {
  return (
       //----------------------------------------------------------------------
    <Fragment>
    <Navbar />
    <div className=" row w-75">
 <div className="col "  >
   <img src={x2}
     width="50%" height="300px" alt="dd" 
     style={{position: 'relative',top:' 100px',left:'200px',}}/>

 </div>
   <div className="col   my-5  text-dark fw-bold " style={{position: 'relative',top:' 100px',left:'200px',}}>
     <h2>welcome USER</h2>
<button className="btn btn-primary px-5 mx-4 fw-bold">LOGOUT</button>
   </div></div></Fragment>
  )
}


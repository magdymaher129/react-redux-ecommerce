import { Fragment, useState } from "react";
import Navbar from '../../component/Navbar'
import x2 from '../../assets/x2.png'
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import {login,logout} from '../../reduxStore/createSliceUser'

export default function  Login()
 {
const [email,setEmail]=useState("");
const[password,setPassword]=useState("");
const user =useSelector(state=>state.user)
const dispatch=useDispatch()
[email,password]= user
const handleAddUser=(e)=>{
e.preventDefault();
dispatch(login({email,password}))
}
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
   <div className="col   my-5  text-dark fw-bold ">
       <form className="shadow p-5 w-75  " onSubmit={(e)=>handleAddUser()}>
   <h2 style={{color: 'black',marginBottom:"40px", textAlign: 'center'}}>Login form</h2>

  <div className="form-outline mb-4">
    <input type="email" id="form2Example1"
     className="form-control" placeholder=" Enter Email address" 
       onChange={(e)=>setEmail(e.target.value)}
     />

  </div>

  <div className="form-outline mb-4">
    <input type="password" id="form2Example2"
     className="form-control" placeholder="Password"
     onChange={(e)=>setPassword(e.target.value)}
     />

  </div>


  <div className="row mb-4">
    

    <div className="col">

      <NavLink to="/">Forgot password?</NavLink>
    </div>
  </div>


  <button type="button" className="btn btn-outline-dark   mb-4">Sign in</button>


  <div className="text-center">
    <p>Not a member? <a href="/">Register</a></p>
   
  </div>
</form>
<p>{email}</p>
<p>{password}</p>
   </div></div></Fragment>
  )
}


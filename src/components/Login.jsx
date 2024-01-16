import React from 'react'
 import { Link } from 'react-router-dom';
import "../login.css";
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';

export default function Login() {
    return (
      
        <MDBContainer fluid className="p-3 my-5">     
         <MDBRow>
           <MDBCol col='4' md='6'>
           <h2 className='sign_in mb-4'>Sign In</h2>
   
             <MDBInput wrapperClass='mb-1' placeholder='Email'  type='email' size="lg"/>
             <MDBInput wrapperClass='mb-4' placeholder='Password'  type='password' size="lg"/>
   
             <MDBBtn className="mb-4 w-100 signin_btn" size="lg">Sign In</MDBBtn>
             <MDBBtn className="mb-4 w-100 btn_option" size="lg" >
               <MDBIcon fab icon="facebook-f" className="mx-2"/>
               Sign in with Facebook
             </MDBBtn>
   
             <MDBBtn className="mb-4 w-100 btn_option" size="lg" >
               <MDBIcon fab icon="google" className="mx-2"/>
               Sign in with Google
             </MDBBtn>
             <div className="d-flex justify-content-between mx-4 mb-4 text-center">
               <a href="!#">Forgot password?</a>
             </div>
   
           </MDBCol>
   
           <MDBCol col='10' md='6'>
          <h6 className='sign_in mb-3'> Don't have an account yet? </h6>  <Link to="/create-account" style={{textDecoration:"none"}}>
        <span>Create new for Free</span>
        </Link>
             <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
           </MDBCol>
         </MDBRow>
   
       </MDBContainer>
    )
}


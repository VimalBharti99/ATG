import React from 'react'
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
import { Link } from 'react-router-dom';

export default function CreateAccount() {
    return (
        <MDBContainer fluid className="p-3 my-5">
        
         <MDBRow>
   
           <MDBCol col='4' md='6'>
           <h2 className='sign_in mb-4'>Create Account</h2>

            <MDBInput wrapperClass='mb-1' placeholder='Name'  type='name' size="lg"/>
             <MDBInput wrapperClass='mb-1' placeholder='Email'  type='email' size="lg"/>
             <MDBInput wrapperClass='mb-1' placeholder='Password'  type='password' size="lg"/>
             <MDBInput wrapperClass='mb-4' placeholder=' Confirm Password'  type='confirm-password' size="lg"/>
   
             <MDBBtn className="mb-4 w-100 signin_btn" size="lg">Create Account</MDBBtn>

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
           <h6 className='sign_in mb-3'> Already have an account?</h6>  <Link to="/login" style={{textDecoration:"none"}}>
               <span>Sign in</span>
               </Link>
             <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
             <p className='mt-3'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
           </MDBCol>
   
         </MDBRow>
   
       </MDBContainer>
    )
}
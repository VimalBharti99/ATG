import React, { useState } from 'react'
//import Model from 'react-modal'
import {Link} from "react-router-dom"

export default function Nav() {
 // const [visible,setVisible] = useState(false)
  return (
    <div>
      <nav className="navbar fixed-top bg-body-tertiary">
  <div className="container-fluid">
    <img className='p-2 m-1' src="images/img1.jpeg" alt="" />
    <form className="d-flex" role="search">
    <input className="form-control me-2 justify-content-center " type="search" placeholder="Search for your favorite groups in ATG" aria-label="Search"/>  
    </form>
    <Link to="/create-account" className='fw-bolder text-blue text-decoration-none' ><span className='fw-lighter text-dark text-decoration-none'>Create Account.Its Free</span>
        </Link>
  </div>
</nav>
    </div>

//     {/* <button onClick={()=>setVisible(true)}>Create An Account its Free</button>
//    <Model isOpen={visible} onRequestClose={()=>setVisible(false)}>
//    <button onClick={()=>setVisible(false)} >Close</button>
//    </Model> */}

  )
}

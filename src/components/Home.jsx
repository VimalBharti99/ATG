import React, { useState } from "react";
import Nav from "./Nav";

import "../index.css";
import Container from "./Container";

export default function Home() {
  const [login,setLogin] = useState(false)
  return (
    <div>
      {
        login ? (
          <div className="container co-md-6">
      <Nav />
<br />
     <div className="d-flex">
      <div>
       <nav className="navbar fixed-top ms-5 navbar-expand-lg mt-5 bg-body-tertiary ">
        <div className="container-fluid ml-5">
          <div
            className="collapse navbar-collapse nav-2"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  All Posts(32)
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Article
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Event
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Job
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
        <div className="row">
          <div><button>Write a post</button></div>
          <div><button>Join group</button></div>
        </div>
     </div>
      <br />
      <br />
      <Container />
      <br />
      <br />
      <br />
    </div>
        ) : (
          <div className="container">
      <Nav />
      <div className="container">
        <img src="images/img2.jpeg" alt="Snow" style={{ width: "100%" }} />
        <div className="text-block">
          <h3>Computer Engineering</h3>
          <p>142,765 Computer Engineer Follow This</p>
        </div>
      </div>
      <nav className="navbar  ms-5  navbar-expand-lg  bg-body-tertiary">
        <div className="container-fluid ml-5">
          {/* <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
          <div
            className="collapse navbar-collapse nav-2"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  All Posts(32)
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Article
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Event
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Job
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br />
      <Container />
      <br />
      <br />
      <br />
      
    </div>
        )
      }
    </div>
  );
}

{/* <div>
  <div></div>
  <div>
    <div></div>
    <div></div>
  </div>
</div> */}
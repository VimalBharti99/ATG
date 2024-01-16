import React from 'react'
import '../index.css';

export default function Container() {
    return (
        <div className="d-flex">
        <hr />
            <div className="container row ">
              
              <div className="card" style={{ "width": "42rem" }}>
                    <img src="images/img3.jpeg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">✍️ Article</h5>
                        <h4>What if famous brands had regular fonts?Meet   ...</h4>
                        <h4>RegularBrands!</h4>
                        <p className="card-text">I've worked in UX for the better part of a decade.From now on,I plan to...</p>
                        <br />
                        <img src="images/img2.jpeg" alt="" className='round_img' /> <span className='user_name'>Sarthak Kamra</span> <span className='views'>1.4k views</span>
                    </div>
                </div>
                <br />
                <div className="card" style={{ "width": "42rem" }}>
                    <img src="images/img-4.jpeg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">🔬️ Education</h5>
                        <h4>Tax Benefits for Investment under National Pension   ...</h4>
                        <h4>Scheme launched by Government</h4>
                        <p className="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                        <br />
                        <img src="images/img2.jpeg" alt="" className='round_img' /> <span className='user_name'>Sarah West</span> <span className='views'>1.4k views</span>
                    </div>
                </div>
                <br />
                <div className="card" style={{ "width": "42rem" }}>
                    <img src="images/img5.jpeg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">🗓️ Meetup</h5>
                        <h4>Finance and investment Elite Social Mixer @Lujizui   ...</h4>
                        <p className='date'>Fri, 12 Oct, 2023  <span>Ahmedabad, India</span></p>
                        <button className='button'>Visit Website</button>
                        <br />
                        <img src="images/img2.jpeg" alt="" className='round_img' /> <span className='user_name'>Rosy Jaikar</span> <span className='views'>1.4k views</span>
                    </div>
                </div>
                <br />
                <div className="card" style={{ "width": "42rem" }}>
                    <div className="card-body">
                    <h5>💼️ Job</h5>
                    <h4>Software Developer</h4>
                        <p className='date'>Innovaccer Analytics Private Ltd.  <span>Noida, India</span></p>
                        <button className='button-1'>Apply on Timesjobs</button>
                        <br />
                        <img src="images/img2.jpeg" alt="" className='round_img' /> <span className='user_name'>Rosy Jaikar</span> <span className='views'>1.4k views</span>
                    </div>
              </div>
             
            </div>

            <div className="p-5 ">
            <form action="">
            <input type="text" placeholder="Noida, India" /> 
            {/* svg here */}
            </form><br />
            
                    <p>Your location will help us serve better and extend a personalised experience.</p>
            </div>
        </div>
    )
}

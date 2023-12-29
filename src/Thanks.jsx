import React from "react";
import { NavLink } from "react-router-dom";

// import { Button } from "/styles/Button";

const Thanks = () => {


    return (<>


        <div className="section-hero-data" style={{margin:'60px 0 60px 0', display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
          <h2 className="hero-heading">	Thank you</h2>
          {/* <p className="hero-top-data">We Desing your Dream Website</p> */}

          <p className="hero-para" style={{textAlign:'center'}}>
            <li>!!Mail send successfully!!</li>
            <li>!!Thank you for your interest in us!!</li>
            <li>!!We will respond you Very Soon !!</li>
          </p>


            <div style={{marginTop:'30px', fontSize:'16px'}}>
                <NavLink to="/"> Back</NavLink>
            </div>

        </div>

    </>);



};

export default Thanks;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const Footer = () => {


  const [formObj, setForm] = useState({});

  const handleForm = (e) => {
    // e.target.value
    // e.target.name ...
    console.log(e.target.value);

    setForm({
      ...formObj, // getting previous value
      [e.target.name]: e.target.value // key:value
    });

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8080/server', {
      method: 'POST',
      body: JSON.stringify(formObj),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    console.log(data);
  }

  return (
    <Wrapper>


      {/* footer section  */}


      <footer style={{ background: '#252932' }}>
        <div class="container">
          <div class="row" style={{ display: 'flex', justifyContent: 'center' }}>
            <div class="col-md-4 col-sm-4" style={{ width: '30%', padding: '20px' }}>
              <div class="widget">
                <h3>About Us</h3>
                <div class="textwidget">
                  <p>
                    WebCircle Technologies having registered office at #29,
                    BTM Layout, near water tank, Bengaluru, Karnataka, India - 560029. The company was started on 2013.
                  </p>
                  <ul style={{ marginTop: '10px', fontSize: '13px' }}>
                    <li><a style={{ color: '#fff' }} href="/" title="Software Development">Software Development</a></li>
                    <li><a style={{ color: '#fff' }} href="/" title="Application Development">Application Development</a></li>
                    <li>
                      <a style={{ color: '#fff' }} href="/" title="Seach Engine Optimization">Seach Engine Optimization</a>
                    </li>
                    <li><a style={{ color: '#fff' }} href="/" title="Search Engine Marketing">Search Engine Marketing</a></li>
                  </ul>
                  <ul style={{ fontSize: '13px' }}>
                    <li><a style={{ color: '#fff' }} href="/" title="Website Desig">Website Design</a></li>
                    <li><a style={{ color: '#fff' }} href="/" title="Web Design &amp; Development">Web Design &amp; Development</a></li>
                    <li><a style={{ color: '#fff' }} href="/" title="Portal Design &amp; Development">Portal Design &amp; Development</a></li>
                    <li><a style={{ color: '#fff' }} href="/" title="E Commerce Solution">E Commerce Solution</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-4" style={{ width: '30%', padding: '20px' }}>
              <div class="company-box">
                <div class="logo">
                  <p>
                    <a href="OnlinePayment.html" style={{ color: 'coral', fontSize: 'large' }}>Payment Mode (Online Payment)</a>
                  </p>
                </div>
                <div class="contact-details">
                  <ul>
                    <li class="phone">
                      <i class="fa fa-phone"></i>
                      <p> <a style={{ color: '#fff' }} href="tel:+91-80-41523571">+91-7411716489,+91-7411716489 </a> </p>
                    </li>
                    <li class="mail">
                      <i class="fa fa-envelope"></i>
                      <p>
                        <a style={{ color: '#fff' }} href="mailto:contact@webcircletechnologies.com">contact@webcircletechnologies.com</a>
                      </p>
                    </li>
                  </ul>
                  <strong style={{ color: '#fff', marginTop: '10px', fontSize: '13px' }}><i class="fa fa-map-marker" aria-hidden="true"></i>
                    #28, 9th 'B' Main,BTM Layout,1st satge, Bengaluru, Karnataka,India 560029 </strong>
                  <ul style={{ fontSize: '13px', marginTop: '10px' }}>
                    <li><a style={{ color: '#fff' }} href="index.html" title="Home">Home</a></li>
                    <li><a style={{ color: '#fff' }} href="OurWork.html" title="Portfolio">Portfolio</a></li>
                    <li><a style={{ color: '#fff' }} href="contact.html" title="Contact Us">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-4" style={{ width: '30%', padding: '20px' }}>
              <div class="widget" id="enquiry">
                <h3>Contact us</h3>
                <form onSubmit={handleSubmit} >
                  <p>{JSON.stringify(formObj)}</p>
                  <div class="row" style={{ display: 'flex' }}>
                    <div class="col-md-6 col-sm-6">
                      <input type="text" onChange={handleForm} class="name-field-1" name="person_name" id="person_name" placeholder="Name" required="" style={{ color: 'black', backgroundColor: 'gainsboro' }} />
                    </div>
                    <div class="col-md-6 col-sm-6">
                      <input type="email" onChange={handleForm} class="name-field-3" name="email" id="email" placeholder="Email" required="" style={{ color: 'black', backgroundColor: 'gainsboro' }} />
                    </div>
                  </div>
                  <br />
                  <div class="row" style={{ display: 'flex' }}>
                    <div class="col-md-6 col-sm-6">
                      <input type="tel" onChange={handleForm} class="name-field-2" name="mob" id="mob" placeholder="Phone" required="" style={{ color: 'black', backgroundColor: 'gainsboro' }} />
                    </div>
                    <div class="col-md-6 col-sm-6">
                      <input type="text" onChange={handleForm} class="name-field-1" name="txtmessage1" id="txtmessage1" placeholder="Budget" required="" style={{ color: 'black', backgroundColor: 'gainsboro' }} />
                    </div>
                  </div>
                  <br />
                  <div class="row">
                    <div class="col-md-12 col-sm-12">
                      <textarea onChange={handleForm} class="name-field-1" name="txtmessage" id="txtmessage" required="" placeholder="Enter your Requirement" rows="9" style={{ color: 'black', backgroundColor: 'gainsboro', height: '60px', width: '92%' }}></textarea>
                    </div>
                  </div>
                  <p>
                  </p>
                  <div style={{ marginTop: '5%' }}>
                    {/* <input name="Submit" class="button" value="Submit" type="submit"/> */}
                    <div class="button" style={{ width: '100px', padding: '20px', background: '#fff', borderRadius: '4px', textAlign: 'center', fontSize: '14px' }}>
                      <NavLink to="/Thanks"> Submit</NavLink>
                    </div>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </footer>





      {/* ******************************************************************* */}


    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }
  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    .footer-bottom--section {
      padding-top: 9rem;

      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;

export default Footer;

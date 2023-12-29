import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";

const Services = () => {

  const { name, image } = useGlobalContext();

  const { services } = useGlobalContext();
  console.log(services);

  const myInlineCss = {
    textAlign: 'center',
    margin: '0 20px 0 20px'
  };

  return (
    <Wrapper className="section">
      {/* <h2 className="common-heading">Our Services</h2> */}

      <div className="section-hero-data" style={myInlineCss} >
        <h2 className="hero-heading">Web Designing Company Bangalore</h2>
        <p className="hero-top-data">WebCircle Technologies having registered office at #29, BTM Layout, near water tank, Bengaluru, Karnataka, India - 560029</p>

        <p className="hero-para">
          The company was started on 2013. Web Circle Technologies provides total and cost-effective web solutions. We have been around since 2013, and continue to be rated among the top web serving company. Our extremely reliable services and support have earned us the reputation of the premiere web designing and hosting solution providers.

        </p>


      </div>




      <section id="one-parallax" class="parallax" data-stellar-background-ratio="0.6" data-stellar-vertical-offset="20" style={{ marginTop: '60px' }}>
        <div class="overlay">
          <section class="container">
            <div class="row">
              <article class="col-md-12 col-sm-12">
                <h2>What we Offer ..!</h2>
                <hr />
                <div id="owl-demo" class="owl-carousel owl-theme">
                  <div class="col-md-12 col-sm-12 owl-img" style={{ display: 'flex', marginTop: '40px' }}>
                    <div class="col-md-4 col-sm-4" style={{ margin: '0 20px 0 20px' }}>
                      <div class="desc">
                        <h3 class="title">We Development</h3>
                        <div class="inside">
                          <p>We provide Web Application, Website Designing, Domain, Hosting and our team is specializes in All field.
                          </p>
                          <div class="owl-desc">
                            <ul style={{ border: '1px solid green', padding: '10px' }}>
                              <p style={{ fontSize: '12px' }}>
                                <i class="fa fa-caret-right"></i><b>INR 3,900| Static Website Design</b>
                                <ul>
                                  <li> <i class="fa fa-caret-right">
                                  </i>Our Static website package including Domain, Hosting and 10 pages of website design and maintaince free.
                                  </li>
                                  <li> <i class="fa fa-caret-right">
                                  </i>We offer Email integration for the enquiry.
                                  </li>
                                </ul>
                              </p>
                              <p style={{ fontSize: '12px' }}>
                                <i class="fa fa-caret-right"></i> <b>INR 5,900| Dynamic Website Design</b>
                                <ul>
                                  <li><i class="fa fa-caret-right">
                                  </i>Our Dynamic Website design package including Domain, Hosting and 15 pages of website design.
                                  </li>
                                  <li> <i class="fa fa-caret-right">
                                  </i>We offer dedicated admin panel or CMS for manage the contents of website.
                                  </li>
                                </ul>
                              </p>
                              <p style={{ fontSize: '12px' }}>
                                <i class="fa fa-caret-right"></i><b>INR 11,900| E-Commerce Website Design</b>
                                <ul>
                                  <li><i class="fa fa-caret-right">
                                  </i>Our E-Commerce Website Design package including Domain, Hosting and unlimited pages of website design.
                                  </li>
                                  <li> <i class="fa fa-caret-right">
                                  </i>We offer dedicated admin panel or CMS for manage the contents of website or order details, product, review, etc.
                                  </li>
                                  <li><i class="fa fa-caret-right">
                                  </i> We offer SMS and Email integration for the order confirmation.
                                  </li>
                                  <li><i class="fa fa-caret-right">
                                  </i> We offer Payment Gayeway integration for that need to pay extra based on the gateway.
                                  </li>
                                </ul>
                              </p>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-4" style={{ margin: '0 20px 0 20px' }}>
                      <div class="desc">
                        <h3 class="title">We Support</h3>
                        <div class="inside">
                          <p>We offer a complete range of Domain, Hosting,Business Email,
                            and Regular Web Maintenance services for the new or existing customers.
                          </p>
                          <div class="owl-desc">
                            <ul style={{ border: '1px solid green', padding: '10px' }}>
                              <p style={{ fontSize: '12px' }}>
                                <i class="fa fa-caret-right">
                                </i><b>New Domain Names Registration or Renew</b>
                                <ul>
                                  <li>New Domain Names Registration or Renew. </li>
                                </ul>
                              </p>
                              <p style={{ fontSize: '12px' }}>
                                <i class="fa fa-caret-right"></i> <b>Website Hosting and Renew</b>
                                <ul>
                                  <li> UNLIMITED bandwidth
                                    - not capped, not throttled, not 'just enough for your site'.
                                  </li>
                                </ul>
                              </p>
                              <p style={{ fontSize: '12px' }}>
                                <i class="fa fa-caret-right"> </i><b>Business Email Solution</b>
                                <ul>
                                  <li> Access your
                                    emails from any internet connected PC anywhere in the world using our WebMail interface.
                                  </li>
                                </ul>
                              </p>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-4" style={{ margin: '0 20px 0 20px' }}>
                      <div class="desc">
                        <h3 class="title"> We Promote</h3>
                        <div class="inside">
                          <p>Online Marketing is an effective
                            tool to further elevate your online presence and promote your website on the internet.
                          </p>
                          <div class="owl-desc">
                            <ul style={{ border: '1px solid green', padding: '10px' }}>
                              <p style={{ fontSize: '12px' }}>
                                <i class="fa fa-caret-right"></i> <b>Effective Search Engine Optimization (SEO)</b>
                                <ul>
                                  <li> We strive high to draw quality traffic at your website.</li>
                                </ul>
                              </p>
                              <p style={{ fontSize: '12px' }}>
                                <i class="fa fa-caret-right"></i>
                                <b>Proficient Pay-Per-Click Marketing (PPC)</b>
                                <ul>
                                  <li> We optimize PPC marketing to increase profitability. </li>
                                </ul>
                              </p>
                              <p style={{ fontSize: '12px' }}>
                                <i class="fa fa-caret-right"></i> <b>Spontaneous Social Media Marketing (SMM)</b>
                                <ul>
                                  <li>
                                    We use platforms like Facebook, Twitter and Google+ to market your organization and do instant brand building.
                                  </li>
                                </ul>
                              </p>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
      </section>




      <section class="row" id="in-steps" style={{ marginTop: '60px' }}>
        <div class="container">
          <div class="in-steps-head">
            <h2>Steps to avail Web Development Packages offered by Web Circle Technologies</h2>
          </div>
          <div class="col-sm-12" style={{ display: 'flex', marginTop: '40px' }}>
            <div class="col-sm-4" style={{ padding: '10px' }}>
              <div class="in-steps-body-list-img">
              </div>
              <h3>Share Requirement</h3>
              <p>All requirements will be collected before initiating with Web Development work.</p>
            </div>
            <div class="col-sm-4" style={{ padding: '10px' }}>
              <div class="in-steps-body-list-img">
              </div>
              <h3>Check Sample Design</h3>
              <p>Sample designs will be developed and shown as per the requirement.</p>
            </div>
            <div class="col-sm-4" style={{ padding: '10px' }}>
              <div class="in-steps-body-list-img">
              </div>
              <h3>Finalization</h3>
              <p>After sample design approval, further development work will be taken care.</p>
            </div>

          </div>
        </div>
      </section>







      <section class="home-content">
        <div class="container">
          <div class="row" style={{display:'flex', marginTop:'60px'}}>
            <div class="col-md-3 col-sm-6" style={{width:'100%'}}>
              <div class="service-details">
                <img src="./images/content-management.jpg" style={{width:'250px'}} class="img-responsive" alt="website designing company bangalore" />
                <div class="service-desc">
                  <h3>Product Development</h3>
                  <p>We develop any type of product based software based on requirement with payment gateway and maintaince .<br /></p>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6" style={{width:'100%'}}>
              <div class="service-details">
                <img src="./images/ppc-1.jpg" style={{width:'250px'}} class="img-responsive" alt="website designing company bangalore" />
                <div class="service-desc">
                  <h3>E-Commerce Solutions</h3>
                  <p> We develop any type of E-commerce website with payment gateway and maintaince .</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6" style={{width:'100%'}}>
              <div class="service-details">
                <img src="./images/google-apps.jpg" style={{width:'250px'}} class="img-responsive" alt="website designing company bangalore" />
                <div class="service-desc">
                  <h3>Google Apps</h3>
                  <p>Professional email, online storage, shared calendars, video meetings and more. Built for business, designed for teams, to simplify the online processes of business. </p>
                </div>

              </div>
            </div>
            <div class="col-md-3 col-sm-6" style={{width:'100%'}}>
              <div class="service-details">
                <img src="./images/domain-hosting.jpg" style={{width:'250px'}} class="img-responsive" alt="Domain Hosting" />
                <div class="service-desc">
                  <h3>Domain,Website Designing &amp; Hosting</h3>
                  <p>Our company have provided web hosting services to many clients. Domain name registration is handled by our hosting team and it is offered at the best price. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0 2rem;
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-size: 1.4rem;

      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }
    }
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Services;

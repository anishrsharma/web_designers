import React from "react";

const ContactUs = () => {
    //   const { udpateAboutPage } = useGlobalContext();

    //   useEffect(() => udpateAboutPage(), []);

    return (<>


        <div class="tab-content" style={{margin:'60px 0 60px 0'}}>
            <div class="tab-pane inner fade active in" id="contact-1">
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <h2>Contact Info</h2>
                        <h3 style={{textAlign: 'center', marginTop:'20px'}}>Your questions and comments are important to us.  Reach us by phone or email. We’ve got everything covered for your needs.</h3>
                        <div class="row" style={{display:'flex',justifyContent:'space-evenly', margin:'20px 0 60px 0'}}>
                            <div class="col-md-4 col-sm-4">
                                <article class="contact-item" style={{marginTop:'40px'}}>
                                    <div class="dotted-line hidden-sm hidden-xs"></div>
                                    <div class="striped-icon"> <span aria-hidden="true" class="fa fa-map-marker"></span> </div>
                                    
                                    <h3>Address</h3>
                                    <p>#28, 9th 'B' Main,BTM Layout,<br/>
                                        1st satge, Bengaluru, Karnataka 560029
                                    </p>
                                </article>
                            </div>
                            <div class="col-md-4 col-sm-4">
                                <article class="contact-item" style={{marginTop:'40px'}}>
                                    <div class="dotted-line hidden-sm hidden-xs"></div>
                                    <div class="striped-icon"> <span aria-hidden="true" class="fa fa-phone"></span> </div>
                                    <h3>Phone</h3>
                                    <p>+91-7411716489, +91-7411716489</p>
                                </article>
                            </div>
                            <div class="col-md-4 col-sm-4">
                                <article class="contact-item" style={{marginTop:'40px'}}>
                                    <div class="striped-icon"> <span aria-hidden="true" class="fa fa-envelope"></span> </div>
                                    <h3>E-Mail</h3>
                                    <p><a href="mailto:contact@webcircletechnologies.com">contact@webcircletechnologies.com</a></p>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
            <div class="tab-pane inner fade" id="contact-3" style={{}}>
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <div class="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15555.436096809466!2d77.6055889!3d12.916781!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdc3588968ec76514!2sWeb+Circle+Technologies!5e0!3m2!1sen!2sin!4v1461140344828" width="100%" frameborder="0" style={{border:'0',height:'100vh'}} allowfullscreen=""></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </>);



};

export default ContactUs;

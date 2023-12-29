import React from "react";

const WhoWeAre = () => {
    //   const { udpateAboutPage } = useGlobalContext();

    //   useEffect(() => udpateAboutPage(), []);

    return (<>
        <div class="overlay-inner"  style={{background:'#000'}}>
            <section class="container">
                <div class="row">
                    <aside class="col-md-12 col-sm-">
                        <div id="intro-title" class="text-center" style={{ textAlign: 'center' }}>
                            <h1 style={{color:'#fff'}} class="title">Who We Are</h1>
                        </div>
                        <p style={{ color: '#fff' }}>Home :: Who We Are</p>

                    </aside>
                </div>
            </section>
        </div>


        {/* *************************************************************** */}


        <section class="about-container" style={{margin:'60px'}}>
            <section class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <div class="row" style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                            <div class="col-md-4 col-sm-4" style={{margin: '0 20px 0 0',width:'150%'}}>
                                <img style={{width:'100%'}} src="./images/who-we-are.jpg" alt="Who We Are" className="logo" />
                            </div>
                            <div class="col-md-4 col-sm-4">
                                <h2 class="box-title">Who-we-are</h2>
                                <p>WebCircle Technologies having its registered office at #29,
                                    BTM Layout, near water tank, Bengaluru, Karnataka, India - 560029. The company was
                                    started on 2013.
                                    WebCircle Technologies provides total and cost-effective web solutions.
                                </p>
                                <p>We have been around since 2013,
                                    and continue to be rated among the top website design and hosting serving companies.
                                </p>
                                <p>
                                    Our extremely reliable services and support
                                    have earned us the reputation of the premiere web hosting solution providers.
                                </p>
                                <p>Our team loves to work with start-ups, and had been instrumental in
                                    helping several young entrepreneurs establish successful internet ventures.
                                    WebCircle Technologies focuses on the success of its customers. The team is
                                    not afraid to point out errors and omissions from the customer, and will direct our
                                    customer towards the most effective, quickest and cost efficient solution to handle their requirements.
                                </p>
                                
                                <br/>
                            </div>
                            <div class="col-md-4 col-sm-4" id="rightCol" style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
                                <div class="quick-contact">
                                    <ul id="sidebar">
                                        <li>
                                            <div class="row">
                                                <div class="col-md-4 col-sm-5 col-xs-4">
                                                    <div class="icon"> <img src="images/icon-1.png" alt="" class="img-responsive"/> </div>
                                                </div>
                                                <div class="col-md-8 col-sm-7 col-xs-8">
                                                    <div class="content">
                                                        <h3 class="title"><a href="/ContactUs">Chat Us</a></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="row">
                                                <div class="col-md-4 col-sm-5 col-xs-4">
                                                    <div class="icon"> <img src="images/icon-2.png" alt="" class="img-responsive"/> </div>
                                                </div>
                                                <div class="col-md-8 col-sm-7 col-xs-8">
                                                    <div class="content">
                                                        <h3 class="title"><a href="/ContactUs">Call Us</a></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="row">
                                                <div class="col-md-4 col-sm-5 col-xs-4">
                                                    <div class="icon"> <img src="images/icon-3.png" alt="" class="img-responsive"/> </div>
                                                </div>
                                                <div class="col-md-8 col-sm-7 col-xs-8">
                                                    <div class="content">
                                                        <h3 class="title"><a href="mailto:contact@webcircletechnologies.com">E-Mail Us</a></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>



    </>);



};

export default WhoWeAre;

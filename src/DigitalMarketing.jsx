import React from "react";

const DigitalMarketing = () => {
    //   const { udpateAboutPage } = useGlobalContext();

    //   useEffect(() => udpateAboutPage(), []);

    return (<>
        <div class="overlay-inner" style={{ background: '#000' }}>
            <section class="container">
                <div class="row">
                    <aside class="col-md-12 col-sm-">
                        <div id="intro-title" class="text-center" style={{ textAlign: 'center' }}>
                            <h1 style={{ color: '#fff' }} class="title">Digital Marketing</h1>
                        </div>
                        <p style={{ color: '#fff' }}>Home :: Digital Marketing</p>

                    </aside>
                </div>
            </section>
        </div>


        {/* *************************************************************** */}


        <section class="about-container">
            <section class="container">
                <div class="col-md-12">
                    <div class="col-md-6">
                        <img src="DIGITALMARKETINGPAGES1.jpg" style="width:100%;"/>
                    </div>
                    <div class="col-md-6">
                        <img src="DIGITALMARKETINGPAGES2.jpg" style="width:100%;"/>
                    </div>
                </div>
                <p style="font-size:xx-large;">Contact us: <a href="mailto:sales@webcircletechnologies.com">sales@webcircletechnologies.com</a></p>
            </section>
        </section>


    </>);



};

export default DigitalMarketing;

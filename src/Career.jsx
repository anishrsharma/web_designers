import React from "react";

const Career = () => {
    //   const { udpateAboutPage } = useGlobalContext();

    //   useEffect(() => udpateAboutPage(), []);

    return (<>
        <div class="overlay-inner" style={{ background: '#000' }}>
            <section class="container">
                <div class="row">
                    <aside class="col-md-12 col-sm-">
                        <div id="intro-title" class="text-center" style={{ textAlign: 'center' }}>
                            <h1 style={{ color: '#fff' }} class="title">Career</h1>
                        </div>
                        <p style={{ color: '#fff' }}>Home :: Career</p>

                    </aside>
                </div>
            </section>
        </div>


        {/* *************************************************************** */}


        <section class="about-container" style={{margin:'60px 0 60px 0'}}>
            <section class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2>Would you like to be a part of our success team?</h2>
                        <p>Are you planning to join an eminent web design company in Bangalore? You can mail your resume if you are keen to be a part of our success team. We will reply at earliest if there are any open positions. Opportunities you can expect in fields of Web design and development including code works, Search Engine Optimization (SEO) and Content Writing respectively. </p>
                        <p>If you are experienced or specialist in particular field, you can mail your CV. Students completing the graduation can even expect an opportunity. Please check this page regularly to know an opportunity. </p>
                        
                        <br /><br /><h2>CURRENT OPENINGS</h2>
                        <hr/>
                            <h3>Urgent Opening for <strong>Marketing Manager</strong></h3>
                            <h4>Job Description </h4>
                            <p>We are looking for a Sales Marketing and web designer  having knowledge of both. Below are some of the requirements an ideal must have. </p>
                            <ul>
                                <li style={{fontSize:'13px'}}>Very good command on English</li>
                                <li style={{fontSize:'13px'}}>Experience with Sales Maketing</li>
                                <li style={{fontSize:'13px'}}>Basic Knowledge of HTML, CSS, J-QUERY, Java script.</li>
                                <li style={{fontSize:'13px'}}>Atleast six months experience in Sales marketing and Web designer.    </li>
                                <li style={{fontSize:'13px'}}>Ability to Web designer from scratch on known topics     </li>
                                <li style={{fontSize:'13px'}}>Quick learner with good analytics . Have ability to meet deadlines. </li>
                            </ul>
                            <p>Apply now: <a href="mailto:contact@webcircletechnologies.com">contact@webcircletechnologies.com</a></p>
                    </div>
                </div>
            </section>
        </section>


    </>);



};

export default Career;

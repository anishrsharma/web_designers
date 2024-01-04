import React from "react";

const AdminDashboard = () => {
    //   const { udpateAboutPage } = useGlobalContext();

    //   useEffect(() => udpateAboutPage(), []);

    return (<>
        <div className="overlay-inner" style={{ background: '#000' }}>
            <section className="container">
                <div className="row">
                    <aside className="col-md-12 col-sm-">
                        <div id="intro-title" className="text-center" style={{ textAlign: 'center' }}>
                            <h1 style={{ color: '#fff' }} className="title">Admin Dashboard</h1>
                        </div>
                        <p style={{ color: '#fff' }}>Home :: Enquiry List</p>

                    </aside>
                </div>
            </section>
        </div>


        {/* *************************************************************** */}

            <section className="about-container" style={{ margin: '60px',fontSize:'14px' }}>
                <h2 style={{margin:'0 0 30px 0'}}>Enquiry List</h2>

                <table style={{borderCollapse:'collapse', width:'100%'}}>
                    <tr>
                        <th style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>Date</th>
                        <th style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>Name</th>
                        <th style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>Email</th>
                        <th style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>Phone</th>
                        <th style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>Budget</th>
                        <th style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>Requirement</th>

                    </tr>
                    <tr>
                        <td style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>2024-01-01</td>
                        <td style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>Pablo Yadav</td>
                        <td style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>pablo445@gmail.com</td>
                        <td style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>7453312987</td>
                        <td style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>56000</td>
                        <td style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>Finance Website</td>
                    </tr>

                    <tr>
                        <td style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>2024-01-01</td>
                        <td style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>Walter White</td>
                        <td style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>white445@gmail.com</td>
                        <td style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>7882727256</td>
                        <td style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>13000</td>
                        <td style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>Finance Website</td>
                    </tr>

                    <tr>
                        <td style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>2024-01-01</td>
                        <td style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>Gustavo Fring</td>
                        <td style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>gustaaavo88112@gmail.com</td>
                        <td style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>7889527826</td>
                        <td style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>6000</td>
                        <td style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>Blog Website</td>
                    </tr>

                    <tr>
                        <td style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>2024-01-01</td>
                        <td style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>Piyush Sharma</td>
                        <td style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>piyush7888@gmail.com</td>
                        <td style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>8993365287</td>
                        <td style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>11000</td>
                        <td style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>Finance Website</td>
                    </tr>

                    <tr>
                        <td style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>2024-01-01</td>
                        <td style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>Abdul M Rehman</td>
                        <td style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>abdul889@gmail.com</td>
                        <td style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>9833412947</td>
                        <td style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>9000</td>
                        <td style={{border:'1px solid #dddddd', textAlign:'left', padding:'8px'}}>Consulting Website</td>
                    </tr>

                    
                 
                  
                </table>
            </section>




    </>);



};





export default AdminDashboard;

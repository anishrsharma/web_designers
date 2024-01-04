import React, { useEffect, useState } from "react";


const AdminLogin = () => {
    //   const { udpateAboutPage } = useGlobalContext();

    //   useEffect(() => udpateAboutPage(), []);

    const [formObj, setForm] = useState({});
    const [users, setUsers] = useState([]);


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
            body:JSON.stringify(formObj),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log(data);
    }

    const getUsers = async () => {
        const response = await fetch('http://localhost:8080/server', {
            method: 'GET',
        });

        const data = await response.json();

        setUsers(data);

        console.log(data);
    }

    useEffect(()=>{
        getUsers();
    },[]);

    return (<>
        <div class="overlay-inner" style={{ background: '#000' }}>
            <section class="container">
                <div class="row">
                    <aside class="col-md-12 col-sm-">
                        <div id="intro-title" class="text-center" style={{ textAlign: 'center' }}>
                            <h1 style={{ color: '#fff' }} class="title">Admin Login</h1>
                        </div>
                        <p style={{ color: '#fff' }}>Home :: Admin Login</p>

                    </aside>
                </div>
            </section>
        </div>


        <form onSubmit={handleSubmit} style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column', margin:'60px 0 60px 0', padding:'20px'}}>

            { <p>{JSON.stringify(formObj)}</p> }

            <input type="text" onChange={handleForm} name="username" id="username" placeholder="Enter Username" /> <br />
            <input type="text" onChange={handleForm} name="password" id="password" placeholder="Enter Password" /> <br />

            <input type="submit" value="Login" name="" id="" />
        </form>

        {/* *************************************************************** */}



        <div>
            <ul>
                {users.map(user=><li>{user.username},{user.password}</li>)}
            </ul>

        </div>


    </>);



};

export default AdminLogin;

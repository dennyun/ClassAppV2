import React from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import '../Login/style.css'

function Register() {
    return(
        <div className='root'>
            <Header/>
            <Form/>
        </div>
    )
}

export default Register;
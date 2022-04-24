import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
  } from '@chakra-ui/react'
  import { Container } from '@chakra-ui/react'
import { LogSign } from "./LogSignNav";

export const LoginForm=()=>{

    const [logData,setLogData] = useState({
        email:"",
        password:""
    })

    const navigate= useNavigate();

    const handleChange=(e)=>{
        setLogData({...logData,[e.target.className]:e.target.value})
    }

    const sendData=(e)=>{
        e.preventDefault();
       fetch("https://apartment-myapp.herokuapp.com/login",{
           method:"POST",
           body:JSON.stringify(logData),
           headers:{
               "content-type":"application/json"
           }
       }).then((res)=>{
           res.json().then((res)=>{
               console.log(res);
               if(res.status == "Done"){
                   alert(`Login Succesful`)
                    navigate("/")
               } else{
                alert("Wrong Credentials");
            }
           })
       })
    }



    return (
        <div>
            <LogSign/>
        <div id = "LoginForm" onSubmit={sendData}>
            <Container>

            <FormControl>
                <FormLabel>Email</FormLabel><br />
                <Input type="text" className="email"  onChange={handleChange}/><br /><br /><br />
                <FormLabel>Password</FormLabel><br />
                <Input type="password"  className="password" onChange={handleChange}/><br /><br /><br />

                <Input style={{width:"40%",height:"35px"}} type="submit" value="Submit"/>
            </FormControl>
            </Container>
        </div>
        </div>
    )
}
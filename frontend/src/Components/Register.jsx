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


export const Signup=()=>{

    const [user,setUser] = useState({
        first_name:"",
        last_name:"",       
        email:"",
        password:"",
    })

        const navigate = useNavigate();
    const handleChange=(e)=>{
        setUser({...user,[e.target.className]:e.target.value})
    }

    const sendData=(e)=>{
        e.preventDefault();
       fetch("https://apartment-myapp.herokuapp.com/register",{
           method:"POST",
           body:JSON.stringify(user),
           headers:{
               "content-type":"application/json"
           }
       }).then((res)=>{
           res.json().then((res)=>{
               console.log(res);
               if(res.status == "Done"){
                   alert("Registered Succesfully")
                navigate("/login")
               }else if(res.status == "HalfDone"){
                alert(res.errors);
               } else{
                alert("Already Registered");
            }
           })
       })
    }

    return (
        <div className="Nav_log">
            
        <div id = "Signup">
        <Container>
            <FormControl id = "signupForm" onSubmit={sendData}>
                <FormLabel>First Name</FormLabel><br />
                <Input type="text" className="username" id="name"  onChange={handleChange}/><br /><br />
                <FormLabel>Last Name</FormLabel><br />
                <Input type="text" className="email" onChange={handleChange}/><br /><br />
                <FormLabel>Email</FormLabel><br />
                <Input type="password" className="password" onChange={handleChange}/><br /><br />
                <FormLabel>Password</FormLabel><br />
                <Input type="text" className="phone" onChange={handleChange}/>
                <br />
                <br />
                <Input style={{width:"40%", height:"35px"}} type="submit" value="Submit" />
            </FormControl>
        </Container>
        </div>
        </div>
        
    )
}
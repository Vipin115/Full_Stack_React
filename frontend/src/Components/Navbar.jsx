import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

 export const Navbar = ()=>{
    return <Box bg='tomato' w='100%' p={4} color='white' display={"flex"} justifyContent="space-around" letterSpacing={"wide"} >
    <Link to={"/"}>Home</Link>
    <br/>
    <Link to={"/login"}>Admin_Login</Link>
  </Box>
}
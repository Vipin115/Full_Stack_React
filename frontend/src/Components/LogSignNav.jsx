import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const LogSign = ()=>{
    return <Box bg='tomato' w='100%' p={4} color='white'>
    <Link to={"/"}>Home</Link>
    <br/>
    <Link to={"/register"}>Register</Link>
    <Link to={"/login"}>Login</Link>
    </Box>
}
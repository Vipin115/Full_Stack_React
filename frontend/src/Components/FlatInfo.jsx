import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import { Box, Container } from '@chakra-ui/react'



export const FlatInfo =()=>{
    const { _id } = useParams();
    const [product, setDetail] = useState({});
  
    useEffect(() => {
      axios.get(`https://apartment-myapp.herokuapp.com/flats/${_id}`).then(({ data }) => {
        console.log(data)
        setDetail(data)
      })
    },[])
    return (
        <Container maxW='sm' fontWeight='semibold' fontSize='xl'>
          <Box borderWidth='2px' borderRadius='lg'>

            <img src={product.image} alt="" width={"100%"}/>
            <h1>Name: {product.name}</h1>
            <h1>Age: {product.age}</h1>
            <h1>Gender: {product.gender}</h1>
            <h1>Block: {product.block}</h1>
          </Box>

        </Container>
    )
}
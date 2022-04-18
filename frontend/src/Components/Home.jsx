import { useEffect, useState } from "react"
import {useSelector,useDispatch} from "react-redux"
import { addFlat } from "../Redux/action";
import axios from "axios"
import { FlatData } from "./AddFlat";
import {
    Table,
    Thead,
    
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
  import { Button, ButtonGroup } from '@chakra-ui/react'
  

export const Home = ()=>{
    const [flat,setFlat] = useState([])

    const dispatch = useDispatch();

    const rooms = useSelector((store)=>store.flat)

    useEffect(()=>{
        getData()
    },[])

    const getData = () => {
        axios.get(`http://localhost:3500/flats`).then((res) => {
            console.log(res.data)
          let final = dispatch(addFlat(res.data));
          setFlat([...final.payload]);
        });
      };

      function Number_asc(){

      }

    return (
        
            <TableContainer>
             <Button variant={"outline"} colorScheme='blue'>Sort Number asc</Button>
             <Button variant={"outline"} colorScheme='blue'>Sort Number desc</Button>

            <Table size="sm" variant="simple" colorScheme={"gray"}>
            <Thead>
            <Tr>
                    <Th>Type</Th>
                    <Th>Block</Th>
                    <Th>Number</Th>
                    <Th>Residents</Th>
                    <Th>image</Th>
                </Tr>
                {flat.map((el)=>(
                    <FlatData key={el._id} data={el}/>
                ))}
    </Thead>
               
            </Table>
            </TableContainer>
        
       
    )
}
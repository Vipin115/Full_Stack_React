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
        axios.get(`https://apartment-myapp.herokuapp.com/flats`).then((res) => {
            console.log(res.data)
          let final = dispatch(addFlat(res.data));
          setFlat([...final.payload]);
        });
      };

      

      const high = () => {
        let test = rooms.sort(handlesortasc);
        let change = dispatch(addFlat(test));
        setFlat([...change.payload]);
      };
    
      function handlesortasc(a, b) {
        if (+a.number > +b.number) {
          return -1;
        }
        if (+a.number < +b.number) {
          return 1;
        }
        return 0;
      }
      const Low = () => {
        let test = rooms.sort(handlesortdes);
        let change = dispatch(addFlat(test));
        setFlat([...change.payload]);
      };
    
      function handlesortdes(a, b) {
        if (+a.number > +b.number) {
          return 1;
        }
        if (+a.number < +b.number) {
          return -1;
        }
        return 0;
      }

    return (
        
            <TableContainer>
              <Button variant={"outline"} colorScheme='blue'>Filter By Owner</Button>
              <Button variant={"outline"} colorScheme='blue'>Filter By Tenant</Button>
             <Button onClick={()=>high()} variant={"outline"} colorScheme='blue'>Sort Flat Number asc</Button>
             <Button onClick={()=>Low()} variant={"outline"} colorScheme='blue'>Sort Flat Number desc</Button>

            <Table size="sm" variant="simple" colorScheme={"gray"}>
            <Thead>
            <Tr>
                    <Th>Type</Th>
                    <Th>Block</Th>
                    <Th>Flat Number</Th>
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
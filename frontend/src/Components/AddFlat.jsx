import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


export const FlatData=({data})=>{
    return (
        <Tr>
            <Td>{data.type}</Td>
            <Td>{data.block}</Td>
            <Td>{data.number}</Td>
            <Td>{data.residents}</Td>
            <Td><Link to={`/${data._id}`}><img src={data.image} alt="" /></Link></Td>
        </Tr>
    )
}
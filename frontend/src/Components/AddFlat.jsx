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


export const FlatData=({data})=>{
    return (
        <Tr>
            <Td>{data.type}</Td>
            <Td>{data.block}</Td>
            <Td>{data.number}</Td>
            <Td>{data.residents}</Td>
        </Tr>
    )
}
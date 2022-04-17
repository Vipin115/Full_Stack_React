import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
  import { Input } from '@chakra-ui/react'
import { useState } from 'react'

import { Container } from '@chakra-ui/react'

export const LoginForm = ()=>{
    const [input, setInput] = useState('')
    

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''
  


  return (
    <Container>

    <FormControl isInvalid={isError} w="70%">
      <FormLabel htmlFor='email'>Email</FormLabel>
      <Input
        id='email'
        type='email'
        value={input}
        onChange={handleInputChange}
      />
      {!isError ? (
        <FormHelperText>
          
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
        
      )}
      <Input
        id='password'
        type='password'
        value={input}
        onChange={handleInputChange}
      />
      {!isError ? (
        <FormHelperText>
          
        </FormHelperText>
      ) : (
        <FormErrorMessage>password is required.</FormErrorMessage>
        
      )}
    </FormControl>
   
    </Container>
  )
}
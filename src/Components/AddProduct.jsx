import { Flex, Heading, Text, Button, Image, Stack, Box, SimpleGrid, Container } from "@chakra-ui/react";
import { InputGroup, InputLeftElement, Input, InputRightElement, FormControl, FormLabel, } from "@chakra-ui/react";
import React from 'react';



function AddProductPage(props) {

  return (
    <>
    <Flex justifyContent='center'>
      <SimpleGrid marginTop='10' columns={[1,2]} spacing={8} width='150vh' shadow='md' justifyContent='center'>
      <FormControl>
        <FormLabel>Add New Image</FormLabel>
        <Input type='new' placeholder='Add New Image' size='md' marginTop='3' />
      </FormControl>

      <FormControl>
        <FormLabel>Add Product Name</FormLabel>
        <Input type='product' placeholder='Add Product Name' size='md' marginTop='3' />
      </FormControl>

      <FormControl>
        <FormLabel>Add Product Description</FormLabel>
        <Input type='description' placeholder='Add Product Description ' size='md' marginTop='3' />
      </FormControl>

      <FormControl>
        <FormLabel>Add Price</FormLabel>
        <Input type='price' placeholder='Add Price' size='md' marginTop='3' />
      </FormControl>

      <FormControl>
        <FormLabel>Add Quantity</FormLabel>
        <Input type='quantity' placeholder='Add Quantity' size='md' marginTop='3' />
      </FormControl>

      <Stack marginTop='10' spacing={4} direction='row' align='center' justifyContent='left'>
      <Button _hover='none' type='button' textColor='white' bgColor={'#537FE7'} size='md'>
        Create New Product
      </Button>
      </Stack>

      </SimpleGrid>
    </Flex>

    {/* <Stack marginTop='10' spacing={4} direction='row' align='center'>
      <Button _hover='none' type='button' textColor='white' bgColor={'#537FE7'} size='md'>
        Create New Product
      </Button>
    </Stack> */}

    </>

    );
    
}

export default AddProductPage;
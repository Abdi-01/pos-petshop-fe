import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Flex, Text, Spacer, Button, Image, Stack, Heading, SimpleGrid, Box, Center } from '@chakra-ui/react'

function products(props) {

    return (

    <Flex >
        <SimpleGrid>
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Center>
          <Image boxSize='200px' objectFit='cover'  src={props.productimage} alt="picture" />
          </Center>

          <Box p="6">
            <Stack spacing="1">
                {/* PRODUCT NAME */}
              <Heading fontSize="xl" fontWeight="bold">
                {props.name}
              </Heading>
              <Stack direction={'row'} justify={'left'} spacing='28'>
            <Stack spacing={0} align={'center'} marginTop='2' marginBottom='2'>
                <Flex fontSize='2xl'>
                    <Text fontWeight='bold' fontSize='2xl'>$</Text>
                    {props.price}
                </Flex>
            </Stack>
          </Stack>

            <Button mt={10} w={'full'} bg={'#537FE7'} color={'white'} rounded={'xl'}  _hover={{bg: '#537FE7'}} _focus={{bg: '#537FE7'}}>
                Add To Chart
            </Button>
            </Stack>
          </Box>
        </Box>
        </SimpleGrid>
    </Flex>

    ) 
};

export default products;
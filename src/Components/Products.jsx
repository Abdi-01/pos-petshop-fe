import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Flex, Text, Spacer, Button, Image, Stack, Heading, SimpleGrid, Box, Center } from '@chakra-ui/react'

function Products(props) {
  let find = props.dataCart.find((data, idx) => {
    console.log(`dataproductssssssss :`, data, props.productId);
    if (data.productId == props.productId) {
      return true;
    } else {
      return false;
    }
  })

  return (
    <Flex >
      <SimpleGrid>
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Center>
            <Image boxSize='200px' objectFit='cover' src={props.productimage} alt="picture" />
          </Center>

          <Box px="6" >
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
              {find ?
                <Flex gap={"4px"} justify={"center"}>
                  <Button
                    type='button'
                    // mt={10}
                    w={'1/2'}
                    bg={'#537FE7'}
                    color={'white'}
                    rounded={'xl'}
                    _hover={{ bg: '#537FE7' }}
                    _focus={{ bg: '#537FE7' }}
                    onClick={() => {
                      let found = props.dataCart.findIndex((data) => data.productId == props.productId);
                      let temp = [...props.dataCart]
                      if (temp[found].qty == 1) {
                        temp.splice(found, 1)
                      } else {
                        temp[found].qty -= 1
                      }
                      props.setDataCart(temp);
                    }}
                  >
                    -
                  </Button>

                  <Button
                    type='button'
                    // mt={10}
                    w={'1/2'}
                    bg={'#537FE7'}
                    color={'white'}
                    rounded={'xl'}
                    _hover={{ bg: '#537FE7' }}
                    _focus={{ bg: '#537FE7' }}
                    onClick={() => {
                      let found = props.dataCart.findIndex((data) => data.productId == props.productId);
                      let temp = [...props.dataCart]
                      temp[found].qty += 1
                      props.setDataCart(temp);
                    }}
                  >
                    +
                  </Button>
                </ Flex>

                :

                <Button onClick={() => {
                  props.setDataCart([...props.dataCart, {
                    productId: props.productId, name: props.name,
                    qty: 1, price: props.price, uuid: props.uuid, product: props.product,
                  }])
                }}
                  type='button'
                  mt={10}
                  w={'full'}
                  bg={'#537FE7'}
                  color={'white'}
                  rounded={'xl'}
                  _hover={{ bg: '#537FE7' }}
                  _focus={{ bg: '#537FE7' }}
                >
                  add to cart
                </Button>
              }
              {/* <Button type='button' mt={10} w={'full'} bg={'#537FE7'} color={'white'} rounded={'xl'} _hover={{ bg: '#537FE7' }} _focus={{ bg: '#537FE7' }}>
                Add To Chart
              </Button> */}
            </Stack>
          </Box>
        </Box>
      </SimpleGrid>
    </Flex>

  )
};

export default Products;
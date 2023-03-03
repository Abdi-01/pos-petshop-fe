import { Box, Button, Flex, Heading, Input, InputGroup } from '@chakra-ui/react';
import React from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';

function Transaction() {
    return (
        <Box my={"10"} mx="5" >
            <Heading size={"md"} mb="2">
                Transaction
            </Heading>
            <hr />
            {/* <Box mt={"8px"}>
                <Flex alignItems={"center"}>
                    <Heading size={"sm"} fontWeight="semibold" w={"40"}>Product Name :</Heading>
                    <InputGroup w={{ sm: "40", md: "96", lg: "96" }}>
                        <Input type="text" bg="white" color="gray.800" />
                    </InputGroup>
                    <Button ml={"8px"} type='button' fontSize={"2xl"} _hover={"none"} bgColor={"#537FE7"} style={{ color: "#E9F8F9" }} leftIcon={<MdOutlineShoppingCart />} />
                </Flex>
            </Box> */}

        </Box >
    );
}

export default Transaction;
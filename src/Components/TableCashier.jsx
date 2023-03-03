import React from 'react';
import {
    Box, Button, Flex, Heading, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr
} from '@chakra-ui/react';
import { MdShoppingCart } from 'react-icons/md';
import OrderDetails from './OrderDetails';

function TableCashier(props) {

    const printAllOrder = () => {
        return props.dataCart.map((val, idx) => {
            console.log(`ini value name:`, val.name);
            return <OrderDetails idx={idx + 1} name={val.name} quantity={val.qty} price={val.price} />
        })
    }

    let total = props.dataCart.reduce((a, b) => a + b.price * b.qty, 0);
    let grandTotal = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(total)


    return (
        <Box mt={"20px"}>
            <Box bgColor={"#537FE7"} fontSize="2xl" textColor={"#E9F8F9"} borderTopRadius="lg">
                <Flex alignItems={"center"} mx="10px" justifyContent={"space-between"} py="12px">
                    <Box>
                        <Flex alignItems={"center"}>
                            {<MdShoppingCart />} KASIR
                        </Flex>
                    </Box>
                    <Button onClick={() => {
                        props.setDataCart([])
                    }}
                        bgColor={"#181823"} _hover="none"
                    >
                        RESET KERANJANG
                    </Button>
                </Flex>
            </Box>
            <Box border={"1px"} borderColor="gray.100" borderBottomRadius={"lg"}>
                <TableContainer m={"20px"} >
                    <Table w={"3xl"} layout="fixed">
                        <Thead>
                            <Tr w={"100%"}>
                                <Th w={"5%"}>No</Th>
                                <Th w={"60%"}>Product Name</Th>
                                <Th w={"5%"}>Qty</Th>
                                <Th w={"15%"}>Price</Th>
                                <Th w={"15%"}>Total</Th>
                                {/* <Th>Action</Th> */}
                            </Tr>
                        </Thead>
                        <Tbody >
                            {printAllOrder()}
                        </Tbody>
                    </Table>
                </TableContainer>
                <Flex alignItems={"center"} ml="5">
                    <Heading size={"sm"} fontWeight="semibold" w={"32"}>Grand Total :</Heading>
                    <Text disabled type="text" bg="white" color="gray.800" w="60" fontWeight={"semibold"}>
                        {grandTotal}
                    </Text>
                </Flex>
                <Flex alignItems={"center"} ml="5" my="1">
                    <Heading size={"sm"} fontWeight="semibold" w={"32"}>Bayar :</Heading>
                    <Input type="text" bg="white" color="gray.800" w="60" />
                    <Button ml="1" leftIcon={<MdShoppingCart />} _hover={"none"} bgColor={"#537FE7"} style={{ color: "#E9F8F9" }}>Pay</Button>
                </Flex>
            </Box>
        </Box>
    );
}

export default TableCashier;
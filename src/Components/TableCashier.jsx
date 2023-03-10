import React, { useState } from 'react';
import {
    Box, Button, Flex, Heading, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr
} from '@chakra-ui/react';
import { MdShoppingCart } from 'react-icons/md';
import OrderDetails from './OrderDetails';
import axios from 'axios';
import { API_URL } from '../helper';

function TableCashier(props) {

    const printAllOrder = () => {
        return props.dataCart.map((val, idx) => {
            console.log(`ini value name:`, val.name);
            return <OrderDetails idx={idx + 1} name={val.name} quantity={val.quantity} price={val.price} />
        })
    }

    let total = props.dataCart.reduce((a, b) => a + b.price * b.quantity, 0);
    let grandTotal = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(total)


    let token = localStorage.getItem("petshop_login");
    const btnPay = async () => {
        try {
            if (window.confirm("Confirm Chekout?")) {
                if (props.dataCart.length == 0) {
                    alert("Cart empty!")
                } else {
                    if (bayar >= total) {
                        await axios.post(`${API_URL}/transaction/`, {
                            order: props.dataCart

                        }, {
                            headers: {
                                "Authorization": `Bearer ${token}`
                            }
                        })
                        let kembalian = bayar - total
                        if(kembalian == 0){
                            alert(`transaksi berhasil`)
                            setBayar("")
                        } else{
                            alert(`uang kembalian ${kembalian}`);
                            setBayar("")
                        }
                        
                    } else {
                        alert(`uang tidak cukup`)
                        setBayar("")
                    }
                }
            }

        } catch (error) {
            console.log(error);
        }
    }

    const [bayar, setBayar] = React.useState(0);

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
                    <Input onChange={(e) => setBayar(e.target.value)} value={bayar} type="number" bg="white" color="gray.800" w="60" />
                    <Button
                        onClick={() => {
                            btnPay();
                            props.setDataCart([])
                        }}
                        ml="1"
                        leftIcon={<MdShoppingCart />}
                        _hover={"none"}
                        bgColor={"#537FE7"}
                        style={{ color: "#E9F8F9" }}
                    >
                        Pay
                    </Button>
                </Flex>
            </Box>
        </Box>
    );
}

export default TableCashier;
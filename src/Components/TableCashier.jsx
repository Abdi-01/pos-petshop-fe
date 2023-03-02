import React from 'react';
import {
    Box, Button, Flex, Heading, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Table, TableContainer, Tbody, Td, Th, Thead, Tr
} from '@chakra-ui/react';
import { MdShoppingCart } from 'react-icons/md';

function TableCashier() {
    return (
        <Box mt={"20px"}>
            <Box bgColor={"#537FE7"} fontSize="2xl" textColor={"#E9F8F9"} borderTopRadius="lg">
                <Flex alignItems={"center"} mx="10px" justifyContent={"space-between"} py="12px">
                    <Box>
                        <Flex alignItems={"center"}>
                            {<MdShoppingCart />} KASIR
                        </Flex>
                    </Box>
                    <Button bgColor={"#181823"} _hover="none">
                        RESET KERANJANG
                    </Button>
                </Flex>
            </Box>
            <Box border={"1px"} borderColor="gray.100" borderBottomRadius={"lg"}>
                <TableContainer m={"20px"} >
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>No</Th>
                                <Th>Product Name</Th>
                                <Th>Quantity</Th>
                                <Th>Total</Th>
                                <Th>Cashier</Th>
                                <Th>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody >
                            <Tr>
                                <Td>1</Td>
                                <Td>Whiskas Dry Adult 1+ Indoor</Td>
                                <Td>
                                    <NumberInput defaultValue={1} min={1} w={"20"}>
                                        <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </Td>
                                <Td>Rp. 10000</Td>
                                <Td>superadmin</Td>
                                <Td>
                                    <Button _hover={"none"} bgColor={"#537FE7"} style={{ color: "#E9F8F9" }}>Delete</Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>2</Td>
                                <Td>Whiskas Dry Adult 1+ Skin & Coat </Td>
                                <Td>
                                    <NumberInput defaultValue={1} min={1} w={"20"}>
                                        <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </Td>
                                <Td>Rp. 12000</Td>
                                <Td>superadmin</Td>
                                <Td>
                                    <Button _hover={"none"} bgColor={"#537FE7"} style={{ color: "#E9F8F9" }}>Delete</Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
                <Flex justifyItems={"center"} m="20px" justifyContent={"space-evenly"}>
                    <Flex alignItems={"center"}>
                        <Heading size={"sm"} fontWeight="semibold" w={"40"}>Grand Total :</Heading>
                        <Input type="text" bg="white" color="gray.800" w="96" />
                    </Flex>
                    <Flex alignItems={"center"} >
                        <Heading size={"sm"} fontWeight="semibold" w={"40"}>Bayar :</Heading>
                        <Input type="text" bg="white" color="gray.800" w="96" />

                    </Flex>

                    <Button leftIcon={<MdShoppingCart />} _hover={"none"} bgColor={"#537FE7"} style={{ color: "#E9F8F9" }}>Pay</Button>

                </Flex>
            </Box>
        </Box>
    );
}

export default TableCashier;
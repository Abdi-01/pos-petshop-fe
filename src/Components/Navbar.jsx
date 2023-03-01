// import { Container, Flex, Box, Button } from '@chakra-ui/react';
import { SearchIcon, SettingsIcon } from '@chakra-ui/icons';
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, IconButton, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutAction } from '../Reducers/data';

function Navbar(props) {

    const username = useSelector((state) => state.dataReducer.username);
    console.log("username dari redux :", useSelector((state) => state.dataReducer));

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <Flex bg='#537FE7' color="white" p={5}>
            <Box flex='1'>
                <Button leftIcon={<FaBars />} variant='unstyled' onClick={handleOpen}></Button>
                <Drawer isOpen={isOpen} onClose={handleClose} placement="left">
                    <DrawerOverlay>
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerBody>
                                <DrawerBody mt='10'>
                                    <Link to="/landing">
                                        <Button variant='ghost'>Dashboard </Button>
                                    </Link>
                                </DrawerBody>
                                <DrawerBody>
                                    <Link to='/addproduct'>
                                        <Button variant='ghost'> Add New Product</Button>
                                    </Link>
                                </DrawerBody>
                                <DrawerBody>
                                    <Button variant='ghost'> Transaction </Button>
                                </DrawerBody>
                                <DrawerBody>
                                    <Link to='/user'>
                                        <Button variant='ghost'> User Management </Button>
                                    </Link>
                                </DrawerBody>
                                <DrawerBody>
                                    <Button variant='ghost'> Reports </Button>
                                </DrawerBody>
                            </DrawerBody>
                        </DrawerContent>
                    </DrawerOverlay>
                </Drawer>
            </Box>

            <Box bg='#537FE7' backgroundColor='#537FE7'>
                <InputGroup>
                    <InputLeftElement pointerEvents="none" children={<SearchIcon color='gray.800' />} />
                    <Input type="text" placeholder="Search" bg="white" color="gray.800" />
                </InputGroup>
            </Box>

            {
                username ? (
                    <Text mx={"12px"} fontSize="xl"   >
                        {username}
                    </Text>
                ) : null
            }

            <Box>
                <Menu>
                    <MenuButton as={IconButton} icon={<SettingsIcon />} background='transparent' />
                    <MenuList>
                        <MenuItem color='black' onClick={() => { dispatch(logoutAction()); navigate("/", { replace: true }); }}>Logout</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </Flex>
    )
}

export default Navbar;
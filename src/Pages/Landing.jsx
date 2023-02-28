import React from 'react';
import { Flex, Button, Box, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, IconButton, Image, Container} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { SearchIcon } from "@chakra-ui/icons";
import { SettingsIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Heading, Stack, SimpleGrid, Text } from "@chakra-ui/react";
import { logoutAction } from '../Reducers/data';


function LandingPage(props) {

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

    function handleLogout() {
      // handle logout logic here
    }

    return (

      <>
        <Flex bg='#537FE7' color="white" p={5}>
          <Box flex='1'>
            <Button leftIcon={<FaBars />} variant='unstyled' onClick={handleOpen}></Button>
            <Drawer isOpen={isOpen} onClose={handleClose} placement="left">
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody>
                <DrawerBody mt='10'>
                <Button variant='ghost'>Dashboard</Button>
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
                <Button variant='ghost'> User Management </Button>
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
            <Menu>
              <MenuButton background='transparent' as={Button}  >
                {username}
              </MenuButton>
            </Menu>
          ) : null
          } 

          <Box>
          <Menu>
            <MenuButton as={IconButton} icon={<SettingsIcon />} background='transparent' />
          <MenuList>
            <MenuItem color='black' onClick={() => {dispatch(logoutAction()); navigate("/", {replace:true});}}>Logout</MenuItem>
          </MenuList>
          </Menu>
          </Box>
        </Flex>


                                      {/* ini product */}
    <Flex alignItems="center" justifyContent="center" minHeight="100vh" bg="gray.100">
      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://via.placeholder.com/350x150" alt="Placeholder image" />

          <Box p="6">
            <Stack spacing="1">
              <Heading fontSize="xl" fontWeight="bold">
                Card 1
              </Heading>

              <Text fontSize="md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec interdum dolor. Nulla suscipit urna sit amet purus finibus sodales.
              </Text>

              <Button colorScheme="blue">Learn More</Button>
            </Stack>
          </Box>
        </Box>

        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://via.placeholder.com/350x150" alt="Placeholder image" />

          <Box p="6">
            <Stack spacing="1">
              <Heading fontSize="xl" fontWeight="bold">
                Card 2
              </Heading>

              <Text fontSize="md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec interdum dolor. Nulla suscipit urna sit amet purus finibus sodales.
              </Text>

              <Button colorScheme="blue">Learn More</Button>
            </Stack>
          </Box>
        </Box>

        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://via.placeholder.com/350x150" alt="Placeholder image" />

          <Box p="6">
            <Stack spacing="1">
              <Heading fontSize="xl" fontWeight="bold">
                Card 3
              </Heading>

              <Text fontSize="md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec interdum dolor. Nulla suscipit urna sit amet purus finibus sodales.
              </Text>

              <Button colorScheme="blue">Learn More</Button>
            </Stack>
          </Box>
        </Box>

        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://via.placeholder.com/350x150" alt="Placeholder image" />

          <Box p="6">
            <Stack spacing="1">
              <Heading fontSize="xl" fontWeight="bold">
                Card 4
              </Heading>

              <Text fontSize="md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec interdum dolor. Nulla suscipit urna sit amet purus finibus sodales.
              </Text>

              <Button colorScheme="blue">Learn More</Button>
            </Stack>
          </Box>
        </Box>

        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://via.placeholder.com/350x150" alt="Placeholder image" />

          <Box p="6">
            <Stack spacing="1">
              <Heading fontSize="xl" fontWeight="bold">
                Card 5
              </Heading>

              <Text fontSize="md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec interdum dolor. Nulla suscipit urna sit amet purus finibus sodales.
              </Text>

              <Button colorScheme="blue">Learn More</Button>
            </Stack>
          </Box>
        </Box>

        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://via.placeholder.com/350x150" alt="Placeholder image" />

          <Box p="6">
            <Stack spacing="1">
              <Heading fontSize="xl" fontWeight="bold">
                Card 6
              </Heading>

              <Text fontSize="md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec interdum dolor. Nulla suscipit urna sit amet purus finibus sodales.
              </Text>

              <Button colorScheme="blue">Learn More</Button>
            </Stack>
          </Box>
        </Box>
      </SimpleGrid>
    </Flex>

  </>
  )
};

export default LandingPage;





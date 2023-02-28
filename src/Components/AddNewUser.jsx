import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Heading, Input, InputGroup, InputRightElement, Button, Grid, GridItem, Select } from '@chakra-ui/react'
import axios from 'axios';
import { API_URL } from '../helper';
import { useNavigate } from 'react-router-dom';

function AddNewUser() {

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const navigate = useNavigate()

    //add new user
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [role, setRole] = React.useState("");


    const btnAddNewUser = async () => {
        try {
            let resp = await axios.post(`${API_URL}/user/register`, {
                name: name,
                email: email,
                username: username,
                phone: phone,
                password: password,
                role_id: parseInt(role)
            })
            console.log(`ini dari resp addnewuser`, resp);
            if(resp.data.success){
                alert("registrasi berhasil");
                navigate("/")
                
            }

        } catch (error) {
            console.log("ini error addnewuser :", error);
            alert(error.response.data.message)
        }
    }


    return (
        <Card justifyContent={'center'}>
            <CardHeader>
                <Heading size={"md"}>Add New User</Heading>
            </CardHeader>
            <CardBody>
                <Grid templateColumns="repeat(3,1fr)" gap={6}>
                    <GridItem>
                        <Heading size={"sm"} fontWeight="semibold" >Name</Heading>
                        <Input onChange={(e) => setName(e.target.value)} mt={"10px"} placeholder='Bryan Toretto' size={"md"} />
                    </GridItem>
                    <GridItem>
                        <Heading size={"sm"} fontWeight="semibold">Email</Heading>
                        <Input onChange={(e) => setEmail(e.target.value)} mt={"10px"} placeholder='Bryan.Toretto@example.com' size={"md"} />
                    </GridItem>
                    <GridItem>
                        <Heading size={"sm"} fontWeight="semibold">Username</Heading>
                        <Input onChange={(e) => setUsername(e.target.value)} mt={"10px"} placeholder='BryanToretto' size={"md"} />
                    </GridItem>
                    <GridItem>
                        <Heading size={"sm"} fontWeight="semibold">Role</Heading>
                        <Select onChange={(e) => setRole(e.target.value)} mt={"10px"} placeholder="Select Role">
                            <option value='1'>Admin</option>
                            <option value='2'>Cashier</option>
                        </Select>
                    </GridItem>
                    <GridItem>
                        <Heading size={"sm"} fontWeight="semibold">Phone</Heading>
                        <Input onChange={(e) => setPhone(e.target.value)} mt={"10px"} placeholder='08XXXXXXXXXXXX' size={"md"} />
                    </GridItem>
                    <GridItem>
                        <Heading size={"sm"} fontWeight="semibold">Password</Heading>
                        <InputGroup onChange={(e) => setPassword(e.target.value)} mt={"10px"} size='md'>
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
                            />
                            <InputRightElement width='4.5rem'>
                                <Button bgColor={"#C0EEF2"} h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </GridItem>
                </Grid>
            </CardBody >
            <CardFooter>
                <Button onClick={btnAddNewUser} _hover={"none"} bgColor={"#537FE7"} style={{ color: "#E9F8F9" }}>Create Now</Button>
            </CardFooter>
        </Card >

    );
}

export default AddNewUser;
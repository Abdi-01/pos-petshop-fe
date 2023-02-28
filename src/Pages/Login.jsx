import React from 'react';
import { Box, Container, Text, FormControl, Input, InputGroup, InputRightAddon, Button, Center, Alert, Flex } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { API_URL } from '../helper';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginAction } from '../Reducers/data';

const LoginPage = (props) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [visible, setVisible] = React.useState('password');
    const [password, setPassword] = React.useState('');
    const [username, setUsername] = React.useState('');

    const handleVisible = () => {
        if (visible == 'password') {
            setVisible('text');
        } else {
            setVisible('password');
        }
    }

    const onBtnLogin = async () => {
        try {
            if (username == '' || password == '') {
                alert('Fill in all form');
            } else {
                let response = await axios.post(`${API_URL}/user/login`, {
                    username: username,
                    password: password
                });
                console.log("Check response login :", response.data);
                alert('login berhasil');
                localStorage.setItem("petshop_login", response.data.token)
                dispatch(loginAction(response.data))
                navigate("/landing", {replace: true})
                
            }
            
        } catch (error) {
            
        }
    }

return <Flex bg='#537FE7' minH='100vh' justify='center'>
    <Box>
    <Box m='auto' my='20' py='6' px='8' width='lg' boxShadow='md' rounded='md' bg='white'>
        <Text textAlign='center' fontSize='4xl' fontWeight='bold' style={{ color: '#537FE7' }}>PETSHOP</Text>
        <FormControl my='6'>
            <Input type='admin' onChange={(e) => setUsername(e.target.value)} placeholder='Admin'/>
        </FormControl>
        <FormControl my='6'>
            <InputGroup>
                <Input type={visible} onChange={(e) => setPassword(e.target.value)}  placeholder='Password'/>
                <InputRightAddon onClick={handleVisible}>
                    {
                        visible == 'password' ?
                        <ViewIcon /> :
                        <ViewOffIcon />
                    }
                </InputRightAddon>
            </InputGroup>
        </FormControl>
        <div style={{ textAlign: 'left' }}>
            <Button type='button' ml='1.5' variant='link' style={{ color: '#537FE7' }}>Forgot password ?</Button>
        </div>
        <Button my='4' width='full' onClick={onBtnLogin} type='button' _hover='none' textColor='white' bgColor={'#537FE7'}>
            Log in
        </Button>
    </Box>
    </Box>
</Flex>
};

export default LoginPage;
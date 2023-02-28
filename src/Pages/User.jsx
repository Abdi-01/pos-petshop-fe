import { Box, Button, Checkbox, Heading, Input, InputGroup, InputLeftElement, Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import { MdOutlineAdd, MdSearch } from "react-icons/md"
import TableUser from '../Components/TableUser';
import { API_URL } from '../helper';

function NewUser() {

    const [userList, setUserList] = React.useState([]);

    const getAllUser = async () => {
        try {
            let res = await axios.get(`${API_URL}/user/getalluser`);
            console.log(`ini dari res`, res.data);

            setUserList(res.data)

        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        getAllUser()
    }, [])

    const printUser = () => {
        console.log(`ini dari userlist`, userList);
        let newArr = userList.map((val, idx) => {
            return <TableUser name={val.name} role={val.role.role} phone={val.phone} email={val.email} />
        })
        return newArr
    }



    return (
        <Box m={"40px"}>
            <Heading size={"lg"} fontStyle="inherit" >
                User List
            </Heading>

            <Button mt={"28px"} _hover={"none"} bgColor={"#537FE7"} style={{ color: "#E9F8F9" }} leftIcon={<MdOutlineAdd />}> Add New User</Button>

            <InputGroup mt={"28px"} w="96">
                <InputLeftElement pointerEvents="none" children={<MdSearch size={"22"} color='gray.800' />} />
                <Input type="text" placeholder="Search List" bg="white" color="gray.800" />
            </InputGroup>

            <TableContainer mt={"20px"}>
                <Table >
                    <Thead>
                        <Tr>
                            <Th children={<Checkbox />}></Th>
                            <Th>Name</Th>
                            <Th>Role</Th>
                            <Th>Phone</Th>
                            <Th>Email</Th>
                        </Tr>
                    </Thead>
                    <Tbody >
                        {printUser()}
                    </Tbody>

                </Table>
            </TableContainer>



        </Box>


    );
}

export default NewUser;
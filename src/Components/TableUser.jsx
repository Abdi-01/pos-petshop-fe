import { Button, Td, Tr } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import { API_URL } from '../helper';

function TableUser(props) {

    let token = localStorage.getItem("petshop_login");

    const onBtnDelete = async () => {
        try {
            let res = await axios.patch(`${API_URL}/user/delete/${props.uuid}`, {}, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })

            alert(res.data.message)
            props.getAllUser()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Tr>
            <Td>{props.name}</Td>
            <Td>{props.role}</Td>
            <Td>{props.phone}</Td>
            <Td>{props.email}</Td>
            <Td>
                <Button onClick={onBtnDelete} _hover={"none"} bgColor={"#537FE7"} style={{ color: "#E9F8F9" }}>Delete</Button>
            </Td>
        </Tr>
    );
}

export default TableUser;
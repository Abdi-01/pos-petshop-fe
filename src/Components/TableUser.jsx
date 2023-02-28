import { Checkbox, Td, Tr } from '@chakra-ui/react';
import React from 'react';

function TableUser(props) {


    return (

        <Tr>
            <Td children={<Checkbox />} />
            <Td>{props.name}</Td>
            <Td>{props.role}</Td>
            <Td>{props.phone}</Td>
            <Td>{props.email}</Td>
        </Tr>
    );
}

export default TableUser;
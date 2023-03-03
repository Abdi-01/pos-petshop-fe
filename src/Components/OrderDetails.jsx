import { Button, Td, Tr } from '@chakra-ui/react';
import React from 'react';

function OrderDetails(props) {
    let total = props.price * props.quantity

    return (
        <Tr>
            <Td>{props.idx}</Td>
            <Td isTruncated>{props.name}</Td>
            <Td>{props.quantity}</Td>
            <Td>{props.price}</Td>
            <Td>{total}</Td>
            {/* <Td>
                <Button _hover={"none"} bgColor={"#537FE7"} style={{ color: "#E9F8F9" }}>Delete</Button>
            </Td> */}
        </Tr>
    );
}

export default OrderDetails;
import React from 'react';
import { Flex, Avatar, Text, Box, Icon, Button, Heading } from "@chakra-ui/react";

const Pagination = (props) => {
    const pageNumbers = [];
    console.log("ini props.totaldata", props.totalData);
    console.log("ini props.size", props.size);
    for (let i = 1; i <= Math.ceil(props.totalData / props.size); i++) {
        pageNumbers.push(i);
    }
    return (

        <Flex>
            {pageNumbers.map(number => (
                <Button onClick={() => props.paginate(number - 1)} color='white'
                    size='md'
                    fontSize="xs"
                    width="4"
                    variant={props.page + 1 == number ? 'solid' : 'outline'}
                    bg='#537FE7'
                    _hover={{
                        bg: "#537FE7",
                    }}
                    className='page-link' type="button"
                    mr='4'
                    _active={{
                        bg: '#537FE7',
                        transform: 'scale(0.98)',
                    }}
                >
                    {number}
                </Button>
            ))}
        </Flex>

    )

}
export default Pagination;
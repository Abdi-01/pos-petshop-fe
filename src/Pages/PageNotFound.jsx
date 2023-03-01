import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import foto from '../Images/404.png'

function PageNotFound() {
    return (
        <Image  mx="auto" src={foto} alt="404 not found" />

    );
}

export default PageNotFound;
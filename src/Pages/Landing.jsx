import React from 'react';
import { Flex, Button, Box, Image, } from '@chakra-ui/react';
import { Heading, Stack, SimpleGrid, Text } from "@chakra-ui/react";


function LandingPage(props) {



  return (

    <>


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





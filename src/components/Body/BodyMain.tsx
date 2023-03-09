import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Left from './Left/Left'
import Right from './Right/Right'
import Information from './Information/Information'
import Blog from './Blog/Blog'
import Footer from './Footer/Footer'
export default function BodyMain() {
    return (
        <Box
            w={'80%'}
            m="auto"
            position={"relative"}
             
        >
            <Flex minHeight="100vh">
                <Flex  minHeight="100vh" position="sticky"
                    flex={1} mr={3} display={{ base: "none", md: 'flex' }}>
                    <Left />
                </Flex>
                <Flex flex={{base:1, md:3}}
                    >
                    <Right />
                </Flex>
            </Flex>
            <Information />
            <Blog />
        </Box>
    )
}

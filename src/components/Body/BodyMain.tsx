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
            maxW={'80%'}
            m="auto"
            position={"relative"}
        >
            <Flex >
                <Flex position={"sticky"}
                    flex={1} mr={3} display={{ sm: "none", md: 'flex' }}>
                    <Left  />
                </Flex>
                <Flex 
                    flex={3}>
                    <Right />
                </Flex>
            </Flex>
            <Information />
            <Blog />
            <Footer />
        </Box>
    )
}

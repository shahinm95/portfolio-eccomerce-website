import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Left from './Left/Left'
import Right from './Right/Right'
import Information from './Information/Information'
import Blog from './Blog/Blog'
import Footer from './Footer/Footer'
import DealOfDay from './Right/DealOfDay'
import SuggestedForYou from './Right/SuggestedForYou'
export default function BodyMain() {
    return (
        <Box
            w={'80%'}
            m="auto"
            position={"relative"}

        >
            <Flex >
                <Flex
                    flex={1} mr={3} display={{ base: "none", md: 'flex' }}>
                    <Left />
                </Flex>
                <Flex flex={{ base: 1, md: 3 }}
                >
                    <Right />
                </Flex>
            </Flex>
            <DealOfDay />
            <SuggestedForYou />
            <Information />
            <Blog />
        </Box>
    )
}

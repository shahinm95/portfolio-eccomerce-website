import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Left from './Left/Left'
import Right from './Right/Right'
export default function BodyMain() {
    return (
        <Box
            maxW={'80%'}
            m="auto"
        >
            <Flex >
                <Flex alignItems={'stretch'}
                    flex={1} mr={3} display={{ sm: "none", md: 'flex' }}>
                    <Left />
                </Flex>
                <Flex 
                    flex={3}>
                    <Right />
                </Flex>
            </Flex>
        </Box>
    )
}

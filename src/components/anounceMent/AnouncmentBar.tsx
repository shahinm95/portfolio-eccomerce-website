import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import AnounceText from './AnounceText'

export default function AnouncmentBar() {

    return (
        <Flex
            bg={'#d8a48e'}
            color='#ffffff'
            align={"center"}
            justify={'center'}
            fontSize='11.9px'
            lineHeight='16.66px'
            p={'10px 0px'}
            textAlign={'center'}
            flex={1}
            fontWeight={'semibold'}
        >
            <Box p={'0px 5px'} w={'100%'} >
                <AnounceText />
            </Box>
        </Flex >
    )
}





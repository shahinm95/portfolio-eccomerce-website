import React from 'react'
import { Box, Flex, Link, Text, Stack, Popover, PopoverTrigger, PopoverContent } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { SlUser } from 'react-icons/sl'
import { IoBagOutline } from 'react-icons/io5'
import HeaderSub from './HeaderSub'



export default function Header() {
    return (
        <Box
            backgroundColor='#ffffff'
            boxShadow={'#000000 0px 0px 1px 0px'}
            color='#212121'
            fontFamily='Karla'
            fontSize='14px'
            lineHeight='19.6px'
            padding={'20px 0px'}
            minH={'60px'}
        >
            <Box
                color='#212121'
                fontSize='14px'
                lineHeight='19.6px'
                padding='0px 40px'
            >
                <Flex
                    alignItems='center'
                    color='#212121'
                    display='flex'
                    fontSize='14px'
                    justifyContent='space-between'
                    lineHeight='19.6px'
                >
                    <Box
                        flex-basis='130px'
                    >
                        <Link
                            display='inline-block'
                            font-family='Avenir Next'
                            fontSize='20px'
                            font-weight='500'
                            letter-spacing='1.4px'
                            line-height='14px'
                            padding='7.5px 12px'
                        >
                            <SearchIcon
                                fill='#212121'
                            />
                        </Link>
                    </Box>
                    <Box
                        align-items='center'
                        color='#212121'
                        display='flex'
                        flexBasis='160px'
                        fontSize='14px'
                        lineHeight='19.6px'
                        margin='0px 30px'
                    >
                        <Text
                            color='#212121'
                            fontSize='32px'
                            lineHeight='42px'
                            textAlign='center'
                        >
                            Dress Shop
                        </Text>
                    </Box>
                    <Box>
                        <Link
                            display='inline-block'
                            font-family='Avenir Next'
                            fontSize='20px'
                            font-weight='500'
                            letter-spacing='1.4px'
                            line-height='14px'
                            padding='7.5px 12px'
                        >
                            <SlUser />
                        </Link>
                        <Link
                            display='inline-block'
                            font-family='Avenir Next'
                            fontSize='20px'
                            font-weight='500'
                            letter-spacing='1.4px'
                            line-height='14px'
                            padding='7.5px 12px'
                        >
                            <IoBagOutline />
                        </Link>
                    </Box>
                </Flex>
            </Box>
            <Stack direction={'row'} align="center" justifyContent={'center'} pt={4} >
                <HeaderSub />
            </Stack>
        </Box>
    )
}



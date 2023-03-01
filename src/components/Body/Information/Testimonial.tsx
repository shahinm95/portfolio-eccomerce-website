import React from 'react'
import { Text, Box, Circle } from '@chakra-ui/react'
export default function Testimonial() {
    return (<Box flex={1}>
        < Text fontWeight={600} fontSize={20} pb={2} mb={6}
            borderBottom={'1px solid'} borderColor={'gray.300'}
        > Testimonial</Text >
        <Box py="30px" px="20px" >
            <Circle size={'80px'} bg="./images/testimonial-1.jpg" bgSize={'cover'} bgPosition="center" ></Circle>
            <Text>ALAN DOE</Text>
            <Text>CEO & Founder Invision</Text>
            <Box bg={'./images/icons/quotes.svg'} ></Box>
            <Text>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet.</Text>
        </Box>
    </Box>)


}

import React from 'react'
import { Text, Box, Circle, Center, Icon } from '@chakra-ui/react'
export default function Testimonial() {
    return (<Box flex={1} maxH={"360px"}>
        < Text fontWeight={600} fontSize={20} pb={2} mb={6}
            borderBottom={'1px solid'} borderColor={'gray.300'}
        > Testimonial</Text >
        <Center py="30px" px="20px" flexDirection={'column'} textAlign="center" border="1px solid"
        borderColor="gray.300" borderRadius={'2xl'} h="100%"
        >
            <Circle size={'80px'} bgImage="./images/testimonial-1.jpg" bgSize={'cover'} bgPosition="center" ></Circle>
            <Text py={2} fontWeight={600} fontSize={18} color="gray.500" >ALAN DOE</Text>
            <Text>CEO & Founder Invision</Text>
            <Box bgImage={'./images/icons/quotes.svg'} w="30px" h="20px" mt={4} p={2} bgPos={"center"} 
            backgroundSize="cover" >
            </Box>
            <Text color={"gray.500"} mt={4} >Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet.</Text>
        </Center>
    </Box>)


}

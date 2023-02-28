import React from 'react'
import { Box, Flex, VStack, Text, AspectRatio, Link } from '@chakra-ui/react'
import { bestSeller } from '@/listdata/bestSeller'



export default function BestSellers() {
    return (
        <Box w='100%' maxH='100%'>
            <Text mt={5} fontWeight={500} fontSize={17} >BEST SELLERS</Text>
            <Flex direction={'column'} w='100%' maxH='100%' flex={1} >
                {bestSeller.map((item, index) => {
                    return <Link key={item.title} _hover={{textDecoration: 'none'}} >
                        <Flex my={2} >
                            <AspectRatio ratio={1 / 1} w={'100%'} flex={1} >
                                <Box flex={1} bgImage={item.img} w={'100%'}
                                    bgPosition="center" bgSize={'cover'}></Box>
                            </AspectRatio>

                            <Flex direction={'column'} flex={2} pl={3} justify='space-between' >
                                <Text fontWeight={600} >{item.title}</Text>
                                <Text fontSize={13} color="red.400" >{item.rating}/5</Text>
                                <Flex>
                                    <Text><del>{item.oldpr}</del></Text>
                                    <Text ml={3} fontWeight={700} >{item.price}</Text>
                                </Flex>
                            </Flex >

                        </Flex>
                    </Link>
                })}
            </Flex>
        </Box>
    )
}

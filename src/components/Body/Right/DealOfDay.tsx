import React from 'react'
import { dealOfDay } from '@/listdata/dealOfDay'
import { Box, Flex, VStack, Link, Text, Button, AspectRatio } from '@chakra-ui/react'



export default function DealOfDay() {
    return (
        <Box w={'100%'} mt={10}>
            <Text fontWeight={600} fontSize={20} pb={2}
                borderBottom={'1px solid'} borderColor={'gray.300'}
            >Deal Of The Day</Text>
            <Flex overflowX={'auto'}  scrollSnapType="inline mandatary" gap={'20px'}
            className="has-scrollbar"
            >
                {dealOfDay.map((deal) => {
                    return (
                        <Flex key={deal.title} minW="100%" mt={5} p={5} border={'1px solid'}
                        borderColor="gray.300" borderRadius={'2xl'}
                        >
                            <Link flex={1} justifyContent="center" alignContent={'center'} >
                                <AspectRatio ratio={3 /3}>
                                    <Box bgImg={deal.img} flex={1} w="100%" maxH="100%" backgroundPosition="center" backgroundSize={"cover"} >
                                    </Box>
                                </AspectRatio>
                            </Link>
                            <Flex direction={'column'} flex={1} justifyContent="space-between" >
                                <Link fontWeight={700} fontSize={20} mt={5} >{deal.title}</Link>
                                <Text mt={-5} >{deal.descrp}</Text>
                                <Flex gap={5} fontSize={20} >
                                    <Text fontWeight={700} color="red.400">{deal.price}</Text>
                                    <Text><del>{deal.oldpr}</del></Text>
                                </Flex>
                                <Button bg={'red.300'} color="white" _hover={{bg: 'red.400'}}
                                maxW="50%"
                                >ADD TO CART</Button>
                                <Flex justify={"space-between"} >
                                    <Box>ALREADY SOlD: <Text display={'inline-block'}
                                    fontWeight={700}
                                    >{deal.sold}</Text></Box>
                                    <Box>AVAILABLE : <Text display={'inline-block'}
                                    fontWeight={700}
                                    >{deal.available}</Text></Box>
                                </Flex>
                                <Text fontWeight={700} >HURRY UP! OFFER ENDS IN:</Text>
                                <Flex gap={5} justify="space-between">
                                    <Box bg={'gray.200'} minW={20} p={2} borderRadius="2xl" textAlign={'center'} >
                                        <Text  fontWeight={700} >{deal.remaining.day}</Text>
                                        <Text>Days</Text>
                                    </Box>
                                    <Box bg={'gray.200'} minW={20} p={2} borderRadius="2xl" textAlign={'center'} >
                                        <Text  fontWeight={700} >{deal.remaining.hours}</Text>
                                        <Text>Hours</Text>
                                    </Box>
                                    <Box bg={'gray.200'} minW={20} p={2} borderRadius="2xl" textAlign={'center'} >
                                        <Text  fontWeight={700} >{deal.remaining.min}</Text>
                                        <Text>Min</Text>
                                    </Box>
                                    <Box bg={'gray.200'} minW={20} p={2} borderRadius="2xl" textAlign={'center'} >
                                        <Text  fontWeight={700} >{deal.remaining.sec}</Text>
                                        <Text>Sec</Text>
                                    </Box>
                                </Flex>
                            </Flex >
                        </Flex>
                    )
                })}
            </Flex>
        </Box>
    )
}

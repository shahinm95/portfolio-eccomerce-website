import React from 'react'
import { dealOfDay } from '@/listdata/dealOfDay'
import { Box, Flex, VStack, Link, Text, Button, AspectRatio } from '@chakra-ui/react'
import { useDispatch } from "react-redux";
import { addToCart} from "@/redux/actions";
import NextLink from 'next/link';

export default function DealOfDay() {

    const dispatch = useDispatch();


    return (
        <Box w={'100%'} mt={10} fontSize={{base: 'sm' , md: "md"}} >
            <Text fontWeight={600} fontSize={20} pb={2}
                borderBottom={'1px solid'} borderColor={'gray.300'}
            >Deal Of The Day</Text>
            <Box maxW={'100%'} >
                <Flex 
                overflowX={'scroll'} 
                scrollSnapType="inline mandatary" 
                gap={'20px'}
                className="has-scrollbar"
                >
                    {dealOfDay.map((deal) => {
                        return (
                            <Flex key={deal.title} minW="100%" mt={{base:5,md:5}} p={{base:1,md:5}} border={'1px solid'}
                                borderColor="gray.300" borderRadius={'2xl'}   
                            >
                                <Link flex={1} justifyContent="center" alignContent={'center'} >
                                    <AspectRatio ratio={{base:3/5,md:3 / 3}}>
                                        <Box as={NextLink} href={`/${encodeURIComponent(deal.title)}`} bgImg={deal.img} flex={1} w="100%" maxH="100%" backgroundPosition="center" backgroundSize={"cover"} >
                                        </Box>
                                    </AspectRatio>
                                </Link>
                                <Flex direction={'column'} flex={1} justifyContent="space-between" >
                                    <Link fontWeight={700} fontSize={{base:"sm",md:20}} mt={5} as={NextLink}  href={`/${encodeURIComponent(deal.title)}`} >{deal.title}</Link>
                                    <Text mt={-5} display={{base:"none", md:"block"}} >{deal.descrp}</Text>
                                    <Flex gap={5} fontSize={{base:"sm",md:20}} >
                                        <Text fontWeight={700} color="red.400">{deal.price}</Text>
                                        <Text><del>{deal.oldpr}</del></Text>
                                    </Flex>
                                    <Button bg={'red.300'} color="white" _hover={{ bg: 'red.400' }} mx={{base:"auto", md:"0"}}
                                        maxW={{base:"100px", md:'50%'}}  fontSize={{base: 'sm' , md: "md"}}
                                        onClick={()=> dispatch(addToCart(deal.title, deal.img, deal.price, 1))}
                                    >ADD TO CART</Button>
                                    <Flex justify={"space-between"} display={{base:"none", md:"flex"}} >
                                        <Box>ALREADY SOlD: <Text display={'inline-block'}
                                            fontWeight={{base:"normal", md:"bold"}}
                                        >{deal.sold}</Text></Box>
                                        <Box>AVAILABLE : <Text display={'inline-block'}
                                            fontWeight={{base:"normal", md:"bold"}}
                                        >{deal.available}</Text></Box>
                                    </Flex>
                                    <Text fontWeight={{base:"normal", md:"bold"}} display={{base:"none", md:"block"}}  >HURRY UP! OFFER ENDS IN:</Text>
                                    <Flex gap={5} justify="space-evenly" maxW={"100%"} display={{base:"none", md:"flex"}} >
                                        <Box bg={'gray.200'} minW={20} p={2} borderRadius="2xl" textAlign={'center'} >
                                            <Text fontWeight={700} >{deal.remaining.day}</Text>
                                            <Text>Days</Text>
                                        </Box>
                                        <Box bg={'gray.200'} minW={20} p={2} borderRadius="2xl" textAlign={'center'} >
                                            <Text fontWeight={700} >{deal.remaining.hours}</Text>
                                            <Text>Hours</Text>
                                        </Box>
                                        <Box bg={'gray.200'} minW={20} p={2} borderRadius="2xl" textAlign={'center'} >
                                            <Text fontWeight={700} >{deal.remaining.min}</Text>
                                            <Text>Min</Text>
                                        </Box>
                                        <Box bg={'gray.200'} minW={20} p={2} borderRadius="2xl" textAlign={'center'} >
                                            <Text fontWeight={700} >{deal.remaining.sec}</Text>
                                            <Text>Sec</Text>
                                        </Box>
                                    </Flex>
                                </Flex >
                            </Flex>
                        )
                    })}
                </Flex>
            </Box>
        </Box>
    )
}

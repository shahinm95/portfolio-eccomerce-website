import React from 'react'
import { dealOfDay } from '@/listdata/dealOfDay'
import { Box, Flex, VStack, Link, Text, Button } from '@chakra-ui/react'



export default function DealOfDay() {
    return (
        <Box w={'100%'} mt={10}>
            <Text fontWeight={600} fontSize={20} pb={5}
                borderBottom={'1px solid'} borderColor={'gray.300'}
            >Deal Of The Day</Text>
            <Box>
                {dealOfDay.map((deal) => {
                    return (
                        <Flex key={deal.title} >
                            <Link flex={1}>
                                <Box bgImg={deal.img} backgroundPosition="center" backgroundSize={'cover'} >

                                </Box>
                            </Link>
                            <Box flex={1}>
                                <Link>{deal.title}</Link>
                                <Text>{deal.descrp}</Text>
                                <Flex>
                                    <Text>{deal.price}</Text>
                                    <Text><del>{deal.oldpr}</del></Text>
                                </Flex>
                                <Button>ADD TO CART</Button>
                                <Flex justify={"space-between"} >
                                    <Text>ALREADY SOlD: <Text>{deal.sold}</Text></Text>
                                    <Text>AVAILABLE : <Text>{deal.available}</Text></Text>
                                </Flex>
                                <Text>HURRY UP! OFFER ENDS IN:</Text>
                                <Flex>
                                    <Box>
                                        <Text>{deal.remaining.day}</Text>
                                        <Text>Days</Text>
                                    </Box>
                                    <Box>
                                        <Text>{deal.remaining.hours}</Text>
                                        <Text>Hours</Text>
                                    </Box>
                                    <Box>
                                        <Text>{deal.remaining.min}</Text>
                                        <Text>Min</Text>
                                    </Box>
                                    <Box>
                                        <Text>{deal.remaining.sec}</Text>
                                        <Text>Sec</Text>
                                    </Box>
                                </Flex>
                            </Box>
                        </Flex>
                    )
                })}
            </Box>
        </Box>
    )
}

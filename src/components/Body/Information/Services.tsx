import React from 'react'
import { Text, Box, Circle, Flex, Link } from '@chakra-ui/react'

export default function Services() {
    return (
        <Box flex={1} >
            < Text fontWeight={600} fontSize={20} pb={2} mb={6}
                borderBottom={'1px solid'} borderColor={'gray.300'}
            >Our Services</Text >
            <Box p="30px" textAlign={'left'}  >
                {serviceArr.map((servic) => {
                    return (
                        <Link key={servic.head}>
                            <Flex>
                                <Box></Box>
                                <Box>
                                    <Text>{servic.head}</Text>
                                    <Text>{servic.sub}</Text>
                                </Box>
                            </Flex>
                        </Link>
                    )
                })}
            </Box>
        </Box>

    )
}

interface ServicType {
    head: string;
    sub: string;
}

const serviceArr: ServicType[] = [
    {
        head: "Worldwide Delivery",
        sub: "For Order Over $100",
    },
    {
        head: "Next Day Delivery",
        sub: "UK Orders Only",
    },
    {
        head: "Best Online Support",
        sub: "Hours: 8AM - 11PM",
    },
    {
        head: "Return Policy",
        sub: "Easy & Free Return",
    },
    {
        head: "30% Money Back",
        sub: "For Order Over $100",
    },
]
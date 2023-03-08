import React from 'react'
import { Text, Box, Circle, Flex, Link, Icon, Center, } from '@chakra-ui/react'
import { RiShipFill } from 'react-icons/ri'
import {IoRocketSharp} from "react-icons/io5"
import {RiPhoneFill} from "react-icons/ri"
import {TiArrowBack} from "react-icons/ti"
import {GiReceiveMoney} from "react-icons/gi"
export default function Services() {
    return (
        <Box flex={1} >
            < Text fontWeight={600} fontSize={20} pb={2} mb={6}
                borderBottom={'1px solid'} borderColor={'gray.300'}
            >Our Services</Text >
            <Box p="30px" textAlign={'left'} maxH={"360px"} border="1px solid" borderColor={"gray.300"} borderRadius="2xl"  >
                {serviceArr.map((servic) => {
                    return (
                        <Link key={servic.head} _hover={{ textDecoration: "none" }}>
                            <Flex mb={3} >
                                <Center w={"35px"} h="100%" fontSize={"3xl"}
                                    color={"red.400"} verticalAlign="text-top" my="auto"
                                >
                                    {servic.icon}
                                </Center>
                                <Box ml={2}>
                                    <Text fontWeight={"bold"} color="gray.500">{servic.head}</Text>
                                    <Text fontSize={"sm"} color="gray.500">{servic.sub}</Text>
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
    icon: JSX.Element;
}

const serviceArr: ServicType[] = [
    {
        head: "Worldwide Delivery",
        sub: "For Order Over $100",
        icon: <RiShipFill />,
    },
    {
        head: "Next Day Delivery",
        sub: "UK Orders Only",
        icon: <IoRocketSharp/>,
    },
    {
        head: "Best Online Support",
        sub: "Hours: 8AM - 11PM",
        icon: <RiPhoneFill />,
    },
    {
        head: "Return Policy",
        sub: "Easy & Free Return",
        icon: <TiArrowBack />,
    },
    {
        head: "30% Money Back",
        sub: "For Order Over $100",
        icon: <GiReceiveMoney />,
    },
]
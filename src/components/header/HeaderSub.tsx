import React, { useState } from 'react'
import {
    Stack, Box, PopoverTrigger, Popover, PopoverContent, Link, VStack, HStack, Flex, chakra,
    useDisclosure, SlideFade, useStyleConfig,
} from '@chakra-ui/react'
import { NAV_ITEMS } from './items'
import { motion, useSpring } from 'framer-motion'
import '../../styles/Home.module.css'


export const MotionBox = motion(chakra.div);



export default function HeaderSub() {
    const [isHovered, setIsHovered] = useState(false);





    return (
        <Stack direction={"row"}>
            {NAV_ITEMS.map((item) => (
                <Box key={item.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}
                    >
                        <PopoverTrigger>
                            <Link
                                backgroundColor='#ffffff'
                                color='#212121'
                                display='inline-block'
                                fontFamily='Avenir Next'
                                fontSize='14px'
                                fontWeight='500'
                                letterSpacing='1.4px'
                                lineHeight='14px'
                                padding='7.5px 15px'
                                textAlign='center'
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                position="relative" // add this to make sure the pseudo-element is positioned relative to the Link
                                _hover={{ textDecoration: 'none' }} // remove the default underline on hover
                            >
                                {item.label}
                                <chakra.span
                                    position="absolute"
                                    bottom="-1px"
                                    left="0"
                                    width="0"
                                    height="2px"
                                    backgroundColor="#212121"
                                    transition="width 0.6s ease-in-out, opacity 0.4s ease-in-out"
                                    opacity="0"
                                    zIndex="10"
                                ></chakra.span>
                            </Link>
                        </PopoverTrigger>
                        {item.children &&
                            <PopoverContent
                                p={4}
                                rounded={'xl'}
                                minW={'xl'}
                                textAlign="left"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >

                                <Stack direction={'row'}>
                                    {item.children && item.children.map((child, index) => {
                                        const delay = index * 0.2; // Calculate delay for each child
                                        return <Flex key={child.label}
                                            justify={'center'}
                                            flex={1}
                                        >
                                            <MotionBox
                                                as="div"
                                                variants={popoverVariants}
                                                initial="hidden"
                                                animate={isHovered ? "visible" : "hidden"}
                                                transition={{ staggerChildren: 0.1, delay }} // staggerChildren and delay prop added
                                            >
                                                <motion.div
                                                    variants={contentVariants}
                                                    transition={{ duration: 0.7, easings: "ease-in-out", }}
                                                >
                                                    <VStack textAlign="left" align={'left'} pb={3}>
                                                        <Link fontWeight={700} pt={5} >
                                                            {child.label}
                                                        </Link>
                                                        <VStack align="left" pt={2}>
                                                            {Array.isArray(child.subLabel) && child.subLabel?.map((sub: string) => {
                                                                return <Link key={sub} >{sub}</Link>
                                                            })}
                                                        </VStack>
                                                    </VStack>
                                                </motion.div>
                                            </MotionBox>
                                        </Flex>
                                    })}
                                </Stack>

                            </PopoverContent>
                        }
                    </Popover>
                </Box >
            ))
            }
        </Stack >
    )
}

const popoverVariants = {
    hidden: {
        opacity: 0,
        y: 10,
    },
    visible: {
        opacity: 1,
        y: 0,
    },
};

const contentVariants = {
    hidden: {
        y: 30,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
    },
};


import React, { useState, useEffect } from 'react'
import { AspectRatio, Box, Text, Button, Flex, Circle } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"

export default function Carousel() {


    const [curSlide, setCurSilde] = useState<number>(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurSilde((curSlide) => (curSlide + 1) % carouselArr.length);
        }, 4000)
        return () => (clearInterval(timer))
    }, [curSlide])


    return (
        <Box
            maxW={'80%'}
            margin="10px auto"
            maxH={'100%'}
        >
            <AspectRatio
                ratio={{ sm: 5 / 3, md: 4 / 2, lg: 4 / 2 }}
                minW={'100%'}
                h={'100%'}
                borderRadius={'3xl'}
                position="relative"
            >
                <AnimatePresence >
                    <Box
                        as={motion.div}
                        key={curSlide}
                        maxW={'100%'}
                        maxH={'100%'}
                        backgroundImage={carouselArr[curSlide].src}
                        backgroundSize='cover'
                        backgroundPosition="right"
                        borderRadius={{ sm: 'xl', md: '2xl' }}
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: '1' }}
                        exit={{ opacity: 0 }}
                        position="relative"
                    >
                        <Box
                            maxH="100%"
                            position='absolute'
                            left={{ sm: '5%', md: "10%" }}
                            maxW={'80%'}
                        >
                            <Flex
                                h={{ sm: '270px', md: "300px" }}
                                maxW={{ sm: '300px', md: '400px' }}
                                borderRadius={'2xl'}
                                p={4}
                                flex={1}
                                direction="column"
                                justify={'space-between'}
                                bg={{ sm: "rgba(256, 256, 256, 0.8)", md: "none" }}
                            >
                                <Text
                                    color="red.400"
                                    fontSize={20}
                                >{carouselArr[curSlide].upHead}</Text>
                                <Text
                                    fontWeight={800}
                                    fontSize={{ sm: '2xl', md: "3xl" }}
                                >{carouselArr[curSlide].head}</Text>
                                <Text
                                    fontSize={20}
                                    color="gray.600"
                                >{carouselArr[curSlide].subHead}</Text>
                                <Button
                                    fontSize={15}
                                    maxW={40}
                                    mt={5}
                                    bg="red.400"
                                    _hover={{ bg: 'red.800', transition: "0.4s ease-in-out" }}
                                    color="white"
                                >SHOP NOW</Button>
                            </Flex>
                        </Box>
                        <Flex
                            position={'absolute'}
                            bottom={2}
                        >
                            {circles.map((value, index) => {
                                return (
                                    <Circle
                                        key={value}
                                        size={'20px'}
                                        bg={curSlide === index ? 'red.700' : 'gray.100'}
                                        onClick={() => { setCurSilde(index) }}
                                        cursor="pointer"
                                        mx={1}
                                    ></Circle>
                                )
                            })}

                        </Flex>
                        <Circle
                            bg="rgba(0, 0, 0, 0.5)"
                            cursor={'pointer'}
                            position="absolute"
                            left={3}
                            p={1}
                            onClick={() => { setCurSilde((curSlide) => curSlide===0 ? 2 : curSlide - 1) }}
                        >
                            <BsChevronCompactLeft size={30} color="white" />
                        </Circle>
                        <Circle
                            bg="rgba(0, 0, 0, 0.5)"
                            cursor={'pointer'}
                            position="absolute"
                            right={3}
                            p={1}
                            onClick={() => { setCurSilde((curSlide) => (curSlide + 1) % carouselArr.length) }}
                        >
                            <BsChevronCompactRight size={30} color="white" />
                        </Circle>
                    </Box>
                </AnimatePresence>
            </AspectRatio>
        </Box >
    )
}






interface CaroselOBJ {
    src: string;
    upHead: string;
    head: string;
    subHead: string;
    url: string;
}
const carouselArr: CaroselOBJ[] = [
    {
        src: "/images/banner-1.jpg",
        upHead: 'Trending Item',
        head: "WOMEN'S LATEST FASHIO SALE",
        subHead: "starting at $ 20.00",
        url: '#'
    },
    {
        src: "/images/banner-2.jpg",
        upHead: 'Trending Accessories',
        head: "MODERN SUNGLASSES",
        subHead: "starting at $ 15.00",
        url: '#'
    },
    {
        src: "/images/banner-3.jpg",
        upHead: 'Sale Offer',
        head: "NEW FASHION SUMMER SALE",
        subHead: "starting at $ 29.99",
        url: '#'
    },
]


const circles: number[] = [0, 1, 2]
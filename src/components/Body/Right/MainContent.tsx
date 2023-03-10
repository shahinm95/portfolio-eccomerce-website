import React from 'react'
import { Box, Flex, Grid, Text, GridItem, AspectRatio, Link, HStack, VStack } from '@chakra-ui/react';
import { NewArrivals } from '@/listdata/newArrivals';
import { trendings } from '@/listdata/trendings';
import { topRated } from '@/listdata/topRated';

interface prop {
    activeTab: number;
}

export default function MainContent({ activeTab }: prop) {


    function itemsToShowFunc(activeTab: number) {
        if (activeTab === 0) {
            return NewArrivals;
        }
        else if (activeTab === 1) {
            return trendings;
        }
        else if (activeTab === 2) {
            return topRated;
        }
    }
    const itemsToShow = itemsToShowFunc(activeTab);
    return (
        <Box w="100%" fontSize={{base:"sm", md:"md"}}>
            <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: "repeat(2, 1fr)", lg: 'repeat(3, 1fr)' }} gap={6} >
                {itemsToShow && itemsToShow.map((item) => {
                    return (
                        <GridItem key={item.title}
                            border={'1px solid'}
                            borderColor={'gray.300'}
                            borderRadius={'2xl'}
                            px={2}
                            _hover={{ boxShadow: 'lg' }}
                        >
                            <AspectRatio
                                ratio={{ base: 2 / 4, md: 3 / 4, lg: 3 / 4 }}
                            >
                                <Link _hover={{ textDecoration: 'none', }} w={'100%'} h={'100%'}
                                    justifyContent={'space-between'}
                                >
                                    <Flex direction={'column'}  justify="space-between" w={'100%'} h={'100%'} flex={1}>
                                        <Box backgroundImage={item.img}
                                            backgroundSize='cover'
                                            backgroundPosition="center"
                                            w={'80%'} h={"80%"} m="auto" flex={2}
                                        ></Box>
                                        <Flex flex={1} align="left" direction={'column'} justify="space-evenly">
                                            <Text color={'red.400'} fontWeight="400"
                                            
                                            >{item.catg}</Text>
                                            <Text>{item.title}</Text>
                                            <HStack direction={'row'} spacing={12}>
                                                <Text fontWeight={700}>{item.oldpr}</Text>
                                                <del>{item.price}</del>
                                            </HStack>
                                        </Flex>
                                    </Flex>
                                </Link>
                            </AspectRatio>
                        </GridItem>
                    )
                })}
            </Grid>
        </Box >
    )
}






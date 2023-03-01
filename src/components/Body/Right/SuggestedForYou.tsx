import React from 'react'
import { Box, Link, Flex, Text, Grid, GridItem, HStack, VStack, AspectRatio } from '@chakra-ui/react'
import { suggested } from '@/listdata/suggested'



export default function SuggestedForYou() {
    return (
        <Box w={'100%'} mt={8}>
            <Text fontWeight={600} fontSize={20} pb={2} mb={6}
                borderBottom={'1px solid'} borderColor={'gray.300'}
            >Suggested For You</Text>
            <Grid templateColumns={{ sm: 'repeat(2, 1fr)', md: "repeat(2, 1fr)", lg: 'repeat(3, 1fr)' }} gap={6} >
                {suggested && suggested.map((item) => {
                    return (
                        <GridItem key={item.title}
                            border={'1px solid'}
                            borderColor={'gray.300'}
                            borderRadius={'2xl'}
                            px={2}
                            _hover={{ boxShadow: 'lg' }}
                            role="group"
                        >
                            <AspectRatio
                                ratio={{ sm: 3 / 5, md: 3 / 4, lg: 3 / 4 }}
                                minW={{ sm: "60%", md: '100%' }}
                                maxH={'100%'}
                            >


                                <Link _hover={{ textDecoration: 'none', }} w={'100%'} h={'100%'}
                                    justifyContent={'space-between'}
                                >
                                    <Flex direction={'column'} justify="space-between" w={'100%'} h={'100%'} flex={1}>
                                        <Box backgroundImage={item.img}
                                            backgroundSize='cover'
                                            backgroundPosition="center"
                                            w={'80%'} h={"80%"} m="auto" flex={2}
                                            _groupHover={{bgImage: item.img2, }}
                                        ></Box>
                                        <VStack flex={1} align="left">
                                            <Text color={'red.400'} fontWeight="400">{item.catg}</Text>
                                            <Text>{item.title}</Text>
                                            <HStack direction={'row'} spacing={12}>
                                                <Text fontWeight={700}>{item.oldpr}</Text>
                                                <del>{item.price}</del>
                                            </HStack>
                                        </VStack>
                                    </Flex>
                                </Link>


                            </AspectRatio>
                        </GridItem>
                    )
                })}
            </Grid>
        </Box>
    )
}

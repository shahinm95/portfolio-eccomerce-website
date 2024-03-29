import React, { useState } from 'react'
import { Box, Flex, Link,chakra } from '@chakra-ui/react'
import MainContent from './MainContent'




export default function Right() {
    const [activeTab, setActiveTab] = useState<number>(0)

    return (
        <Box
            flex={1}
            w="80%"
            textAlign={{base:"center", md: "left"}}
            
        >
            <Flex
                fontWeight={600}
                mt={5}
                fontSize={20}
                mb={5}
                
            >
                {categoryArr.map((cat, index) => {
                    return <Link flex={1} maxW="100%" key={cat}
                        borderBottom={'solid 2px'}
                        borderColor={activeTab === index ? "gray.800" : "gray.300"}
                        onClick={() => setActiveTab(index)}
                        _hover={{ textDecoration: "none" }}
                        pb={1} mx={2} position="relative"
                    >{cat}
                        <chakra.span
                            position="absolute"
                            bottom="-2px"
                            left="0"
                            width="0"
                            height="2px"
                            backgroundColor="#212121"
                            transition="width 0.6s ease-in-out, opacity 0.4s ease-in-out"
                            opacity="0"
                            zIndex="10"
                        ></chakra.span>
                    </Link>
                })}
            </Flex>

            <MainContent activeTab={activeTab} />

        </Box>
    )
}



const categoryArr: string[] = ["New Arrivals", 'Trending', "Top Rated"]
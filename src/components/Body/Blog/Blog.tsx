import React from 'react'
import { blogs } from '../../../listdata/blogs'
import { Link, Box, Flex, Text, AspectRatio } from '@chakra-ui/react'

export default function Blog() {
    return (
        <Flex flex={1} mt={10} >
            {blogs.map((blog) => {
                return (
                    <Box key={blog.title} flex={1} mr={5} mb={20} >
                        <Link >
                            <AspectRatio ratio={5 / 3} flex={1} >

                                <Box bgImage={blog.img} bgSize="cover" bgPosition={'center'}
                                    borderRadius={"2xl"}
                                ></Box>

                            </AspectRatio>
                        </Link>
                        <Text color="red.300" fontWeight={500} mt={4}>{blog.cat}</Text>
                        <Link _hover={{color: " red.300"}} fontSize="lg" fontWeight={"600"}>
                        <Text>{blog.title}</Text>
                        </Link>
                        <Box mt={3} color="gray.500">by <cite>{blog.cite}</cite> / <data>{blog.date}</data></Box>
                    </Box>
                )
            })}
        </Flex>
    )
}

import React from 'react'
import { blogs } from '@/listdata/blogs'
import { Link, Box, Flex, Text } from '@chakra-ui/react'

export default function Blog() {
    return (
        <Flex>
            {blogs.map((blog) => {
                return (
                    <Box key={blog.title}>
                        <Box bg={blog.img} bgSize="cover" bgPosition={'center'} ></Box>
                        <Text>{blog.cat}</Text>
                        <Text>{blog.title}</Text>
                       <Box>by <cite>{blog.cite}</cite> / <data>{blog.date}</data></Box>
                    </Box>
                )
            })}
        </Flex>
    )
}

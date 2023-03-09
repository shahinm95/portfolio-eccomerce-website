import React from 'react'
import { Box, Flex, Text, VStack, Link } from '@chakra-ui/react'
import { footerLists } from '@/listdata/footerLists'
export default function Categories() {
  return (
    <Box  borderBottom="1px solid" borderColor="gray.700" color={"gray.300"}>
      <Box py={"40px"} w="80%" mx="auto" >
        <Flex  textAlign="center" direction={{base:"column", md:"row"}} gap={8} >
          {footerLists.map((item) => {
            return <Box key={item.head} flex={1} >
              <Text mb={3} fontSize={'lg'} fontWeight={600} >{item.head}</Text>
              <VStack spacing={2}>{item.sub.map(sub => {
                return <Link key={sub} fontSize="sm" color="gray.400"
                _hover={{color : 'red.300', textDecoration: "none"}}
                >{sub}</Link>
              })}</VStack>
            </Box>
          })}
        </Flex>
      </Box>
    </Box>
  )
}

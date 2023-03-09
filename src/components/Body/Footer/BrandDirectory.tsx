import React from 'react'
import { Link, Box, Flex, HStack, Text } from '@chakra-ui/react'
import { brands } from '@/listdata/brandDirectory'
export default function BrandDirectory() {
  return (
    <Box borderBottom="1px solid" borderColor="gray.700" color={"gray.300"} >
      <Box py={"40px"} w="80%" mx="auto" >
        <Text color="red.300" fontSize={'lg'} fontWeight={600}>
          BRAND DIRECTORY
        </Text>
        {brands.map((brand) => {
          return (
            <Flex key={brand.head} mt={5} wrap={"nowrap"} >
              <Text flex={1} pr={5} alignSelf="baseline" fontWeight={500} fontSize="md" >{brand.head}:</Text>
              <Flex wrap={"wrap"} flex={9} alignSelf="baseline" >{brand.sub.map((sub, index) => {
                return <Text key={sub} mr={2}  >
                  <Link lineHeight={10} mr={2} display="inline-block" fontSize={"sm"}
                    _hover={{ color: 'red.300', textDecoration: "none" }}
                  >{sub}</Link>
                  {index !== brand.sub.length - 1 ? "|" : ""}
                </Text>
              })}</Flex>
            </Flex>
          )
        })}
      </Box>
    </Box>



  )
}

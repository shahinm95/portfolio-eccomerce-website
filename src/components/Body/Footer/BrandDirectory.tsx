import React from 'react'
import { Link, Box, Flex, HStack, Text } from '@chakra-ui/react'
import { brands } from '@/listdata/brandDirectory'
export default function BrandDirectory() {
  return (
    <Box borderBottom="1px solid" borderColor="gray.700" >
      <Box py={20} w="80%" mx="auto" >
        <Text color="red.300" fontSize={'lg'} fontWeight={600}>
          BRAND DIRECTORY
        </Text>
        {brands.map((brand) => {
          return (
            <Flex key={brand.head} mt={5} >
              <Text flex={1} pr={5}>{brand.head}:</Text>
              <Flex flex={9} >{brand.sub.map(sub=>{
                return <Link flex={1} key={sub} display="inline-block" >{sub}</Link>
              })}</Flex>
            </Flex>
          )
        })}
      </Box>
    </Box>



  )
}

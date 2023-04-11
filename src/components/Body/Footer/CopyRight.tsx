import React from 'react'
import { Link, Box, Flex, HStack, Text } from '@chakra-ui/react'

export default function CopyRight() {
  return (
    <Box py={"30px"} mx="auto" w="100%" h="100%" textAlign={'center'}>
      <Box bgImage={"/images/payment.png"} maxW="335px" h="30px"  mx="auto" flex={1} mb={"15px"} bgSize="cover" bgPosition={"center"} ></Box>
      <Text paddingBottom={{base: 10, md:'none'}}>Copyright © DressShop All Rights Reserved.</Text>
    </Box>
  )
}

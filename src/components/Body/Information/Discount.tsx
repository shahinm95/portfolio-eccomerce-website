import React from 'react'
import { Text, Box, Link, Center } from '@chakra-ui/react'

export default function Discount() {
  return (
    <Box flex={2} backgroundImage="/images/cta-banner.jpg" bgPosition={'center'} bgSize="cover"
      position={'relative'} borderRadius="2xl" mx={7} textAlign="center"
    >
      <Center h="100%">
        <Link m="auto" p="40px" bg="hsla(0, 0%, 100%, 0.7)" borderRadius={'2xl'}
          _hover={{ textDecoration: "none" }} maxW={"50%"} maxH="80%" >
          <Text bg="gray.800" color="white" textAlign={'center'} fontWeight={600}
            fontSize={'lg'} borderRadius="md" py="1" mb={2}
          >25% Discount</Text>
          <Text fontWeight={800}
            fontSize={'2xl'} >Summer Collection</Text>
          <Text fontWeight={500}fontSize={'xl'} color="gray.500" my={4} >Starting @ $10</Text>
          <Text fontWeight={700}fontSize={'xl'} color="gray.500">SHOP NOW</Text>
        </Link>
      </Center>
    </Box>
  )
}

import React from 'react'
import { Text, Box, Link, Center, AspectRatio } from '@chakra-ui/react'

export default function Discount() {
  return (
    <AspectRatio flex={{ base: 1, md: 2 }} maxW="100%" maxH={'100%'} ratio={{base:3/5, md:6/3}} m={10} >
      <Box flex={{ base: 1, md: 2 }} backgroundImage="/images/cta-banner.jpg" bgPosition={'center'} bgSize="cover"
        position={'relative'} borderRadius="2xl" mx={{ base: 1, md: 7 }} textAlign="center" my={2} w="100%"
      >
        <Center maxH="100%" w="100%" >
          <Link m="auto" p={{ base: "10px", md: "40px" }} bg="hsla(0, 0%, 100%, 0.7)" borderRadius={'2xl'}
            _hover={{ textDecoration: "none" }} maxW={{ base: "80%", md: "50%" }}  >
            <Text bg="gray.800" color="white" textAlign={'center'} fontWeight={600}
              fontSize={{ base: "sm", md: 'lg' }} borderRadius="md" py="1" mb={2}
            >25% Discount</Text>
            <Text fontWeight={800}
              fontSize={{ base: "sm", md: '2xl' }} >Summer Collection</Text>
            <Text fontWeight={500} fontSize={{ base: "sm", md: 'xl' }} color="gray.500" my={4} >Starting @ $10</Text>
            <Text fontWeight={700} fontSize={{ base: "sm", md: 'xl' }} color="gray.500">SHOP NOW</Text>
          </Link>
        </Center>
      </Box>
    </AspectRatio>
  )
}

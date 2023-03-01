import React from 'react'
import { Text, Box, Link } from '@chakra-ui/react'

export default function Discount() {
  return (
    <Box flex={2} bg="/images/cta-banner.jpg" bgPosition={'center'} bgSize="cover" position={'relative'}>
        <Link m="auto" p="40px" bg="hsla(0, 0%, 100%, 0.7)" >
            <Text>25% Discount</Text>
            <Text>Summer Collection</Text>
            <Text>Starting @ $10</Text>
            <Text>SHOP NOW</Text>
        </Link>
    </Box>
  )
}

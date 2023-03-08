import React from 'react'
import { Box } from '@chakra-ui/react'
import BrandDirectory from './BrandDirectory'
import Categories from './Categories'
import CopyRight from './CopyRight'
export default function Footer() {
  return (
    <Box bg="gray.800" color={'white'}>
        <BrandDirectory />
        <Categories />
        <CopyRight />
    </Box>
  )
}

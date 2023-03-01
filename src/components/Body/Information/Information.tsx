import React from 'react'
import { Flex } from '@chakra-ui/react'
import Testimonial from './Testimonial'
import Discount from './Discount'
import Services from './Services'
export default function Information() {
  return (
    <Flex flex={1} mt={10}>
        <Testimonial/>
        <Discount />
        <Services />
    </Flex>
  )
}

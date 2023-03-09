import React from 'react'
import { Box } from '@chakra-ui/react'
import Category from './Category'
import BestSellers from './BestSellers'
export default function Left() {
  return (
    <Box w={'100%'}
    minHeight="100vh" 
      position="relative"
    >
      <Box top={"30px"} left="0" position="sticky" zIndex="1" visibility="visible"
      overflowY={"auto"} overscrollBehavior="auto"
      >
        <Category />
        <BestSellers />
      </Box>
    </Box>
  )
}




// .sidebar {
//   --fs-5: 0.941rem;

//   position: sticky;
//   top: 30px;
//   left: 0;
//   padding: 0;
//   min-width: calc(25% - 15px);
//   margin-bottom: 30px;
//   visibility: visible;
//   overflow-y: auto;
//   overscroll-behavior: auto;
//   z-index: 0;
// }
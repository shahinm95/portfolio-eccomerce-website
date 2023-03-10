import React, { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import Category from './Category'
import BestSellers from './BestSellers'

export default function Left() {
  const [isSticky, setIsSticky] = useState<boolean>(true)
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 4200){setIsSticky(false)}
    }
    window.addEventListener("scroll", handleScroll)
    console.log(window.scrollY)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isSticky])

  return (
    <Box w={'100%'}
      minHeight="100vh"
      position="relative"
    >
      <Box top={isSticky ? "72px" : "auto"} left="0" position={isSticky ? "sticky" : "static"} zIndex="99" visibility="visible"
        overflowY={"auto"} overscrollBehavior="auto" className="sticky"
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
// import React from 'react'
// import React, { useState, useEffect } from "react";
// import {
//   Link,
//   Box,
//   Drawer,
//   useDisclosure,
//   DrawerBody,
//   DrawerCloseButton,
//   DrawerContent,
//   DrawerHeader,
//   Text,
//   Flex,
//   HStack,
//   Button,
//   Input,
// } from "@chakra-ui/react";
// import { SearchIcon } from "@chakra-ui/icons";
// import { MotherList } from "@/listdata/motherList";
// import NextLink from "next/link";
// import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { addToCart, toggleToLiked } from "@/redux/actions";
// import { RootState } from "@/redux/store";
// import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

// interface Mother {
//     title: string;
//     img: string;
//     oldpr: string;
//     price: string;
//   }

//   interface arguments {
//     matchCount: number;
//     matchingObjs : Mother[];
//   }

// export default function SearchedItems({matchCount, matchingObjs} : arg) {
//   return (
//     <Box>
//               {matchCount>0 &&
//                 matchingObjs.map((item) => {
//                   return (
//                     <Box
//                       key={item.title}
//                       border="1px solid"
//                       borderColor={"gray.200"}
//                       borderRadius="3xl"
//                       p={5}
//                       mb={5}
//                     >
//                       <Flex justify="space-between" align="center">
//                         <Text
//                           onClick={onClose}
//                           as={NextLink}
//                           href={`/${encodeURIComponent(item.title)}`}
//                         >
//                           {item.title}
//                         </Text>
//                         <Box
//                           onClick={onClose}
//                           minW={20}
//                           minH={20}
//                           backgroundImage={item.img}
//                           backgroundSize={"cover"}
//                           backgroundPosition="center"
//                           as={NextLink}
//                           href={`/${encodeURIComponent(item.title)}`}
//                         ></Box>
//                       </Flex>
//                       <Flex justify="space-between" align="center">
//                         <HStack
//                           align={"center"}
//                           fontSize={20}
//                           color={"red.400"}
//                           spacing={5}
//                           py={1}
//                           px={2}
//                           borderColor={"gray.300"}
//                           borderRadius={"xl"}
//                           border={"1px solid"}
//                         >
//                           <Text
//                             cursor={"pointer"}
//                             onClick={() =>
//                               dispatch(
//                                 addToCart(item.title, item.img, item.price, 1)
//                               )
//                             }
//                           >
//                             <AiOutlinePlus />{" "}
//                           </Text>
//                           <Text
//                             fontSize={20}
//                             color="red.300"
//                             cursor={"pointer"}
//                             _hover={{ color: "red.700" }}
//                             onClick={() => {
//                               return dispatch(
//                                 toggleToLiked(item.title, item.img, item.price)
//                               );
//                             }}
//                           >
//                             {LikedOrNotHAndler(item.title)}
//                           </Text>
//                         </HStack>
//                         <Text fontSize={18}>{item.price}</Text>
//                       </Flex>
//                     </Box>
//                   );
//                 })}
//             </Box>
//   )
// }

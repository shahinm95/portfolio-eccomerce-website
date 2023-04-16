import React, {useState} from "react";
import {
  Box,
  Flex,
  Grid,
  Text,
  GridItem,
  AspectRatio,
  Link,
  HStack,
  VStack,
  Icon, Button
} from "@chakra-ui/react";
import { NewArrivals } from "@/listdata/newArrivals";
import { trendings } from "@/listdata/trendings";
import { topRated } from "@/listdata/topRated";
import { MdAddBox } from "react-icons/md";
import { addToCart, toggleToLiked } from "@/redux/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import NextLink from 'next/link';

interface prop {
  activeTab: number;
}

export default function MainContent({ activeTab }: prop) {
  const cartItems = useSelector(
    (state: RootState) => state.cartReducer.cartItems
  );
  const dispatch = useDispatch();

  function itemsToShowFunc(activeTab: number) {
    if (activeTab === 0) {
      return NewArrivals;
    } else if (activeTab === 1) {
      return trendings;
    } else if (activeTab === 2) {
      return topRated;
    }
  }

  const likedItems = useSelector(
    (state:RootState)=> state.likedItemsReducer.cartItems
  )

  const itemsToShow = itemsToShowFunc(activeTab);

  const addToCartHandler = (title: string, img: string, price: string) => {
    dispatch(addToCart(title, img, price, 1));
  };


  const likedItemCheker = (title:string) => {
    const isTrue = likedItems.findIndex((a)=> a.title === title)
    if(isTrue !== -1){ return <AiFillHeart />  } else {return <AiOutlineHeart />}
  }

  return (
    <Box w="100%" fontSize={{ base: "sm", md: "md" }}>
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        {itemsToShow &&
          itemsToShow.map((item, index) => {
            return (
              <GridItem
                key={item.title}
                border={"1px solid"}
                borderColor={"gray.300"}
                borderRadius={"2xl"}
                px={2}
                _hover={{ boxShadow: "lg" }}
              >
                <AspectRatio ratio={{ base: 2 / 4, md: 3 / 4, lg: 3 / 4 }}>
                  <Box
                    w={"100%"}
                    h={"100%"}
                    justifyContent={"space-between"}
                  >
                    <Flex
                      direction={"column"}
                      justify="space-between"
                      w={"100%"}
                      h={"100%"}
                      flex={1}
                    >
                      <Link
                        backgroundImage={item.img}
                        as={NextLink} href={`/${encodeURIComponent(item.title)}`} 
                        backgroundSize="cover"
                        backgroundPosition="center"
                        w={"80%"}
                        h={"80%"}
                        m="auto"
                        flex={2}
                      ></Link>
                      <Flex
                        flex={1}
                        align="left"
                        direction={"column"}
                        justify="space-evenly"
                      >
                        <Box>
                          <Flex direction={"row"} justify={'space-between'} align="center">
                            <Text color={"red.400"} fontWeight="400">
                              {item.catg}
                            </Text>
                            <Text fontSize={20} color={'red.300'} cursor={'pointer'} _hover={{color:"red.700"}}
                            onClick={()=>{
                              return dispatch(toggleToLiked(item.title, item.img, item.price))
                            }}
                            >
                              {likedItemCheker(itemsToShow[index].title)}
                            </Text>
                          </Flex>
                        </Box>
                        <Link as={NextLink} href={`/${encodeURIComponent(item.title)}`} >{item.title}</Link>
                        <Flex justify={"space-between"}>
                          <Text fontWeight={700}>{item.price}</Text>
                          <del>{item.oldpr}</del>
                          <Box
                            onClick={() => {
                              addToCartHandler(
                                item.title,
                                item.img,
                                item.price
                              );
                            }}
                            
                          >
                            <Icon
                              as={MdAddBox}
                              color="red"
                              backgroundColor={"white"}
                              fontSize={25}
                              _hover={{ color: "red.700", }}
                              cursor={'pointer'}
                            ></Icon>
                          </Box>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Box>
                </AspectRatio>
              </GridItem>
            );
          })}
      </Grid>
    </Box>
  );
}

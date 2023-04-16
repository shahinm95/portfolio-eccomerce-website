import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
  HStack,
  Button,
  Icon,
} from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toggleToLiked } from "@/redux/actions";
import NextLink from 'next/link';

export default function LikedWindow() {
  const faveItems = useSelector(
    (state: RootState) => state.likedItemsReducer.cartItems
  );
  const likedQuantity = useSelector((state: RootState): number => {
    let likedCount: number = 0;
    state.likedItemsReducer.cartItems.map((item) => (likedCount += 1));
    return likedCount;
  });

  const dispatch = useDispatch();

  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Box
          cursor={"pointer"}
          display="inline-block"
          fontFamily="Avenir Next"
          fontSize="20px"
          fontWeight="500"
          letterSpacing="1.4px"
          line-height="14px"
          padding="7.5px 12px"
          position={"relative"}
        >
          <Flex alignItems="center">
            <Icon
              as={AiOutlineHeart}
              position="relative"
              fontSize={24}
              top={-1}
              right={-2}
            />
            {likedQuantity > 0 && (
              <Text
                color="white"
                position="absolute"
                top={5}
                right={0}
                fontWeight={800}
                zIndex={3}
                fontSize={15}
                bgColor={"gray.500"}
                px={"5px"}
              >
                {likedQuantity}
              </Text>
            )}
          </Flex>
        </Box>
      </PopoverTrigger>
      {likedQuantity > 0 && (
        <PopoverContent
          p={4}
          rounded={"xl"}
          minW={"sm"}
          textAlign="left"
          shadow={"md"}
        >
          <Text pb={5}>{likedQuantity} Items</Text>
          <Box maxH={"md"} overflowY={"auto"}>
            {faveItems.map((item, index) => {
              return (
                <Box
                  key={item.title}
                  border="1px solid"
                  borderColor={"gray.200"}
                  borderRadius="3xl"
                  p={5}
                  mb={5}
                >
                  <Flex justify="space-between" align="center">
                    <Text as={NextLink} href={`/${encodeURIComponent(item.title)}`}>{item.title}</Text>
                    <Box
                      minW={20}
                      minH={20}
                      backgroundImage={item.img}
                      backgroundSize={"cover"}
                      backgroundPosition="center"
                      as={NextLink} href={`/${encodeURIComponent(item.title)}`}
                    ></Box>
                  </Flex>
                  <Flex justify="space-between" align="center">
                    <HStack
                      align={"center"}
                      fontSize={20}
                      color={"red.400"}
                      spacing={5}
                      py={1}
                      px={2}
                      borderColor={"gray.300"}
                      borderRadius={"xl"}
                      border={"1px solid"}
                    >
                      <Text cursor={"pointer"}>
                        <RiDeleteBin6Line
                          onClick={() =>
                            dispatch(
                              toggleToLiked(item.title, item.img, item.price)
                            )
                          }
                        />
                      </Text>
                    </HStack>
                    <Text fontSize={18}>{item.price}</Text>
                  </Flex>
                </Box>
              );
            })}
          </Box>
        </PopoverContent>
      )}
    </Popover>
  );
}

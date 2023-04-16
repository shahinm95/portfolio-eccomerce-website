import React from "react";
import {
  Link,
  Box,
  Drawer,
  useDisclosure,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Text,
  Flex,
  HStack,
  Button,
} from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleToLiked } from "@/redux/actions";
import { RootState } from "@/redux/store";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function LikeMobile() {
  const { onToggle, isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const faveItems = useSelector(
    (state: RootState) => state.likedItemsReducer.cartItems
  );
  const likedQuantity = useSelector((state: RootState) => {
    let likedCount: number = 0;
    state.likedItemsReducer.cartItems.map((item) => (likedCount += 1));
    return likedCount;
  });


  return (
    <Box>
      <Link fontSize={28} onClick={onToggle} position="relative">
        <AiOutlineHeart />
        {likedQuantity > 0 && (
          <Text
            color="white"
            position="absolute"
            top={4}
            right={0}
            fontWeight={500}
            zIndex={3}
            fontSize={12}
            bgColor={"gray.500"}
            px={"5px"}
          >
            {likedQuantity}
          </Text>
        )}
      </Link>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="full" >
        <DrawerContent>
          <DrawerCloseButton></DrawerCloseButton>
          <DrawerHeader borderBottom={"1px solid"} borderBottomColor="gray.300">
          Favourite Items
          </DrawerHeader>
          <DrawerBody>
            <Text pb={5}>{likedQuantity} Items</Text>
            <Box h={"87%"} overflowY={"auto"}>
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
                      <Text>{item.title}</Text>
                      <Box
                        minW={20}
                        minH={20}
                        backgroundImage={item.img}
                        backgroundSize={"cover"}
                        backgroundPosition="center"
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
                                dispatch(toggleToLiked(item.title, item.img, item.price))
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
            
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

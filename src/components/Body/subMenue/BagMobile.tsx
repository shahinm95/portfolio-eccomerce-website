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
import { IoBagOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCartAction } from "@/redux/actions";
import { RootState } from "@/redux/store";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function BagMobile() {
  const { onToggle, isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state: RootState) => state.cartReducer.cartItems
  );
  const CartQuantity = useSelector((state: RootState) => {
    let cartCount: number = 0;
    state.cartReducer.cartItems.map((item) => (cartCount += item.quantity));
    return cartCount;
  });

  const checkouPrice = useSelector((state: RootState) => {
    let totalPrice: number = 0;
    state.cartReducer.cartItems.map((item) => {
      let stringPrice: string = item.price.replace(/[^\d|,|.|e|E|\+]/g, "");
      let price: number = +stringPrice;
      totalPrice = totalPrice + price * item.quantity;
    });
    return totalPrice;
  });

  return (
    <Box>
      <Link fontSize={28} onClick={onToggle} position="relative">
        <IoBagOutline />
        {CartQuantity > 0 && (
          <Text
            color="white"
            position="absolute"
            top={4}
            right={0}
            fontWeight={500}
            zIndex={3}
            fontSize={12}
            bgColor={"red.300"}
            px={"5px"}
          >
            {CartQuantity}
          </Text>
        )}
      </Link>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="full" >
        <DrawerContent>
          <DrawerCloseButton></DrawerCloseButton>
          <DrawerHeader borderBottom={"1px solid"} borderBottomColor="gray.300">
            Cart Items
          </DrawerHeader>
          <DrawerBody>
          <Flex justify="space-between" align="center" pb={5}>
            <Text>{CartQuantity} Items</Text>
            <Link color="red.500">See Cart Items </Link>
          </Flex>
            <Box h={"87%"} overflowY={"auto"}>
              {cartItems.map((item, index) => {
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
                          {item.quantity === 1 ? (
                            <RiDeleteBin6Line
                              onClick={() =>
                                dispatch(removeFromCartAction(item.title))
                              }
                            />
                          ) : (
                            <AiOutlineMinus
                              onClick={() =>
                                dispatch(removeFromCartAction(item.title))
                              }
                            />
                          )}
                        </Text>
                        <Text>{item.quantity}</Text>
                        <Text
                          cursor={"pointer"}
                          onClick={() =>
                            dispatch(
                              addToCart(item.title, item.img, item.price, 1)
                            )
                          }
                        >
                          <AiOutlinePlus />{" "}
                        </Text>
                      </HStack>
                      <Text fontSize={18}>{item.price}</Text>
                    </Flex>
                  </Box>
                );
              })}
            </Box>
            <Flex
              align={"center"}
              pt={2}
              borderTop={"1px solid"}
              borderTopColor="gray.300"
            >
              <Text flex={1} fontSize={15} fontWeight={700}>
                Total Price : ${checkouPrice}.00
              </Text>
              <Button
                bgColor={"red.400"}
                _hover={{ bgColor: "red.800" }}
                color="white"
                flex={1}
              >
                Check out the cart
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

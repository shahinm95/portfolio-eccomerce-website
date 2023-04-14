import React from "react";
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
  Icon,
} from "@chakra-ui/react";
import { NewArrivals } from "@/listdata/newArrivals";
import { trendings } from "@/listdata/trendings";
import { topRated } from "@/listdata/topRated";
import { MdAddBox } from "react-icons/md";
import { addToCart } from "@/redux/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";


interface prop {
  activeTab: number;
}

export default function MainContent({ activeTab }: prop) {
const cartItems = useSelector((state:RootState)=> state.cartReducer.cartItems)
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
  const itemsToShow = itemsToShowFunc(activeTab);

  const addToCartHandler = (title:string, img:string, price:string, quantity:number)=>{
    dispatch(addToCart(title, img, price, quantity ))
    console.log(cartItems);
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
          itemsToShow.map((item) => {
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
                  <Link
                    _hover={{ textDecoration: "none" }}
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
                      <Box
                        backgroundImage={item.img}
                        backgroundSize="cover"
                        backgroundPosition="center"
                        w={"80%"}
                        h={"80%"}
                        m="auto"
                        flex={2}
                      ></Box>
                      <Flex
                        flex={1}
                        align="left"
                        direction={"column"}
                        justify="space-evenly"
                      >
                        <Text color={"red.400"} fontWeight="400">
                          {item.catg}
                        </Text>
                        <Text>{item.title}</Text>
                        <Flex justify={"space-between"}>
                          <Text fontWeight={700}>{item.price}</Text>
                          <del>{item.oldpr}</del>
                          <Link onClick={()=>{
                            addToCartHandler(item.title, item.img, item.price, 1)
                          }}>
                            <Icon
                              as={MdAddBox}
                              color="red"
                              backgroundColor={"white"}
                              fontSize={25}
                              _hover={{color: "red.200", scale: 2}}
                            ></Icon>
                          </Link>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Link>
                </AspectRatio>
              </GridItem>
            );
          })}
      </Grid>
    </Box>
  );
}

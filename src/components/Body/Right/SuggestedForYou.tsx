import React from "react";
import {
  Box,
  Link,
  Flex,
  Text,
  Grid,
  GridItem,
  HStack,
  VStack,
  Icon,
  AspectRatio,
} from "@chakra-ui/react";
import { suggested } from "@/listdata/suggested";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdAddBox } from "react-icons/md";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart, toggleToLiked } from "@/redux/actions";
import { RootState } from "@/redux/store";

export default function SuggestedForYou() {
  const linkedItems = useSelector(
    (state: RootState) => state.likedItemsReducer.cartItems
  );
  const addedToCartItems = useSelector(
    (state: RootState) => state.cartReducer.cartItems
  );
  const dispatch = useDispatch();

  const LikedOrNotHAndler = (title: string) => {
    const indexFinder = linkedItems.findIndex((item) => item.title === title);
    if (indexFinder !== -1) {
      return <AiFillHeart />;
    } else {
      return <AiOutlineHeart />;
    }
  };

  return (
    <Box w={"100%"} mt={8}>
      <Text
        fontWeight={600}
        fontSize={20}
        pb={2}
        mb={6}
        borderBottom={"1px solid"}
        borderColor={"gray.300"}
      >
        Suggested For You
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={6}
      >
        {suggested &&
          suggested.map((item) => {
            return (
              <GridItem
                key={item.title}
                border={"1px solid"}
                borderColor={"gray.300"}
                borderRadius={"2xl"}
                px={2}
                _hover={{ boxShadow: "lg" }}
                role="group"
              >
                <AspectRatio
                  ratio={{ base: 3 / 6, md: 3 / 4, lg: 3 / 4 }}
                  minW={{ base: "60%", md: "100%" }}
                  maxH={"100%"}
                >
                  <Box w={"100%"} h={"100%"} justifyContent={"space-between"}>
                    <Flex
                      direction={"column"}
                      justify="space-between"
                      w={"100%"}
                      h={"100%"}
                      flex={1}
                    >
                      <Link
                        backgroundImage={item.img}
                        backgroundSize="cover"
                        backgroundPosition="center"
                        w={"80%"}
                        h={"80%"}
                        m="auto"
                        flex={2}
                        _groupHover={{ bgImage: item.img2 }}
                      ></Link>
                      <Flex
                        flex={1}
                        align="left"
                        direction={"column"}
                        justify="space-evenly"
                      >
                        <Flex justify={"space-between"} align="center">
                          <Text color={"red.400"} fontWeight="400">
                            {item.catg}
                          </Text>
                          <Text
                            fontSize={20}
                            color="red.300"
                            cursor={"pointer"}
                            _hover={{ color: "red.700" }}
                            onClick={() => {
                              return dispatch(
                                toggleToLiked(item.title, item.img, item.price)
                              );
                            }}
                          >
                            {LikedOrNotHAndler(item.title)}
                          </Text>
                        </Flex>
                        <Link>{item.title}</Link>
                        <Flex
                          direction={"row"}
                          justify="space-between"
                          align="center"
                        >
                          <Text fontWeight={700}>{item.price}</Text>
                          <del>{item.oldpr}</del>
                          <Box>
                            <Icon
                              as={MdAddBox}
                              fontSize={25}
                              color={"red"}
                              cursor={"pointer"}
                              bgColor={"white"}
                              _hover={{ color: "red.700" }}
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

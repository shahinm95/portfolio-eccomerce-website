import React from "react";
import { Box, Text, Flex, Link, AspectRatio, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/actions";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { toggleToLiked } from "@/redux/actions";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

interface Product {
  title: string;
  img: string;
  oldpr: string;
  price: string;
}

interface ProductPageProps {
  product: Product;
}
export default function ProductPageComponent({ product }: ProductPageProps) {
  const dispatch = useDispatch();
  const linkedItems = useSelector(
    (state: RootState) => state.likedItemsReducer.cartItems
  );

  const LikedOrNotHAndler = (title: string) => {
    const indexFinder = linkedItems.findIndex((item) => item.title === title);
    if (indexFinder !== -1) {
      return <AiFillHeart />;
    } else {
      return <AiOutlineHeart />;
    }
  };

  return (
    <Box mx="auto">
      <Flex
        key={product.title}
        direction={{ base: "column", md: "row" }}
        mt={{ base: "100px", md: "150px" }}
        minW="80%"
        maxW={"80%"}
        mx="auto"
        p={{ base: 1, md: 5 }}
        border={"1px solid"}
        borderColor="gray.300"
        borderRadius={"2xl"}
        mb={10}
      >
        <Link flex={1} justifyContent="center" alignContent={"center"}>
          <AspectRatio ratio={{ base: 3 / 3, md: 3 / 3 }} mx="auto">
            <Box
              mx="auto"
              bgImg={product.img}
              flex={1}
              w="100%"
              maxH="80%"
              maxW={"80%"}
              backgroundPosition="center"
              backgroundSize={"cover"}
            ></Box>
          </AspectRatio>
        </Link>
        <Flex
          direction={"column"}
          flex={1}
          justifyContent="space-evenly"
          px={{ base: "5" }}
        >
          <Link
            fontWeight={700}
            fontSize={{ base: "sm", md: 20 }}
            mt={{ base: 0, md: 20 }}
          >
            {product.title}
          </Link>
          <Text my={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            doloremque sequi inventore, quo, maxime fuga veritatis ab fugiat
            possimus, iste adipisci vel aspernatur ullam totam consequuntur
            voluptatibus saepe maiores. Eius.
          </Text>
          <Flex gap={5} fontSize={{ base: "sm", md: 20 }} align={'center'}>
            <Text fontWeight={700} color="red.400" mb={2}>
              {product.price}
            </Text>
            <Text my={'auto'}>
              <del>{product.oldpr}</del>
            </Text>
            <Link
            ml={5}
            fontSize={30}
            color="red.300"
            cursor={"pointer"}
            _hover={{ color: "red.700" }}
              onClick={() => {
                return dispatch(
                  toggleToLiked(product.title, product.img, product.price)
                );
              }}
            >
              {LikedOrNotHAndler(product.title)}
            </Link>
          </Flex>
          <Button
            bg={"red.300"}
            color="white"
            _hover={{ bg: "red.400" }}
            mx={{ base: "auto", md: "0" }}
            maxW={{ base: "100%", md: "50%" }}
            fontSize={{ base: "sm", md: "md" }}
            my={{ base: "5", md: 0 }}
            onClick={() =>
              dispatch(addToCart(product.title, product.img, product.price, 1))
            }
          >
            ADD TO CART
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

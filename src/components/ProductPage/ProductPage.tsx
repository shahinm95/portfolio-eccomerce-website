import React from "react";
import { Box, Text, Flex, Link, AspectRatio, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/actions";

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
  return (
    <Box>
      <Flex
        key={product.title}
        minW="100%"
        mt={{ base: 5, md: 5 }}
        p={{ base: 1, md: 5 }}
        border={"1px solid"}
        borderColor="gray.300"
        borderRadius={"2xl"}
      >
        <Link flex={1} justifyContent="center" alignContent={"center"}>
          <AspectRatio ratio={{ base: 3 / 5, md: 3 / 3 }}>
            <Box
              bgImg={product.img}
              flex={1}
              w="100%"
              maxH="100%"
              backgroundPosition="center"
              backgroundSize={"cover"}
            ></Box>
          </AspectRatio>
        </Link>
        <Flex direction={"column"} flex={1} justifyContent="space-between">
          <Link fontWeight={700} fontSize={{ base: "sm", md: 20 }} mt={5}>
            {product.title}
          </Link>
          <Text mt={-5} display={{ base: "none", md: "block" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            doloremque sequi inventore, quo, maxime fuga veritatis ab fugiat
            possimus, iste adipisci vel aspernatur ullam totam consequuntur
            voluptatibus saepe maiores. Eius.
          </Text>
          <Flex gap={5} fontSize={{ base: "sm", md: 20 }}>
            <Text fontWeight={700} color="red.400">
              {product.price}
            </Text>
            <Text>
              <del>{product.oldpr}</del>
            </Text>
          </Flex>
          <Button
            bg={"red.300"}
            color="white"
            _hover={{ bg: "red.400" }}
            mx={{ base: "auto", md: "0" }}
            maxW={{ base: "100px", md: "50%" }}
            fontSize={{ base: "sm", md: "md" }}
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

import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Link,
  Text,
  Stack,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { SlUser } from "react-icons/sl";
import { IoBagOutline } from "react-icons/io5";
import HeaderSub from "./HeaderSub";
import Cart from "./Cart";
import LikedWindow from "./LikedWindow";

export default function Header() {

  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const updateScrollPosition = (): void => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updateScrollPosition);
    updateScrollPosition();
    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

  return (
    <Box
      backgroundColor="#ffffff"
      boxShadow={"#000000 0px 0px 1px 0px"}
      color="#212121"
      fontFamily="Karla"
      fontSize="14px"
      lineHeight="19.6px"
      padding={"20px 0px"}
      minH={"60px"}
      borderBottom="none"
      position={"fixed"}
      flex={1}
      w={"100%"}
      zIndex={500}
      top={scrollPosition > 20 ? 0 : ""}
    >
      <Box
        color="#212121"
        fontSize="14px"
        lineHeight="19.6px"
        padding="0px 40px"
        // maxH={"800px"}
        // top={0}
      >
        <Flex
          alignItems="center"
          color="#212121"
          display="flex"
          fontSize="14px"
          justifyContent="space-between"
          lineHeight="19.6px"
        >
          <Box flex-basis="130px">
            <Link
              display="inline-block"
              fontFamily="Avenir Next"
              fontSize="20px"
              fontWeight="500"
              letterSpacing="1.4px"
              line-height="14px"
              padding="7.5px 12px"
            >
              <SearchIcon fill="#212121" />
            </Link>
          </Box>
          <Box
            align-items="center"
            color="#212121"
            display="flex"
            flexBasis="160px"
            fontSize="14px"
            lineHeight="19.6px"
            margin="0px 30px"
            flex={1}
          >
            <Text
              color="#212121"
              fontSize="32px"
              lineHeight="42px"
              mx="auto"
              textAlign={{ base: "left", md: "center" }}
            >
              Dress Shop
            </Text>
          </Box>
          <Flex display={{ base: "none", md: "block" }} direction={"row"}>
            <Text
              cursor={"pointer"}
              display="inline-block"
              fontFamily="Avenir Next"
              fontSize="20px"
              fontWeight="500"
              letterSpacing="1.4px"
              line-height="14px"
              padding="7.5px 12px"
            >
              <SlUser />
            </Text>
            <Cart />
            <LikedWindow />
          </Flex>
        </Flex>
      </Box>
      <Box
        display={{ base: "none", md: "flex" }}
        justifyContent={"center"}
        pt={4}
      >
        <HeaderSub />
      </Box>
    </Box>
  );
}

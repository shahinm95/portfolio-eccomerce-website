import React, { useState, useEffect } from "react";
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
  Input,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { MotherList } from "@/listdata/motherList";
import NextLink from "next/link";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart, toggleToLiked } from "@/redux/actions";
import { RootState } from "@/redux/store";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Mother {
  title: string;
  img: string;
  oldpr: string;
  price: string;
}

export default function Search() {
  const [searchWord, setSearchWord] = useState<string>("");
  const [matchingObjs, setMatchingObjs] = useState<Mother[]>([]);
  const [matchCount, setMatchCount] = useState(0);

  const filterList = (list: Mother[], searchWord: string): Mother[] => {
    if (searchWord.length > 0) {
      return list.filter(
        (obj) =>
          obj.title.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1
      );
    } else {
      return [];
    }
  };

  // Debounce logic to wait for user to stop typing before actually filtering the list
  const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return function (this: any, ...args: any) {
      const context = this;
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  };

  useEffect(() => {
    const filterListDebounced = debounce(() => {
      const filteredObjs = filterList(MotherList, searchWord);
      setMatchingObjs(filteredObjs);
      setMatchCount(filteredObjs.length);
    }, 500);
    filterListDebounced();
    return () => {
      setMatchingObjs([]);
      setMatchCount(0);
    };
  }, [searchWord]);

  const { onClose, onOpen, isOpen, onToggle } = useDisclosure();
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

  const foundSearchItems =
    matchCount > 0 &&
    matchingObjs.map((item) => {
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
            <Text
              onClick={onClose}
              as={NextLink}
              href={`/${encodeURIComponent(item.title)}`}
            >
              {item.title}
            </Text>
            <Box
              onClick={onClose}
              minW={20}
              minH={20}
              backgroundImage={item.img}
              backgroundSize={"cover"}
              backgroundPosition="center"
              as={NextLink}
              href={`/${encodeURIComponent(item.title)}`}
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
              <Text
                cursor={"pointer"}
                onClick={() =>
                  dispatch(addToCart(item.title, item.img, item.price, 1))
                }
              >
                <AiOutlinePlus />{" "}
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
            </HStack>
            <Text fontSize={18}>{item.price}</Text>
          </Flex>
        </Box>
      );
    });

  return (
    <Box>
      <Text onClick={onOpen}>
        <SearchIcon fill="#212121" />
      </Text>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        size={{ base: "full", md: "md" }}
      >
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottom={"1px solid"} borderBottomColor="gray.300">
            Search For Items
          </DrawerHeader>
          <Input
            type="text"
            placeholder="Enter product name"
            value={searchWord}
            onChange={(e) => {
              setSearchWord(e.target.value);
            }}
          ></Input>
          <Text
              borderBottom={"1px solid"}
              borderBottomColor="gray.300"
              my={2}
              textAlign={'center'}
            >
              {matchCount} Items Found
            </Text>
          <DrawerBody>
            
            <Box>{foundSearchItems}</Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

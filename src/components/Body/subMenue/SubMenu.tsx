import React from "react";
import {
  Box,
  Flex,
  Link,
  Text,
  useDisclosure,
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  DrawerHeader,
} from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlineHome, AiOutlineHeart } from "react-icons/ai";
import { BsGrid } from "react-icons/bs";
import SideMenu from "./SideMenu";
import Icon from "@chakra-ui/icon";
import BagMobile from "./BagMobile";
import LikeMobile from "./LikeMobile";


export default function SubMenu() {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  return (
    <Box
      w={"100%"}
      display={{ base: "flex", md: "none" }}
      flex={1}
      position="fixed"
      bottom={0}
      height={50}
      bgColor="white"
      paddingX={10}
      borderTop={"1px solid"}
      borderColor="gray.300"
      zIndex={2}
      justifyContent="space-between"
      alignItems="center"
      color="gray.700"
    >
      <Link href="#" fontSize={28} onClick={onToggle}>
        <AiOutlineMenu />
      </Link>
      <BagMobile />
      <Link fontSize={28}>
        <AiOutlineHome />
      </Link>
      <LikeMobile />
      <Link fontSize={28}>
        <BsGrid />
      </Link>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="full">
        <DrawerContent>
          <DrawerCloseButton></DrawerCloseButton>
          <DrawerHeader borderBottom={"1px solid"} borderBottomColor="gray.300">
            Menu
          </DrawerHeader>
          <DrawerBody>
            <SideMenu onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

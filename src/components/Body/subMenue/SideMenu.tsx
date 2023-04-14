import React, { useState } from "react";
import { Box, Flex, Text, Collapse, Link } from "@chakra-ui/react";
import { NAV_ITEMS } from "./../../header/items";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

interface SideMenuProps {
  onClose: () => void;
}

export default function SideMenu({ onClose }: SideMenuProps) {
  const [isOpen, setIsOpen] = useState(new Array(NAV_ITEMS.length).fill(false));

  const toggleCategory = (index: number) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <Flex direction={"column"}>
        <Link _hover={{textDecoration: "none"}} fontSize={17} fontWeight={700} mt={8} >Home</Link>
      {NAV_ITEMS.map((item, index) => {
        return (
          <Flex direction={"column"} key={item.label}>
            <Link  onClick={() => toggleCategory(index)} _hover={{textDecoration: "none"}}>
              <Flex justify={"space-between"} align="center" 
              borderBottom={ item.children && isOpen[index]? '1px solid' : 'none'} 
              borderBottomColor="gray.300" fontSize={17} fontWeight={700} mt={8}
              >
                <Text>{item.label}</Text>
                {item.children && !isOpen[index] && <AiOutlinePlus /> }
                {item.children && isOpen[index] && <AiOutlineMinus /> }

              </Flex>
            </Link>
            <Collapse in={isOpen[index]} animateOpacity>
                    {item.children?.map((child, index)=> {return (
                        <Link display={'block'} _hover={{textDecoration: "none"}} mt={4} key={child.label} href={child.href}>
                            {child.label}
                        </Link>
                    )})}
            </Collapse>
          </Flex>
        );
      })}
    </Flex>
  );
}

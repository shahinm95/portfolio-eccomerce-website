import React, {useState} from 'react'
import { category } from '@/listdata/category'
import { Box, Collapse, Flex, Link, Text,  } from '@chakra-ui/react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
export default function Category() {
    const [isOpen, setIsOpen] = useState(new Array(category.length).fill(false))

    const toggleCategory = (index: number)=> {
        const newIsOpen = [...isOpen];
        newIsOpen[index] = !newIsOpen[index];
        setIsOpen(newIsOpen)
    }

    return (
        <Box w={'100%'} border="1px solid" borderColor={'gray.300'} borderRadius="2xl" p={4}  >
            <Text mb={5} fontSize={17} fontWeight={700} mt={3}>CATEGORY</Text>
            {category.map((head, index) => {
                return <Flex direction={'column'} key={head.head}>
                    <Link onClick={()=> toggleCategory(index)} _hover={{ textDecoration: "none" }}
                         borderBottom={isOpen[index] ? "1px solid" : "none"}
                        borderBottomColor="gray.300" fontWeight={500} fontSize={16} my={2}
                    >
                        <Flex justify={'space-between'} align="center">

                            {head.head}

                            {!isOpen[index] && <AiOutlinePlus />}
                            {isOpen[index] && <AiOutlineMinus />}
                        </Flex>
                    </Link>

                    <Collapse in={isOpen[index]} animateOpacity >
                        {head.sub.map((sub) => {
                            return <Link key={sub.title} _hover={{ textDecoration: "none" }}>
                                <Flex flex={1} justify="space-between">
                                    <Text>{sub.title}</Text>
                                    <Text>{sub.number}</Text>
                                </Flex>
                            </Link>
                        })}
                    </Collapse>
                </Flex>
            })}
        </Box>
    )
}

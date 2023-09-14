import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import logo from "assets/logo_white.png";
import { Link } from "react-router-dom";

const data = [
    {
        "section": "Navigation",
        "links": [
            {
                "name": "Home",
                "url": "/home"
            },
            {
                "name": "About",
                "url": ""
            },
            {
                "name": "Menu",
                "url": ""
            },
            {
                "name": "Booking",
                "url": "/booking"
            },
            {
                "name": "Order Online",
                "url": ""
            }
        ]
    },
    {
        "section": "Contact Us",
        "links": [
            {
                "name": "Address",
                "url": ""
            },
            {
                "name": "Email",
                "url": ""
            },
            {
                "name": "Phone",
                "url": ""
            }
        ]
    }
];

const Footer = () => {
    return (
        <Box as="footer" py={{ base: '16' }} px="16px" bg="primary.green" >
            <Box maxW="4xl" margin="0 auto">
                <Flex justifyContent="space-between">
                    <Image src={logo} height="160px" />
                    {
                        data.map((item) => {
                            return (
                                <Box color="highlight.white" key={item.section}>
                                    <VStack alignItems="start" gap="3px">
                                        <Text fontSize="md" fontWeight="700">{item.section}</Text>
                                        {
                                            item.links.map((link, i) => {
                                                return link.url === "" ?
                                                    <Text key={link.name + i} fontSize="md" >{link.name}</Text>
                                                    : <Link key={link.name + i} to={link.url} fontSize="md">{link.name}</Link>
                                            })
                                        }
                                    </VStack>
                                </Box>
                            )
                        })
                    }
                </Flex>
                <Flex justifyContent="flex-end">
                    <Text color="primary.yellow" fontSize="sm" fontWeight="300">
                        Copyright © 2023 Little Lemon
                    </Text>
                </Flex>
            </Box>
        </Box>
    )
}
export default Footer;
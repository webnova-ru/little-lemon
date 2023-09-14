import { Box, Button, Card, CardBody, CardFooter, Flex, Heading, Image, Text, useMediaQuery } from "@chakra-ui/react";

const data = [
    {
        "key": "1",
        "name": "Greek Salad",
        "price": "12.99",
        "description": "The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        "picture": "/assets/greek-salad.jpg"
    },
    {
        "key": "2",
        "name": "Bruschetta",
        "price": "6.99",
        "description": "Our Bruschetta is made from grilled bread that has been spread with garlic and seasoned with salt and olive oil.",
        "picture": "/assets/bruchetta.svg"
    },
    {
        "key": "3",
        "name": "Lemon Dessert",
        "price": "5.29",
        "description": "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        "picture": "/assets/lemon-dessert.jpg"
    }
];

const Highlight = () => {
    const isNonMobile = useMediaQuery("(min-width: 992px)");

    return (
        <Box as="section" py={{ base: '16' }} px="16px">
            <Box maxW="4xl" margin="0 auto">
                <Box my={{ base: '0', lg: '30px' }}>
                    <Flex justifyContent="space-between">
                        <Heading variant="primary" color="primary.green">This week special!</Heading>
                        <Button variant="primary">Online Menu</Button>
                    </Flex>
                </Box>
                <Box my="40px">
                    <Box justifyContent="space-between" justifyItems={'center'} display={isNonMobile[0] ? 'flex' : 'grid'} gap="30px">
                        {
                            data.map((item) => {
                                return (
                                    <Card maxW={{ base: "100%", md: "60%", lg: "270px" }} key={item.key}>
                                        <Image src={item.picture} height="270px" fit="cover" borderRadius="5px 5px 0 0" boxShadow='xl' />
                                        <CardBody bg="primary.bg">
                                            <Box>
                                                <Flex justifyContent="space-between" alignItems="center" my="16px">
                                                    <Heading size="lg" variant="primary">{item.name}</Heading>
                                                    <Heading size="sm" color="primary.yellow">${item.price}</Heading>
                                                </Flex>
                                                <Text fontSize="md" color="primary.green">{item.description}</Text>
                                            </Box>
                                        </CardBody>
                                        <CardFooter bg="primary.bg">
                                            <Button variant="primaryOutline" width="100%" color="primary.green">Order a delivery</Button>
                                        </CardFooter>
                                    </Card>
                                )
                            })
                        }
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default Highlight;
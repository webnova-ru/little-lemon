import { Box, Flex, Heading, Image, Text, useMediaQuery } from "@chakra-ui/react";
import BookingForm from "components/BookingForm";

const Booking = () => {
    const isNonMobile = useMediaQuery(["(min-width: 992px)", "(min-width: 768px)", "(min-width: 500px)"]);

    return (
        <Box pb="30px">
            <Box as="section" py={{ base: '10', lg: '10' }} px="16px" bg="primary.green" >
                <Flex maxW="4xl" margin="0 auto" justifyContent="space-between">
                    <Box>
                        <Heading variant="primary" color="primary.yellow" size="2xl">Booking</Heading>
                        <Heading variant="primary" color="highlight.white" size="lg" pb="10px"></Heading>
                        <Text color="highlight.white" width={{ base: '20ch', sm: '25ch', md: '30ch' }} pb="10px" fontSize={{ base: '0.9rem', md: '1.3rem' }}>
                            To ensure your seating, kindly arrive promptly for your reservation.
                        </Text>
                    </Box>
                    <Image
                        fit="cover"
                        boxSize={isNonMobile[2] ? "500px" : "200px"}
                        src="./assets/restaurant.jpg"
                        alt='restauranfood'
                        height={isNonMobile[1] ? "200px" : isNonMobile[2] ? "140px" : "150px"}
                        rounded="16px"
                        boxShadow="lg"
                    />
                </Flex>
            </Box>
            <Flex as="section" py={{ base: '10', lg: '10' }} px="16px" alignContent={"center"} justifyContent={"center"}>
                <BookingForm />
            </Flex>
        </Box>
    );
};

export default Booking;
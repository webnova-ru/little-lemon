import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "assets/Logo.svg"
import Navbar from "components/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Box as="header" pb={{ base: '12' }} py={{ base: '4' }} px="16px">
            <Box as="nav" maxW="4xl" margin="0 auto">
                <HStack spacing="10" justify="space-between" maxW="6xl">
                    <Link to={"/"}>
                        <Image src={logo} width="170px" />
                    </Link>
                    <Navbar />
                </HStack>
            </Box>
        </Box>
    );
}

export default Header;
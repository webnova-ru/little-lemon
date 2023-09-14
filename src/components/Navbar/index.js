import { Button, ButtonGroup, IconButton, Menu, MenuButton, MenuItem, MenuList, useMediaQuery } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";


const data = [
    {
        "name": "Home",
        "url": "/home"
    },
    {
        "name": "About",
        "url": "/"
    },
    {
        "name": "Menu",
        "url": "/"
    },
    {
        "name": "Booking",
        "url": "/booking"
    },
    {
        "name": "Order Online",
        "url": "/"
    },
    {
        "name": "Login",
        "url": "/"
    }
];

const Navbar = () => {
    const isNonMobile = useMediaQuery("(min-width: 992px)");
    const navigate = useNavigate();

    return (
        <>
            {
                isNonMobile[0] ?
                    <ButtonGroup variant="primaryGhost" spacing="0">
                        {
                            data.map((item) => {
                                return <Button key={item.name} isDisabled={item.url === "/"} onClick={() => navigate(item.url)}>{item.name}</Button>
                            })
                        }
                    </ButtonGroup >
                    :
                    <Menu>
                        <MenuButton
                            aria-label='Options'
                            as={IconButton}
                            icon={<HamburgerIcon />}
                            variant='outline'
                        />
                        <MenuList>
                            {
                                data.map((item) => {
                                    return <MenuItem key={item.name} isDisabled={item.url === "/"} onClick={() => navigate(item.url)}>{item.name}</MenuItem>
                                })
                            }
                        </MenuList>
                    </Menu>
            }
        </>
    );
}

export default Navbar;
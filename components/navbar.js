import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.200')
    return (
        <NextLink href={href}>
            <Link
                p={2}
                bg={active ? 'glassTeal' : undefined}
                color={active ? '#202023' : inactiveColor}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props
    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            style={{ backdropFilter: 'blur(10px' }}
            zIndex={1}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
            >
            </Container>
            Navbar
        </Box>
    )
}

export default Navbar
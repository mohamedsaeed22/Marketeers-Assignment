import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Logo from "../assets/Marketeers-Logo-Blue.png";
import { Logout } from "@/store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { accessToken } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(Logout());
  };

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Image
          boxSize="80px"
          src={Logo}
          alt="Logo"
          objectFit="contain"
          width={40}
          height={40}
        />

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={4}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            {accessToken && (
              <Button colorScheme="red" onClick={handleLogout}>
                Logout
              </Button>
            )}
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}

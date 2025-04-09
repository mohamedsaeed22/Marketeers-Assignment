import { Flex } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Flex minH={"80vh"} align={"center"} justify={"center"} p={8}>
        <Outlet />
      </Flex>
    </>
  );
};

export default MainLayout;

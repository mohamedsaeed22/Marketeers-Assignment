import CookieService from "@/services/CookieService";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Input,
  Skeleton,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import actGetData from "@/store/data/act/actGetData";
import { socketUpdatePercentage } from "@/store/data/dataSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const { values, loading } = useAppSelector((state) => state.data);
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    if (CookieService.get("token")) {
      dispatch(actGetData());
      // Set up Socket.IO connection
      const newSocket = io("http://127.0.0.1:5000");
      setSocket(newSocket);
      // Listen for percentage updates and dispatch Redux action
      newSocket.on("percentage_update", (data) => {
        dispatch(socketUpdatePercentage(data));
      });

      // Clean up the socket connection on unmount
      return () => {
        newSocket.close();
      };
    }
  }, []);

  const handleInputChange = (id: number, inputValue: number) => {
    if (inputValue === "" || inputValue === null || isNaN(inputValue)) {
      inputValue = 0;
    }
    if (socket) {
      socket.emit("input_change", { id, input_value: inputValue });
    }
  };

  return (
    <>
      <TableContainer width="900px">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th textAlign="center">My Input</Th>
              <Th textAlign="center">Value From Backend</Th>
              <Th isNumeric textAlign="center">
                Percentage Value from Backend (Real Time)
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {loading === "pending"
              ? Array.from({ length: 5 }).map((_, idx) => (
                  <Tr key={idx}>
                    <Td textAlign="center">
                      <Skeleton height="40px" />
                    </Td>
                    <Td textAlign="center">
                      <Skeleton height="40px" />
                    </Td>
                    <Td isNumeric textAlign="center">
                      <Skeleton height="40px" />
                    </Td>
                  </Tr>
                ))
              : values?.map((item) => (
                  <Tr key={item.id}>
                    <Td textAlign="center">
                      <Input
                        type="number"
                        htmlSize={4}
                        width="100%"
                        textAlign="center"
                        placeholder="Enter a number"
                        onChange={(e) =>
                          handleInputChange(item.id, parseFloat(e.target.value))
                        }
                      />
                    </Td>
                    <Td textAlign="center">{item.value}</Td>
                    <Td textAlign="center">
                      {item.percentage !== undefined ? item.percentage : 0}%
                    </Td>
                  </Tr>
                ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Home;

import { useEffect, useState } from "react";
import { Container, Text, Box, useColorModeValue } from "@chakra-ui/react";
import { FaClock } from "react-icons/fa";

const Index = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  const getTimeInCalifornia = () => {
    const utcOffset = time.getTimezoneOffset() * 60000; // offset in milliseconds
    const californiaTime = new Date(time.getTime() + utcOffset - 7 * 3600000); // California is UTC-7
    return californiaTime.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  };

  const bg = useColorModeValue("gray.50", "gray.900");
  const color = useColorModeValue("gray.900", "gray.50");

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="black" color="white">
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" overflow="hidden" bg={bg} color={color}>
        <Text fontSize="5xl" fontFamily="monospace" fontWeight="bold">
          <FaClock /> {getTimeInCalifornia()}
        </Text>
        <Text mt={4} fontSize="xl" color="gray.500">
          Current Time in California
        </Text>
      </Box>
    </Container>
  );
};

export default Index;

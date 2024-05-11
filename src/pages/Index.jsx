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
    <Container centerContent maxW="100%" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="linear-gradient(to right, #0D0D0D, #333333, #1A1A1A)" color="#CCCCCC">
      <Box p={5} shadow="2xl" borderWidth="1px" borderRadius="lg" overflow="hidden" bg="#121212" color="#E0E0E0" animation="pulse 2s infinite ease-in-out">
        <Text fontSize="6xl" fontFamily="'Roboto Mono', monospace" fontWeight="bold" animation="fadeIn 1s" textShadow="2px 2px 4px #000000">
          <span key={time}>{getTimeInCalifornia()}</span>
        </Text>
      </Box>
    </Container>
  );
};

export default Index;

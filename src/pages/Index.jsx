import { useEffect, useState } from "react";
import { Container, Text, Box, useColorModeValue, Button } from "@chakra-ui/react";
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
    <Container centerContent maxW="100%" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="linear-gradient(135deg, #6e8efb, #a777e3, #ec77ab)" color="#333333" animation="gradientBG 15s ease infinite">
      <Box p={5} shadow="2xl" borderWidth="1px" borderRadius="lg" overflow="hidden" bg="#121212" color="#E0E0E0" animation="pulse 2s infinite ease-in-out" _hover={{ transform: "scale(1.05)", transition: "all 0.3s ease-in-out" }}>
        <Text fontSize="6xl" fontFamily="'Roboto Mono', monospace" fontWeight="bold" animation="fadeIn 1s" textShadow="2px 2px 4px #000000">
          <span key={time}>{getTimeInCalifornia()}</span>
        </Text>
      </Box>
    </Container>
  );
};

export default Index;

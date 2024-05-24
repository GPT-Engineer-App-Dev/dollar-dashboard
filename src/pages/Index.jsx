import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Divider } from "@chakra-ui/react";
import { FaHome, FaChartLine, FaBuilding, FaLaptop, FaCommentDots } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <HStack spacing={8}>
          <Link href="#" fontSize="xl" fontWeight="bold">Financial Times</Link>
          <HStack spacing={4}>
            <Link href="#"><FaHome /> Home</Link>
            <Link href="#"><FaChartLine /> Markets</Link>
            <Link href="#"><FaBuilding /> Companies</Link>
            <Link href="#"><FaLaptop /> Tech</Link>
            <Link href="#"><FaCommentDots /> Opinion</Link>
          </HStack>
        </HStack>
      </Flex>

      {/* Main Content Area */}
      <Flex direction={{ base: "column", md: "row" }} mt={4}>
        {/* Featured Article Section */}
        <Box flex="3" p={4}>
          <Heading as="h2" size="xl" mb={4}>Featured Article</Heading>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Heading as="h3" size="lg">Breaking News: Market Hits Record High</Heading>
            <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
          </Box>
        </Box>

        {/* Sidebar */}
        <Box flex="1" p={4} bg="gray.50">
          <Heading as="h3" size="md" mb={4}>Trending News</Heading>
          <VStack align="start" spacing={4}>
            <Link href="#">Stock Market Today: Latest News & Updates</Link>
            <Link href="#">Tech Giants Release Quarterly Earnings</Link>
            <Link href="#">Global Markets React to Economic Data</Link>
          </VStack>
          <Divider my={4} />
          <Heading as="h3" size="md" mb={4}>Market Data</Heading>
          <VStack align="start" spacing={2}>
            <Text>Dow Jones: 34,000.00</Text>
            <Text>NASDAQ: 14,000.00</Text>
            <Text>S&P 500: 4,200.00</Text>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={4}>
            <Link href="#">Contact</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;
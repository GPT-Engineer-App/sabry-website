// Personal website for Sabrykrishnan Loganathan
import { Box, Flex, Heading, Text, Image, Link, VStack, IconButton } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" align="center" maxW={{ xl: "1200px" }} m="0 auto">
      <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
        <Heading fontSize="xl" mb={4}>
          Sabrykrishnan Loganathan
        </Heading>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTMzMjUwMjJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Sabrykrishnan Loganathan" mb={4} />
        <Text mt={4}>Hi, I'm Sabrykrishnan Loganathan, a software engineer specializing in modern web technologies. I have a passion for creating elegant and efficient solutions using React and Node.js.</Text>
      </Box>
      <VStack spacing={4} mt={5}>
        <Heading fontSize="2xl">Connect with me</Heading>
        <Flex>
          <IconButton as={Link} href="https://www.linkedin.com/in/sabrykrishnan-loganathan" aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" isRound={true} />
          <IconButton as={Link} href="https://github.com/sabrykrishnan" aria-label="GitHub" icon={<FaGithub />} size="lg" ml={2} isRound={true} />
          <IconButton as={Link} href="mailto:sabrykrishnan@example.com" aria-label="Email" icon={<FaEnvelope />} size="lg" ml={2} isRound={true} />
        </Flex>
      </VStack>
    </Flex>
  );
};

export default Index;

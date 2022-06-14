import {
  Box,
  Button,
  Flex,
  Text,
  Progress,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { Logo } from "./components/logo";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { ButtonSocial } from "./components/buttonSocial";
import { Header } from "./components/header";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Home() {
  const AIRTABLE = "/api/airtable";
  const router = useRouter();

  useEffect(() => {
    /* const isLogged = localStorage.getItem("isLogged"); */
    /* axios
			.get(`${AIRTABLE}/post?email=gilberto.beltrameneto@gmail.com`)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			}); */
    /* if (isLogged) {
			
		} else {
			router.push("/");
		} */
  }, []);

  return (
    <Box bgColor="gray.50" h="100vh">
      <Header />
      <Flex
        w="full"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        maxW="400px"
        mx="auto"
        mt="4vh"
        p="2em"
      >
        <Logo mb="1.5rem" height="190px" />

        <Box width="285px" maxW="900px" mt="8">
          <Flex mb="4px" fontSize="sm" fontWeight="semibold">
            <Text>R$3,50</Text>
            <Spacer />
            <Text end>Meta de saque</Text>
          </Flex>
          <Progress
            value={90}
            size="sm"
            borderRadius="md"
            colorScheme="green"
            bg="gray.300"
          />
        </Box>

        <Stack spacing="6" mt="4" pb="5">
          <Button
            bgColor="black"
            color="white"
            type="submit"
            px="50px"
            py="6"
            _hover={{ opacity: 0.8 }}
          >
            Quero sacar meu dinhero!
          </Button>
        </Stack>

        <Flex gap="10">
          <ButtonSocial text="Instagram" bgColor="black">
            <FaInstagram size="25" />
          </ButtonSocial>
          <ButtonSocial text="Youtube">
            <FaYoutube size="25" />
          </ButtonSocial>
        </Flex>
      </Flex>
    </Box>
  );
}

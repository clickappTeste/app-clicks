import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { BiExit, BiArrowBack } from "react-icons/bi";
import { BsWallet2 } from "react-icons/bs";
import { useRouter } from "next/router";

export const Header = ({ name, money, isLoading, backIcon }) => {
	const router = useRouter();

	return (
		<Flex justify='space-between' align='center' h='90px' bgColor={"white"}>
			<Flex
				align='center'
				px='3'
				fontWeight='semibold'
				fontSize={["sm", "lg"]}
				color='#0f0f0f'
			>
				{isLoading ? (
					"Carregando..."
				) : (
					<>
						<Box cursor='pointer'>
							<Button
								p='0'
								bgColor='white'
								_hover={{ bg: "gray.50" }}
								onClick={() =>
									backIcon
										? router.push("/home")
										: (localStorage.clear(), router.push("/"))
								}
							>
								{backIcon ? <BiArrowBack /> : <BiExit />}
							</Button>
						</Box>
						<Text ml='4'>{name}</Text>
					</>
				)}
			</Flex>
			<Flex
				align='center'
				px='6'
				fontWeight='semibold'
				fontSize={["md", "lg"]}
				color='#0f0f0f'
			>
				{isLoading ? null : (
					<>
						<BsWallet2 />
						<Text ml='4'>{money}</Text>
					</>
				)}
			</Flex>
		</Flex>
	);
};

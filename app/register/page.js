import {
	Title,
	TextInput,
	PasswordInput,
	MantineProvider,
	Container,
	Button,
	Flex,
	Checkbox,
	useMantineColorScheme,
} from "@mantine/core";

import { IconUser, IconLock } from "@tabler/icons-react";

export default function Home() {
	return (
		<MantineProvider defaultColorScheme="light">
			<Container mt="10%">
				<Title>Sign Up</Title>
				<Flex>
					<Flex direction="column" w="30%" mt="10" gap="15">
						<TextInput
							variant="filled"
							leftSection={<IconUser size="1.2rem" />}
							label="Username"
							placeholder="Username"
						/>
						<PasswordInput
							variant="filled"
							label="Password"
							placeholder="Password"
							leftSection={<IconLock size="1.2rem" />}
						/>
						<PasswordInput
							variant="filled"
							label="Confirm Password"
							leftSection={<IconLock size="1.2rem" />}
							placeholder="Confirm Password"
						/>
						<Button>Register</Button>
					</Flex>
				</Flex>
			</Container>
		</MantineProvider>
	);
}

"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import {
	Title,
	Divider,
	TextInput,
	PasswordInput,
	MantineProvider,
	Anchor,
	Container,
	Button,
	Flex,
	Checkbox,
	useMantineColorScheme,
} from "@mantine/core";

import { IconLock, IconUser } from "@tabler/icons-react";

export default function Home() {
	const router = useRouter();
	return (
		<MantineProvider defaultColorScheme="dark">
			<Container mt="10%">
				<Title>Sign In</Title>
				<Flex>
					<Flex direction="column" w="35%" mt="10" gap="15">
						<TextInput
							variant="filled"
							label="Username"
							leftSection={<IconUser size="1.2rem" />}
							placeholder="Username"
						/>
						<PasswordInput
							variant="filled"
							leftSection={<IconLock size="1.2rem" />}
							label="Password"
							placeholder="Password"
						/>
						<Checkbox defaultChecked label="Remember me" />
						<Button>Log In</Button>
						<Flex justify={"space-between"}>
							Dont have an account?{" "}
							<Anchor onClick={() => router.push("/register")}>Register</Anchor>
						</Flex>
					</Flex>
				</Flex>
			</Container>
		</MantineProvider>
	);
}

"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { redirect } from "next/navigation";
import {
	Title,
	Divider,
	TextInput,
	PasswordInput,
	MantineProvider,
	Container,
	Button,
	Flex,
	Checkbox,
	useMantineColorScheme,
} from "@mantine/core";

import { IconLock, IconUser } from "@tabler/icons-react";

export default function Home() {
	return (
		<MantineProvider defaultColorScheme="light">
			<Container mt="10%">
				<Title>Sign In</Title>
				<Flex>
					<Flex direction="column" w="30%" mt="10" gap="15">
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
						<Button onClick={() => redirect("/register")}>Log In</Button>
					</Flex>
				</Flex>
			</Container>
		</MantineProvider>
	);
}

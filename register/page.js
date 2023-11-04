"use client";

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
	resolveStyles,
} from "@mantine/core";

import { React, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IconUser, IconLock } from "@tabler/icons-react";
import { headers } from "@/next.config";

export default function Home() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [userName, setUsername] = useState("");
	const [passWord, setPassword] = useState("");
	return (
		<MantineProvider defaultColorScheme="dark">
			<Container mt="10%">
				<Title>Sign Up</Title>
				<Flex mt="2%">
					<Flex direction="column" w="35%" mt="10" gap="10">
						<Flex gap={10}>
							<TextInput
								variant="filled"
								label="First Name"
								placeholder="First Name"
								onChange={(e) => setFirstName(e.target.value)}
							/>
							<TextInput
								variant="filled"
								label="Last Name"
								placeholder="Last Name"
								onChange={(e) => setLastName(e.target.value)}
							/>
						</Flex>
						<TextInput
							variant="filled"
							leftSection={<IconUser size="1.2rem" />}
							label="Username"
							placeholder="Username"
							onChange={(e) => setUsername(e.target.value)}
						/>
						<PasswordInput
							variant="filled"
							label="Password"
							placeholder="Password"
							onChange={(e) => setPassword(e.target.value)}
							leftSection={<IconLock size="1.2rem" />}
						/>
						<Button
							mt="10"
							onClick={async () => {
								const res = await fetch("api/register", {
									method: "POST",
									headers: {
										"Content-Type": "application/json",
									},
									body: JSON.stringify({
										username: userName,
										firstname: firstName,
										lastname: lastName,
										password: passWord,
									}),
								});

								if (res.status == 200) {
									toast.success("User Registered!");
									console.log("User Registered");
								}
							}}
						>
							Register
						</Button>
						<ToastContainer theme="dark" draggable />
					</Flex>
				</Flex>
			</Container>
		</MantineProvider>
	);
}

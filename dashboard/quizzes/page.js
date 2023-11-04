"use client";

import { Quizzes } from "../../components/Quizzes";
import { QuizCard } from '../../components/QuizCard';

import {
	Title,
	TextInput,
	PasswordInput,
	MantineProvider,
	Container,
	Button,
	Flex,
	Checkbox,
	Group,
	NavLink,
	useMantineColorScheme,
	ActionIcon,
} from "@mantine/core";

import {
	IconUserMinus,
	IconChevronRight,
	IconUser,
	IconBrain,
	IconChalkboard,
	IconMoon,
	IconSun,
} from "@tabler/icons-react";

import { useState } from "react";

import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();
	return (
		<MantineProvider defaultColorScheme="dark">
			<Flex
				align="center"
				h="75px"
				w="100%"
				bg={"blue.5"}
				color="white"
				style={{ color: "white" }}
				justify={"flex-start"}
				pl="10%"
				pr="10%"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					height="30px"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
					/>
				</svg>
				<Title order={3} ml="10px">
					ClassIQ
				</Title>
			</Flex>
			<Container mt="2%">
				<Title>Dashboard</Title>
				<Flex gap="10%" align={"flex-start"}>
					<Group mt="20px" gap="0" w="25%">
						<NavLink
							label="My Profile"
							leftSection={<IconUser stroke="1.5" size="1.2rem" />}
							rightSection={<IconChevronRight stroke="1.5" size="1.2rem" />}
							onClick={() => {
								router.push("/dashboard/profile");
							}}
						/>
						<NavLink
							label="Quizzes"
							leftSection={<IconBrain stroke="1.5" size="1.2rem" />}
							rightSection={<IconChevronRight stroke="1.5" size="1.2rem" />}
							onClick={() => {
								router.push("/dashboard/quizzes");
							}}
							active
						/>
						<NavLink
							label="Classes"
							leftSection={<IconChalkboard stroke="1.5" size="1.2rem" />}
							rightSection={<IconChevronRight stroke="1.5" size="1.2rem" />}
							onClick={() => {
								router.push("/dashboard/classes");
							}}
						/>


						<NavLink
							label="Log Out"
							color="red"
							mt="100%"
							variant="subtle"
							leftSection={<IconUserMinus stroke="1.5" size="1.2rem" />}
							active
						/>
					</Group>
					<Quizzes />
				</Flex>
			</Container>
		</MantineProvider>
	);
}

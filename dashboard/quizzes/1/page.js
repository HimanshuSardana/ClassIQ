"use client";
import { useRouter } from "next/navigation";
import {
	Tabs,
	rem,
	Title,
	TextInput,
	PasswordInput,
	MantineProvider,
	Container,
	Button,
	Flex,
	Text,
	Checkbox,
	Group,
	NavLink,
	useMantineColorScheme,
	ActionIcon,
	Divider,
	Textarea,
	Modal,
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
import { useDisclosure } from "@mantine/hooks";

export default function Home() {
	const theme = localStorage.getItem("theme");
	const router = useRouter();
	let [tabSwitchCount, setTabSwitchCount] = useState(0);
	const [opened, { open, close }] = useDisclosure(false);
	const [opened2, { open2, close2 }] = useDisclosure(false);
	document.addEventListener("visibilitychange", () => {
		if (document.hidden) {
			{
				setTabSwitchCount(tabSwitchCount + 1);
				console.log(tabSwitchCount);
				if (tabSwitchCount == 3) {
					window.close();
				}
				open();
			}
		}
	});

	return (
		<MantineProvider defaultColorScheme={theme}>
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
				<Title>General Organic Chemistry Quiz</Title>
				<Tabs mt="3%" defaultValue="gallery">
					<Tabs.List>
						<Tabs.Tab value="gallery">1</Tabs.Tab>
						<Tabs.Tab value="messages">2</Tabs.Tab>
						<Tabs.Tab value="settings">3</Tabs.Tab>
					</Tabs.List>

					<Tabs.Panel mt="3%" value="gallery" w="100%">
						<Flex w="100%" align={"center"}>
							<Flex direction={"column"} w="100%">
								<Text size="lg" fw="bolder">
									Question 1
								</Text>
								<Text size="lg">What is Inductive Effect?</Text>
							</Flex>
							<Flex direction={"column"} w="120%">
								<Textarea
									mt="2%"
									w="100%"
									autosize
									minRows={8}
									h="100%"
									variant="filled"
									label="Answer"
									description="Write an answer in 100-200 words"
									placeholder="Enter your answer"
								/>
								<Flex justify={"space-between"} w="100%" mt="2%">
									<Button variant="subtle">Previous</Button>
									<Button variant="subtle">Next</Button>
								</Flex>
							</Flex>
						</Flex>
					</Tabs.Panel>

					<Tabs.Panel value="messages">Messages tab content</Tabs.Panel>

					<Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
				</Tabs>
				<Modal opened={opened} onClose={close} title="Tab Switch detected">
					<Text>Switching your tab during tests is not allowed</Text>
					<Text>
						You have {3 - tabSwitchCount <= 0 ? "0" : 3 - tabSwitchCount} more
						chances left
					</Text>
					<Flex justify={"flex-end"}>
						{tabSwitchCount >= 3 ? (
							<Button
								onClick={() => router.push("/")}
								color="red"
								variant="subtle"
							>
								Log Out
							</Button>
						) : (
							<Button onClick={close} color="red" variant="subtle">
								Close
							</Button>
						)}
					</Flex>
				</Modal>
				<Modal opened={opened2} onClose={close2} title="Logged Out"></Modal>
			</Container>
		</MantineProvider>
	);
}

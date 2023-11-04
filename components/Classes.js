import {
	Title,
	Group,
	Flex,
	Card,
	Text,
	Button,
	TextInput,
	Modal,
	Divider,
} from "@mantine/core";

import { useRouter } from "next/navigation";

const ClassData = {
	classes: [
		{
			name: "Chemistry",
			subtitle: "General Organic Chemistry",
			id: "1",
		},
	],
};

let classCards = [];
for (let i = 0; i < ClassData["classes"].length; i++) {
	console.log(ClassData["classes"][i].attempted == "no");
	classCards.push(
		<Card mt="10%" shadow="sm" padding="lg" radius="md" w="280%">
			<Flex ml="2%" align={"center"} justify={"space-between"}>
				<Flex direction={"column"}>
					<Text fw="700" size="md">
						{ClassData["classes"][i].name}
					</Text>
					<Text size="xs" c="dimmed">
						{ClassData["classes"][i].subtitle}
					</Text>
				</Flex>
				<Flex gap={5}>
					<Button variant="subtle" color="green">
						Join
					</Button>
				</Flex>
			</Flex>
		</Card>
	);
}

import { IconPlus } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";

export const Classes = () => {
	const router = useRouter();
	const [opened, { open, close }] = useDisclosure(false);
	return (
		<div>
			<Modal opened={opened} onClose={close} title="Schedule Class">
				<Flex direction={"column"} gap={15}>
					<TextInput
						variant="filled"
						label="Class Title"
						placeholder="Class Title"
					/>
					<TextInput variant="filled" label="Subject" placeholder="Subject" />
					<Flex justify={"flex-end"} gap={10}>
						<Button
							mt="4%"
							variant="subtle"
							w="20%"
							color="red"
							onClick={close}
						>
							Close
						</Button>
						<Button
							mt="4%"
							variant="subtle"
							w="35%"
							color="green"
							onClick={close}
						>
							Schedule Class
						</Button>
					</Flex>
				</Flex>
			</Modal>

			<Flex justify={"space-between"} w="280%" mb="4%">
				<Title order={2}>Classes</Title>
				<Button
					leftSection={<IconPlus stroke="1.5" size="1.2rem" />}
					onClick={open}
				>
					Schedule Class
				</Button>
			</Flex>

			{classCards}
		</div>
	);
};

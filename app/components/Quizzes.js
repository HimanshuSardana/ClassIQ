import {
	Title,
	Group,
	Flex,
	Card,
	Text,
	Button,
	Modal,
	Divider,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export const Quizzes = () => {
	const [opened, { open, close }] = useDisclosure(false);
	return (
		<div>
			<Modal
				opened={opened}
				onClose={close}
				title="General Organic Chemistry Quiz"
			>
				<Flex align={"center"} gap="3%">
					<Text>Marks:</Text>
					<Text c="green.3">89/100</Text>
				</Flex>

				<Flex direction={"column"}>
					<Card mt="3%" shadow="sm" padding={"md"} radius={"md"}>
						<Text size="sm" fw="700">
							Q1: What is Inductive Effect?
						</Text>
						<Text c="dimmed" size="sm">
							The inductive effect is a concept in organic chemistry that
							describes the polarization of electrons in a molecule due to
							differences in electronegativity between atoms. It influences the
							distribution of electron density in a molecule and can affect its
							reactivity.
						</Text>
						<Text mt="3%" fw="800" mb="3%" size="sm">
							Marks: 89/100
						</Text>
						<Divider />
						<Text mt="3%" fw="700" size="sm">
							Feedback
						</Text>
						<Text c="dimmed" size="sm">
							Your response provides a clear and accurate explanation of the
							inductive effect in organic chemistry. To potentially improve, you
							could have added a brief example or application of the inductive
							effect to demonstrate its relevance in chemical reactions. This
							would further illustrate its practical importance.
						</Text>
					</Card>
					<Flex justify={"flex-end"}>
						<Button mt="4%" variant="light" w="20%" color="red" onClick={close}>
							Close
						</Button>
					</Flex>
				</Flex>
			</Modal>

			<Title order={2}>Quizzes</Title>
			<Card mt="7%" shadow="sm" padding="md" radius="md" w="200%">
				<Flex ml="2%" align={"center"} justify={"space-between"}>
					<Flex direction={"column"}>
						<Text fw="700" size="md">
							Chemistry
						</Text>
						<Text size="xs" c="dimmed">
							General Organic Chemistry
						</Text>
					</Flex>
					<Flex gap={5}>
						<Button disabled variant="light">
							Attempt
						</Button>
						<Button
							onClick={open}
							disabled={false}
							variant="subtle"
							color="green"
						>
							View Result
						</Button>
					</Flex>
				</Flex>
			</Card>
			<Card mt="5%" shadow="sm" padding="md" radius="md" w="200%">
				<Flex ml="2%" align={"center"} justify={"space-between"}>
					<Flex direction={"column"}>
						<Text fw="700" size="md">
							Physics
						</Text>
						<Text size="xs" c="dimmed">
							Rotational Motion
						</Text>
					</Flex>
					<Flex gap={5}>
						<Button variant="light">Attempt</Button>
						<Button disabled variant="outline">
							View Result
						</Button>
					</Flex>
				</Flex>
			</Card>
		</div>
	);
};

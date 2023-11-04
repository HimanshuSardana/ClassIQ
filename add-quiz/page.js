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
	Modal,
	Checkbox,
	Group,
	NavLink,
	useMantineColorScheme,
	ActionIcon,
	Divider,
	Textarea,
	NumberInput,
} from "@mantine/core";

import {
	IconUserMinus,
	IconChevronRight,
	IconUser,
	IconBrain,
	IconQuestionMark,
	IconChalkboard,
	IconMoon,
	IconSun,
} from "@tabler/icons-react";

import { useState, useEffect } from "react";
import { useDisclosure } from "@mantine/hooks";

export default function Home() {
	const [numQuestions, setNumQuestions] = useState(1);

	const [quizData, useQuizData] = useState([]);

	const [questionTitle, setQuestionTitle] = useState("");
	const [questionNumber, setQuestionNumber] = useState("");
	const [answer, setAnswer] = useState("");
	const [quizName, setQuizName] = useState("");
	const [quizSubtitle, setQuizSubtitle] = useState("");

	let questionsList = [];
	for (let i = 1; i <= numQuestions; i++) {
		questionsList.push(<Tabs.Tab value={i.toString()}>{i}</Tabs.Tab>);
	}
	let questions = [];
	let [questionsData, setQuestionsData] = useState([]);
	for (let i = 0; i <= numQuestions; i++) {
		let questionObj = {};

		questions.push(
			<Tabs.Panel mt="3%" value={i.toString()} h="30%">
				<TextInput
					label={`Question ${i}`}
					variant="filled"
					onChange={(e) => setQuestionTitle(e.target.value)}
					w="50%"
					leftSection={<IconQuestionMark stroke="1.5" size="1.2rem" />}
				/>
				<Textarea
					mt="2%"
					onChange={(e) => setAnswer(e.target.value)}
					minRows={5}
					autosize
					label={`Answer`}
					variant="filled"
					w="50%"
					mb="1%"
				/>
			</Tabs.Panel>
		);
	}

	const [activeTab, setActiveTab] = useState("1");
	const [opened, { open, close }] = useDisclosure(false);

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
				<Title>Add Quiz</Title>
				<Flex direction={"column"} mt="3%" gap="10">
					<Flex gap="5%">
						<TextInput
							variant="filled"
							label="Quiz Name"
							w="30%"
							onChange={(e) => setQuizName(e.target.value)}
							placeholder="Quiz Name"
						/>
						<TextInput
							variant="filled"
							label="Quiz Subtitle"
							w="30%"
							onChange={(e) => setQuizSubtitle(e.target.value)}
							placeholder="Quiz Subtitle"
						/>
					</Flex>
					<NumberInput
						variant="filled"
						defaultValue={1}
						w="30%"
						min={1}
						onChange={setNumQuestions}
						label="Number of Questions"
					/>
				</Flex>
				<Modal opened={opened} onClose={close} title="Save Quiz" centered>
					<Text>Are you sure you want to save this quiz?</Text>
					<Flex justify={"flex-end"} mt="15px" gap={10}>
						<Button variant="subtle" color="red" onClick={close}>
							No
						</Button>
						<Button
							variant="subtle"
							color="green.5"
							onClick={async () => {
								const newResponse = {
									questionTitle,
									answer,
								};
								setQuestionsData([...questionsData, newResponse]);
								console.log(newResponse);
								setQuestionsData([...questionsData, newResponse]);
								console.log(JSON.stringify(questionsData));

								console.log({
									quizTitle: quizName,
									quizSubtitle: quizSubtitle,
									questions: questionsData,
								});

								const res = await fetch("/api/add-quiz", {
									method: "POST",
									headers: {
										"Content-Type": "application/json",
									},
									body: JSON.stringify({
										"quizTitle": quizName,
										"quizSubtitle": quizSubtitle,
										"questions": questionsData,
									}),
								});
								console.log("Response", res)
							}}
						>
							Yes
						</Button>
					</Flex>
				</Modal>

				<Tabs
					defaultValue="1"
					value={activeTab}
					onChange={{ setActiveTab }}
					mt="2%"
					h="30%"
				>
					<Tabs.List>{questionsList}</Tabs.List>

					{questions}
				</Tabs>
				<Flex justify={"space-between"} mt="3%" w="50%">
					<Button
						disabled={parseInt(activeTab) == 1 ? true : false}
						variant="subtle"
						onClick={() => setActiveTab((parseInt(activeTab) - 1).toString())}
					>
						Previous
					</Button>
					{parseInt(activeTab) == numQuestions ? (
						<Button variant="outline" onClick={open}>
							Save Quiz
						</Button>
					) : (
						<Button
							disabled={parseInt(activeTab) == numQuestions ? true : false}
							variant="subtle"
							onClick={() => {
								setActiveTab((parseInt(activeTab) + 1).toString());

								const newResponse = {
									questionTitle,
									answer,
								};
								setQuestionsData([...questionsData, newResponse]);
								console.log(questionsData);
							}}
						>
							Next
						</Button>
					)}
				</Flex>
			</Container>
		</MantineProvider>
	);
}

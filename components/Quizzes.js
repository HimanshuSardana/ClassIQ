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

/*
	name VARCHAR(255),
	subtitle VARCHAR(255),
	attempted VARCHAR(255),
	questions JSON

	questions: [{
		questionNumber: "1",
		question: "What is inductive effect",
		userName: "himanshu",
		userAnswer: "lmao",
		actualAnswer: "Inductive effect is ..."
	}]
*/

/*for (let i = 0; i < QuizData["quizzes"].length; i++) {
	console.log(QuizData["quizzes"][i].attempted == "no");
	quizCards.push(
		<Card mt="3%" shadow="sm" padding="md" radius="md" w="200%">
			<Flex ml="2%" align={"center"} justify={"space-between"}>
				<Flex direction={"column"}>
					<Text fw="700" size="md">
						{QuizData["quizzes"][i].name}
					</Text>
					<Text size="xs" c="dimmed">
						{QuizData["quizzes"][i].subtitle}
					</Text>
				</Flex>
				<Flex gap={5}>
					<Button
						disabled={QuizData["quizzes"][i].attempted == "no" ? true : false}
						variant="light"
					>
						Attempt
					</Button>
					<Button
						disabled={QuizData["quizzes"][i].attempted == "yes" ? true : false}
						variant="subtle"
						color="green"
					>
						View Result
					</Button>
				</Flex>
			</Flex>
		</Card>
	);
}*/

import { IconPlus } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";

/*const getQuiz = async (name) => {
	fetch("/api/get-quiz", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: {
			quizTitle: name,
		},
	})
		.then((response) => response.json())
		.then((responseJSON) => {
			console.log(responseJSON);
		});
};*/

export const Quizzes = () => {
	//const [quizCards, setQuizCards] = useState([]);
	const router = useRouter();
	//getQuiz("Physics");

	let quizCards = [
		{
			name: "Physics",
			subtitle: "Rotational Motion",
			questions: [
				{
					userAnswer: "",
					answer:
						"a quantity expressing a body's tendency to resist angular acceleration, which is the sum of the products of the mass of each particle in the body with the square of its distance from the axis of rotation.",
					questionTitle: "What is moment of inertia?",
				},
				{
					userAnswer: "",
					answer: "to become less steady and fall down",
					questionTitle: "What is toppling?",
				},
			],
			attempted: "no",
		},
		{
			name: "Chemistry",
			subtitle: "General Organic Chemistry",
			questions: [
				{
					userAnswer:
						"temporary effect arising due to difference in electronegativity",
					answer:
						"In chemistry, the inductive effect in a molecule is a local change in the electron density due to electron-withdrawing or electron-donating groups elsewhere in the molecule, resulting in a permanent dipole in a bond. It is present in a σ bond, unlike the electromeric effect which is present in a π bond",
					questionTitle: "What is Inductive Effect?",
					AIFeedback: `
					Marks: 6/10
					\n
 
The student's answer is generally correct, but there are some minor errors and omissions that affected the marks. Here's a breakdown of the marks awarded for each aspect of the response:
 
* Accuracy of the definition: 8/10 (the student provided a clear and concise definition of inductive effect, but forgot to mention that it is a local change in electron density)
* Understanding of the concept: 7/10 (the student demonstrated a good understanding of the concept, but could have elaborated more on the importance of inductive effect in chemistry)
* Grammar and spelling: 5/10 (there were a few minor spelling errors and grammatical mistakes in the response)
 
Instructions for improvement:
 
* Make sure to include all the important details when defining a concept.
* Provide more explanations and examples to demonstrate a better understanding of the topic.
* Pay closer attention to grammar and spelling to ensure a clearer and more professional presentation.
					`,
				},
				{
					userAnswer: "I dont know",
					answer:
						"It is a phenomenon in which a particular compound can be written in two or more structures with identical position of atoms",
					questionTitle: "What is resonance?",
					AIFeedback:
						"Marks: 2/10\n\nYour answer is incorrect. Resonance is a phenomenon where a system vibrates or oscillates at a specific frequency in response to an external force or energy. It is a fundamental concept in physics and is used to describe the behavior of various systems, including mechanical, electrical, and biological systems.\n\nTo improve your answer, please provide a clear definition of resonance and explain its significance in physics. Additionally, consider providing examples or case studies to illustrate how resonance works in different contexts",
				},
			],
			attempted: "yes",
		},
	];

	const [opened, { open, close }] = useDisclosure(false);
	let QuizData = [];
	for (let i = 0; i < quizCards.length; i++) {
		QuizData.push(
			<Card w="150%" mt="3%" padding={"lg"}>
				<Flex gap={10} align={"center"} justify={"space-between"}>
					<Flex direction={"column"}>
						<Text fw="800">{quizCards[i].name}</Text>
						<Text c="dimmed">{quizCards[i].subtitle}</Text>
					</Flex>
					<Flex gap={10}>
						<Button
							color="blue"
							disabled={quizCards[i].attempted == "no" ? false : true}
							variant="subtle"
						>
							Attempt
						</Button>
						<Button
							color="green"
							disabled={quizCards[i].attempted == "yes" ? false : true}
							variant="subtle"
							onClick={open}
						>
							View Result
						</Button>
					</Flex>
				</Flex>
			</Card>
		);
	}
	return (
		<div>
			<Modal
				opened={opened}
				onClose={close}
				size="lg"
				title={quizCards[1].subtitle + " Quiz"}
			>
				<Flex direction={"column"}>
					<Card mt="3%" shadow="sm" padding={"md"} radius={"md"}>
						<Text size="sm" fw="700">
							{quizCards[1].questions[0].questionTitle}
						</Text>
						<Text c="dimmed" size="sm">
							{quizCards[1].questions[0].userAnswer}
						</Text>
						<Divider mt="3%" />
						<Text mt="3%" fw="700" size="sm">
							AI Feedback
						</Text>
						<Text c="dimmed" size="sm">
							{quizCards[1].questions[0].AIFeedback}
						</Text>
					</Card>
					<Card mt="3%" shadow="sm" padding={"md"} radius={"md"}>
						<Text size="sm" fw="700">
							{quizCards[1].questions[1].questionTitle}
						</Text>
						<Text c="dimmed" size="sm">
							{quizCards[1].questions[1].userAnswer}
						</Text>
						<Divider mt="3%" />
						<Text mt="3%" fw="700" size="sm">
							AI Feedback
						</Text>
						<Text c="dimmed" size="sm">
							{quizCards[1].questions[1].AIFeedback}
						</Text>
					</Card>
					<Flex justify={"flex-end"}>
						<Button mt="4%" variant="light" w="20%" color="red" onClick={close}>
							Close
						</Button>
					</Flex>
				</Flex>
			</Modal>

			<Flex justify={"space-between"} w="150%" mb="4%">
				<Title order={2}>Quizzes</Title>
				<Button
					leftSection={<IconPlus stroke="1.5" size="1.2rem" />}
					onClick={() => {
						window.location.href = "/add-quiz";
						console.log("hello");
					}}
				>
					Add Quiz
				</Button>
			</Flex>
			{QuizData}
		</div>
	);
};

import { Title, Group, Flex, TextInput, Button } from "@mantine/core";
import { IconUser, IconAt, IconPencil } from "@tabler/icons-react";

export const Profile = () => {
	return (
		<Group>
			<Flex direction="column" w="120%">
				<Title order={2}>Profile</Title>

				<TextInput
					w="120%"
					label="Username"
					mt="20"
					leftSection={<IconUser size="1.2rem" />}
					variant="filled"
					value="himanshu"
					placeholder="Username"
				/>
				<TextInput
					w="120%"
					label="Email Address"
					mt="10"
					leftSection={<IconAt size="1.2rem" />}
					variant="filled"
					value="himanshusardana@gmail.com"
					placeholder="Username"
				/>

				<Button
					mt="10%"
					w="80%"
					color="red"
					variant="light"
					leftSection={<IconPencil stroke="1.5" size="1.2rem" />}
				>
					Save Changes
				</Button>
			</Flex>
		</Group>
	);
};

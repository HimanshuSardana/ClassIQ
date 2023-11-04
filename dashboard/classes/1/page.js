"use client";
import { useRouter } from "next/navigation";
import { Classes } from "../../../components/Classes";
import Videocall from "./Videocall";

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

import { useState, useEffect } from "react";

export default function Home() {
	const theme = localStorage.getItem("theme");
	const router = useRouter();
	const [inCall, setInCall] = useState(false);

	return (
		<MantineProvider defaultColorScheme={theme}>
			<Videocall />
		</MantineProvider>
	);
}

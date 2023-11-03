import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req, res) {
	if (req.method === "GET") {
		res.status(200).json({ message: "Hello" });
	} else {
		// Handle any other HTTP method
	}
}

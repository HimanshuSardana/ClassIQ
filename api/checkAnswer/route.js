export async function POST(request) {
	const { prompt } = request.json();
	fetch("localhost:11435/api/generate", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: {
			prompt: `${prompt}`,
			model: "classiq2",
			stream: false,
		},
	});

	return NextResponse.json({ response: body }, { status: 200 });
}

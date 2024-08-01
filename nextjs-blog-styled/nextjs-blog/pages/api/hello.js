export default function handler (req, res) {
	res.status(200).json({text:'Hello!'});
}

export async function fetchPosts() {
	const response = await fetch('API EXAMPLE .COM')
	const data = await response.json();
	return data;
}

export async function handler(req, res) {
	const email = req.body.email;
	
}	
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/api', async (req, res) => {
	console.log(
		'received string is: ',
		JSON.parse(JSON.stringify(req.body.message))
	);
	const reverseText = await axios.post('http://localhost:6000/reverse', {
		message: req.body.message,
	});

	console.log('reversed string is: ', reverseText.data.message);

	const rand = Math.random().toPrecision(8);
	console.log('random number is:   ', rand);

	res.json({ message: reverseText.data.message, rand: rand });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('u-service-1 listening on port', PORT));

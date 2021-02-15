const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/reverse', (req, res) => {
	console.log(
		'received string is: ',
		JSON.parse(JSON.stringify(req.body.message))
	);
	const reversedText = JSON.parse(
		JSON.stringify(req.body.message).split('').reverse('').join('')
	);
	console.log('returning reversed: ', reversedText);
	res.json({ message: reversedText });
});

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log('u-service-2 listening on port', PORT));

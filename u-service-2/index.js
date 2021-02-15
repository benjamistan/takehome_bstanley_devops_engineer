const express = require('express');

const app = express();

// Implement /reverse endpoint

app.post('/reverse', (req, res) => {
	// reverses input
	console.log('request received at', req.url);
	res.sendStatus(200);
});

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log('u-service-2 listening on port', PORT));

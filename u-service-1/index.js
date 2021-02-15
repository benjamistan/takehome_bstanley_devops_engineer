const express = require('express');

const app = express();

// post to second microservice
app.post('/api', (req, res) => {
	console.log('request received at', req.url);
	res.sendStatus(200);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('u-service-1 listening on port', PORT));

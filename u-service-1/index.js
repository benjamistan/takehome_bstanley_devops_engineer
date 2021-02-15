const express = require('express');

const app = express();

// post to second microservice
app.post('/api', (req, res) => {
	const rand = Math.random().toPrecision(8);
	res.json({ rand: rand });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('u-service-1 listening on port', PORT));

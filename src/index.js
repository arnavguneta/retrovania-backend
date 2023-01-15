const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'html');

// setup static dir to serve
app.use(express.json());
app.use(express.static("public"));

app.listen(port, () => {
	console.log('Server is up on port ' + port);
});


import express from 'express';

const app = express()
const port = 3000

app.get('/', (req, res) => res.send('สวัสดี'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info',
  headers: {
    'X-RapidAPI-Key': 'e35cee0e12mshdc57867d4bc9637p1ae662jsn68ff333ec3e3',
    'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
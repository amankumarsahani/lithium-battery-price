
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

app.get('/price', async (req, res) => {
  try {
    const response = await axios.get('https://www.metal.com/Lithium-ion-Battery/202303240001');
    const $ = cheerio.load(response.data);
    const avgPrice = $('.strong___1JlBD').text().trim();

    res.status(200).json({ avgPrice});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

app.listen(3000, () => console.log(`Server is running on port 3000`));

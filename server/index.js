const express = require('express');
const helmet = require('helmet');
const cors  = require('cors') ; 
const rp = require('request-promise');
// const axios = require('axios');

const app = express();

app.use(cors());
app.use(helmet());
app.set('json spaces', 40);

const requestOptions = {
    method: 'GET',
    url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    headers: {
      'X-CMC_PRO_API_KEY': '1f3f96e1-d4d0-4401-80d0-28aa6edb7183',
      'Content-Type': 'application/json'
    },
    json: true,
    gzip: true
  };

app.get("/data", (req, res) => {
    rp(requestOptions).then(response => {
        console.log('API call response:', response);
        res.json({ res: response })
      }).catch((err) => {
        console.log('API call error:', err.message);
      });
});

const PORT = 3003 ; 

app.listen(PORT, ()=>console.log(`server is listening on port ${PORT}`));
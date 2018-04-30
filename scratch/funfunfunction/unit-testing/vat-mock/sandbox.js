// $ export VAT_API_KEY=look in pwd db

const fetch = require('node-fetch')

const result =
  fetch('https://vatapi.com/v1/country-code-check?code=DE', {
    headers: {
      'apikey': process.env.VAT_API_KEY
    }
  })
  .then(response => {
    const myResponse = response.json();
    console.log(myResponse);
    return myResponse;
  })
  .then(data => {
    const myValue = data.rates.standard.value;
    console.log(data);
    return myValue;
  })
  .catch(e => console.error(e))

result
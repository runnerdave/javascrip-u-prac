//you need to install npm-fetch: $ npm install node-fetch
const fetch = require("node-fetch");
const _ = require("lodash");

const checkUrlStatus = url => {
  return fetch(url)
    .then(response => response)
    .then(data => {
      //   console.log(Object.keys(data));
      return _.get(data, "status");
    })
    .catch(error => {
        console.log(error);
        return 404;
    });
};

// checkUrlStatus("https://www.google.com.au").then(e => console.log(e));

module.exports = checkUrlStatus;

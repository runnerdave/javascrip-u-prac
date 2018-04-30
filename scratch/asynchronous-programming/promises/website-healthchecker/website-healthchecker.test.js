const checkUrlStatus = require('./website-healthchecker');

it('checks the status of the url of different sites', () =>{
    const google = 'https://www.google.com.au';
    checkUrlStatus(google).then(status => expect(status).toBe(200));

    const not_google = 'https://www.google.com.az';
    checkUrlStatus(not_google).then(status => expect(status).toBe(404));
});
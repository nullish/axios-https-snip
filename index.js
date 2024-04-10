const fs = require('fs');
const axios = require('axios');
const https = require('https');

/** @function axiosHttps - Function to download data from an HTTP resource 
 * @param {string} url - URL to download from
*/
const axiosHttps = async (url) => {
    try {
        const response = await axios({
            method: 'get',
            url,
            responseType: 'stream',
            httpsAgent: new https.Agent({ keepAlive: true }) // If using https
        });
        return response.data;   
    } catch (error) {
        console.error(error);
    }
};

module.exports = axiosHttps;

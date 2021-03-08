const { Client } = require('pg');
const client = new Client(process.env.BDD_URL);
client.connect();

module.exports = client;
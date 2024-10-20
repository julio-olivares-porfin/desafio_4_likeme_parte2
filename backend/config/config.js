require('dotenv').config();
const { Pool } = require ("pg");

const config = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  allowExitOnIdle: process.env.ALLOW_EXIT_ON_IDLE
};

const pool = new Pool (config);

module.exports = pool;
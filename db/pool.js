const { Pool } = require('pg');

// const connectionString = 'postgresql://me:password@localhost:5432/portfolio';
const connectionString = 'postgres://vxndtprgcxjcay:38722fd8f4de87a88c4add16f3eae216cecae23504182fedb6fd114938993dca@ec2-54-217-206-65.eu-west-1.compute.amazonaws.com:5432/d38rcgoqmq43v7';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true
});

module.exports = pool;

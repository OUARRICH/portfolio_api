const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgresql://me:password@localhost:5432/portfolio',
    ssl: true /**remove ssl in local */
});

module.exports = pool;

const { Pool } = require('pg');
const myURI = 'postgres://welyizzt:oAQkcx6vYwLnmnnwXdGdgo5MepfVxtq7@drona.db.elephantsql.com:5432/welyizzt'

// add an .env file and place myURI to it
const URI = process.env.PG_URI || myURI;

const pool = new Pool({
  connectionString: URI,
});


// pool.connect(() => console.log('DB CONNECTED!'))

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
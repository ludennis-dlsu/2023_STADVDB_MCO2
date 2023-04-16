const mysql = require('mysql')

// Try connecting to node1
const db = mysql.createConnection({
    host: '34.126.135.2',
    user: 'root',
    password: 'Stadvdb00',
    database: 'test',
    multipleStatements: true
});

db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log('Connected to database 2');
});

let sql = `
UPDATE     movies_after_1980
SET        movie_name = 'M word'
WHERE    movies_after_1980.index = 1993;

SELECT SLEEP(5);

SELECT     distinct ma.movie_id as movie_id, ma.movie_name as movie_name, ma.movie_year as movie_year
FROM     movies_after_1980 ma
WHERE     ma.index = 1993;
`

db.beginTransaction();

db.query(sql, (err, result) => {
    if(err) throw err;
    console.log("\nDatabase 2 Result:")
    console.log(JSON.stringify(result[0])); // get the first index since queries will always return lists
    console.log('movie_id: ', JSON.stringify(result[0].movie_id)); 
    console.log('movie_name: ', JSON.stringify(result[0].movie_name)); 
});

db.commit();
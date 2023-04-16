
const mysql = require('mysql')
// Try connecting to node1
const db = mysql.createConnection({
    host: '34.124.177.25',
    user: 'root',
    password: 'Stadvdb00',
    database: 'test',
    multipleStatements: true
});

db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log('Connected to database 1');
});

let sql = `
UPDATE 	movies
SET		movie_name = '$'
WHERE	movies.index = 1;

SELECT SLEEP(5);

ROLLBACK;

SELECT 	distinct movie_id as movie_id, m.movie_name as movie_name
FROM 	movies m
WHERE 	m.index = 1;
`

db.beginTransaction();

db.query(sql, (err, result) => {
    if(err) throw err;
    console.log("\nDatabase 1 Result:")
    console.log(JSON.stringify(result[3])); // get the first index since queries will always return lists
    console.log('movie_id: ', JSON.stringify(result[3][0].movie_id)); 
    console.log('movie_name: ', JSON.stringify(result[3][0].movie_name)); 
});
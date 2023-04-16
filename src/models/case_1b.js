const mysql = require('mysql')
// Try connecting to node1

try{
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
        console.log('Connected to database 1 with host 34.124.177.25');
    });

    let sql = `
    SELECT     distinct ma.movie_id as movie_id, ma.movie_name as movie_name, ma.movie_year as movie_year
    FROM     movies_after_1980 ma
    WHERE     ma.index = 1993;
    `

    // db.beginTransaction();

    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log("\nDatabase 1 Result:")
        console.log(JSON.stringify(result[3])); // get the first index since queries will always return lists
        console.log('movie_id: ', JSON.stringify(result[3][0].movie_id)); 
        console.log('movie_name: ', JSON.stringify(result[3][0].movie_name)); 
    });

    // db.commit();
} catch (err) {
    throw err;
}

try{
    const db = mysql.createConnection({
        host: '34.97.103.52', 
        user: 'root',
        password: 'Stadvdb00',
        database: 'test',
        multipleStatements: true
    });

    db.connect((err) => {
        if(err) {
            throw err;
        }
        console.log('Connected to database 1 with host 34.97.103.52');
    });

    let sql = `
    SELECT     distinct ma.movie_id as movie_id, ma.movie_name as movie_name, ma.movie_year as movie_year
    FROM     movies_after_1980 ma
    WHERE     ma.index = 1993;
    `

    // db.beginTransaction();

    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log("\nDatabase 1 Result:")
        console.log(JSON.stringify(result)); // get the first index since queries will always return lists
        console.log('movie_id: ', JSON.stringify(result[0].movie_id)); 
        console.log('movie_name: ', JSON.stringify(result[0].movie_name)); 
    });

    // db.commit();
} catch (err) {
    throw err;
}
const mysql = require('mysql')
// Try connecting to node1

try{
    const db = mysql.createConnection({
        host: '34.126.135.130', 
        user: 'root',
        password: 'Stadvdb00',
        database: 'test',
        multipleStatements: true
    });

    db.connect((err) => {
        if(err) {
            throw err;
        }
        console.log('Connected to database 1 with host 34.126.135.130');
    });

    let sql = `
    SELECT     distinct mb.movie_id as movie_id, mb.movie_name as movie_name, mb.movie_year as movie_year
    FROM     movies_before_1980 mb
    WHERE     mb.index = 70;
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
        host: '34.97.233.55', 
        user: 'root',
        password: 'Stadvdb00',
        database: 'test',
        multipleStatements: true
    });

    db.connect((err) => {
        if(err) {
            throw err;
        }
        console.log('Connected to database 1 with host 34.97.233.55');
    });

    let sql = `
    SELECT     distinct mb.movie_id as movie_id, mb.movie_name as movie_name, mb.movie_year as movie_year
    FROM     movies_before_1980 mb
    WHERE     mb.index = 70;
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
## Concurrency Control and Consistency
For this case, Transaction 1 (T1) is run first and quickly followed by T2. These transactions can only read and write from Node1. These statements will use data from the first index of the movies table where T1 updates the name of the movie and T2 performs two read instances to compare.

\
Transaction 1
``` sql
use test;

-- Dirty Read T1: Writer --
START TRANSACTION;

UPDATE 	movies
SET		movie_name = '$money'
WHERE	movies.index = 1;

SELECT SLEEP(5);

ROLLBACK;

SELECT 	distinct movie_id as `movie_id`, m.movie_name as `movie_name` 
FROM 	movies m
WHERE 	m.index = 1;
```
\
Transaction 2
```sql
use test;

-- Transaction Levels --
	SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
	-- SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED;
	-- SET SESSION TRANSACTION ISOLATION LEVEL REPEATABLE READ;
	-- SET SESSION TRANSACTION ISOLATION LEVEL SERIALIZABLE;
SELECT @@transaction_isolation;

-- Dirty Read T2: Reader --
SELECT 		distinct movie_id as `movie_id`, m.movie_name as `movie_name`
FROM 		movies m 
WHERE 		m.index = 1;

SELECT SLEEP(5);

SELECT 		distinct movie_id as `movie_id`, m.movie_name as `movie_name` 
FROM 		movies m 
WHERE 		m.index = 1;

COMMIT;
```
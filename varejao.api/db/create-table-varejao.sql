CREATE USER postres WITH PASSWORD 'postgres';
GRANT ALL PRIVILEGES ON DATABASE varejaodb TO postgres;

CREATE TABLE IF NOT EXISTS contact (
	id SERIAL NOT NULL,
	name varchar(100) NOT NULL,
	cellphone varchar(13) NOT NULL,
	PRIMARY KEY (id)
);

-- insert into `contact`(`name`, `cellphone`) values
-- ('João', '223333453')
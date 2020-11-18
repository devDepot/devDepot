BEGIN;

DROP TABLE IF EXISTS employers;
DROP TABLE IF EXISTS developers;
DROP TABLE IF EXISTS accounts;

CREATE TABLE accounts (
    _id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    email TEXT NOT NULL
);

CREATE TABLE employers (
    _id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    about TEXT NOT NULL,
    company TEXT,
    account_id INT REFERENCES accounts(_id)
);

CREATE TABLE developers (
    _id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    stack TEXT NOT NULL,
    about TEXT NOT NULL,
    hourly_rate INT NOT NULL,
    active BOOLEAN NOT NULL,
    skills TEXT,
    account_id INT REFERENCES accounts(_id)
);

COMMIT;
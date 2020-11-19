BEGIN;

DROP FUNCTION create_user;
DROP TABLE IF EXISTS employers;
DROP TABLE IF EXISTS developers;
DROP TABLE IF EXISTS accounts;

CREATE TABLE accounts (
    _id SERIAL PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    is_dev BOOLEAN NOT NULL
);

CREATE TABLE employers (
    _id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    about VARCHAR (280) NOT NULL,
    company TEXT,
    account_id INT REFERENCES accounts(_id) NOT NULL
);

CREATE TABLE developers (
    _id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    stack TEXT NOT NULL,
    about VARCHAR (280) NOT NULL,
    hourly_rate INT NOT NULL,
    active BOOLEAN NOT NULL,
    image TEXT,
    skills TEXT,
    account_id INT REFERENCES accounts(_id) NOT NULL
);

CREATE FUNCTION create_user (_name TEXT, _username TEXT, _password TEXT, _email TEXT, _is_dev BOOLEAN, _stack TEXT, _about TEXT, _hourly_rate INT, _active BOOLEAN, _company TEXT, _image TEXT)
  RETURNS accounts AS $$
    DECLARE account accounts;
    BEGIN
        INSERT INTO accounts (username, password, email, is_dev) VALUES (_username, _password, _email, _is_dev) RETURNING * INTO account;
        IF _is_dev = true
        THEN
            INSERT INTO developers (name, stack, about, hourly_rate, active, account_id, image) VALUES (_name, _stack, _about, _hourly_rate, _active, account._id, _image);
        END IF;

        IF _is_dev = false
        THEN 
            INSERT INTO employers (name, about, company, account_id) VALUES (_name, _about, _company, account._id);
        END IF;
        RETURN account;
    END;
  $$ LANGUAGE plpgsql;


COMMIT;
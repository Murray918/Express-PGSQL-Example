DROP DATABASE IF EXISTS noteapp;
CREATE DATABASE noteapp;

\c noteapp

CREATE TABLE notes(
    note_id serial PRIMARY KEY,
    title varchar(355),
    body text
);

INSERT INTO notes(
    title, body
) VALUES (
    'JavaScript is Awesome',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Itaque quos natus repellendus minus nostrum! 
    Pariatur facere, autem dolor debitis ipsum assumenda iure. 
    Laborum repellat obcaecati optio vel ea? Distinctio, asperiores.'
);
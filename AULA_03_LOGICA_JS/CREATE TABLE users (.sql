CREATE TABLE users (
    id int PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255)
);

Host: localhost
port: 3306
usuario: root
senha: 123456

nome_banco: ads2026
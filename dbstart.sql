use mysql;
update user set authentication_string=password(''), plugin='mysql_native_password' where user='root';

FLUSH PRIVILEGES;

USE nodedb;

CREATE TABLE Pessoas (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(90) NOT NULL);

INSERT INTO Pessoas (nome) VALUES ('Huguinho');
INSERT INTO Pessoas (nome) VALUES ('Zezinho');
INSERT INTO Pessoas (nome) VALUES ('Luizinho');
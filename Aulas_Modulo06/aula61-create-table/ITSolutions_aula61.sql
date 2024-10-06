#Continuacao do codigo do cmd
USE itsolutions;
CREATE TABLE equipes(
id_equipe INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome_equipe VARCHAR(255) NOT NULL,
numero_recursos VARCHAR(45) NOT NULL);
CREATE TABLE projetos(
id_projeto INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
id_equipe INT NOT NULL,
nome_projeto VARCHAR(255) NOT NULL,
data_inicio DATE NOT NULL,
data_prevista_termino DATE NOT NULL,
data_termino_real DATE,
status_projeto ENUM('Em andamento', 'Em testes', 'Finalizado') NOT NULL,
horas_precistas INT NOT NULL,
horas_reais INT,
FOREIGN KEY (id_equipe) REFERENCES equipes(id_equipe));
SHOW TABLES;

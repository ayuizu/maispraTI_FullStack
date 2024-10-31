-- --------------------------
-- Dado o modelo relacional abaixo que visa resolver uma alocação de alunos.

-- Respondam as perguntas usando comandos SQL que atendem o solicitado:

-- ALUNO (aluno_id, nome, curso, nivel, idade)
-- TURMA (turma_id, nometurma, sala, horario)
-- MATRÍCULA (matricula_id, aluno_id, turma_id, nota_1, nota_2, nota_3, nota_fiscal, nr_faltas)

-- 1. Quais os nomes de todos os alunos?
-- 2. Quais os números das matrículas dos alunos?
-- 3. Quais os números das matrículas dos alunos que não estão matriculados em uma turma?
-- 4. Quais os números dos alunos matriculados em uma turma do número "30"?
-- 5. Qual o horário da turma do aluno "Perna Longa"?
-- 6. Quais os nomes dos alunos  matriculados em uma turma de número "30"?
-- 7. Quais os nomes dos alunos que não estão matriculados em uma turma de número "30"?
-- 8. Quais os nomes das turmas com alunos com uma nota final maior que 8?
-- ---------------------------

CREATE DATABASE Escola;
USE Escola;

CREATE TABLE Aluno(
	aluno_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(100),
    curso VARCHAR(100),
    nivel INT,
    idade INT);
CREATE TABLE Turma(
	turma_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nomeTurma VARCHAR(50),
    sala VARCHAR(10),
    horario TIME);
    
CREATE TABLE Matricula(
	matricula_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    aluno_id INT,
    turma_id INT,
    nota_1 DECIMAL(10,2),
    nota_2 DECIMAL(10,2),
    nota_3 DECIMAL(10,2),
    nota_fiscal INT,
    nr_faltas INT,
    CONSTRAINT fk_matricula_aluno FOREIGN KEY (aluno_id) REFERENCES Aluno(aluno_id),
    CONSTRAINT fk_matricula_turma FOREIGN KEY (turma_id) REFERENCES Turma(turma_id));
    
    
INSERT INTO Aluno (nome, curso, nivel, idade) VALUES
	('Perna Longa', 'Engenharia da Computação', 4, 22),
	('Ana Silva', 'Administração', 1, 18),
	('Carlos Pereira', 'Medicina', 3, 21),
	('João Santos', 'Direito', 2, 19),
	('Mariana Oliveira', 'Arquitetura', 4, 23),
	('Lucas Martins', 'Engenharia Civil', 2, 20),
	('Fernanda Costa', 'Psicologia', 3, 22),
	('Ricardo Souza', 'Ciência da Computação', 1, 18),
	('Bruna Almeida', 'Educação Física', 4, 24),
	('Paulo Lima', 'Jornalismo', 2, 19),
    ('Gabriel Souza', 'Engenharia Mecânica', 3, 21),
	('Larissa Mendes', 'Enfermagem', 2, 20),
	('Thiago Silva', 'Matemática', 1, 18),
	('Vanessa Costa', 'Pedagogia', 4, 23),
	('Bruno Oliveira', 'Física', 3, 22),
	('Patrícia Lima', 'Letras', 2, 19),
	('Marcelo Ferreira', 'Química', 1, 18),
	('Amanda Rocha', 'História', 3, 21),
	('Felipe Nogueira', 'Biologia', 4, 24),
	('Carolina Almeida', 'Geografia', 2, 20),
	('Andre Muller','Engenharia da Computação',4,26);
    
SELECT * FROM Aluno;
    
INSERT INTO Turma (nomeTurma, sala, horario) VALUES
	('10', 'A101', '08:00:00'),
	('20', 'B202', '09:30:00'), 
    ('30', 'C303', '10:00:00'), 
    ('40', 'D404', '11:00:00'), 
    ('50', 'E505', '12:30:00'), 
    ('60', 'F606', '14:00:00'), 
    ('70', 'G707', '15:30:00'), 
    ('80', 'H808', '16:00:00'), 
    ('90', 'I909', '17:00:00'), 
    ('100', 'J010', '18:30:00');
INSERT INTO Matricula (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_fiscal, nr_faltas) VALUES
	(1, 1, 7.5, 8.0, 9.0, 9, 2),
	(2, 2, 6.5, 7.0, 8.5, 8, 3),
	(3, 3, 9.0, 9.5, 10.0, 10, 1),
	(4, 4, 5.0, 6.0, 7.0, 7, 4),
	(5, 5, 8.0, 8.5, 9.5, 9, 2),
	(6, 6, 6.0, 7.5, 8.0, 8, 3),
	(7, 7, 7.0, 8.0, 9.0, 9, 1),
	(8, 8, 4.5, 6.5, 7.5, 7, 5),
	(9, 9, 9.0, 9.5, 10.0, 10, 0),
	(10, 10, 5.5, 6.0, 7.0, 7, 4),
	(11, 1, 8.5, 9.0, 9.5, 9, 1),
	(12, 2, 7.0, 7.5, 8.0, 8, 2),
	(13, 3, 9.0, 8.5, 9.5, 9, 0),
	(14, 4, 6.0, 7.0, 7.5, 8, 3),
	(15, 5, 7.5, 8.0, 8.5, 8, 2),
	(16, 6, 5.0, 6.5, 7.0, 7, 4),
	(17, 7, 8.0, 8.5, 9.0, 9, 1),
	(18, 8, 6.5, 7.0, 7.5, 7, 3),
	(19, 9, 9.5, 9.0, 9.5, 10, 0),
    (20, 10, 7.5, 7.0, 6.5, 10, 5),
	(1, 3, 6.5, 8.0, 9.0, 9, 2),
	(2, 4, 5.5, 7.0, 8.5, 8, 3),
	(3, 5, 8.0, 9.5, 10.0, 10, 1),
	(4, 6, 7.0, 6.0, 7.0, 7, 4),
	(5, 7, 7.0, 8.5, 9.5, 9, 2),
	(6, 8,8.0, 7.5, 8.0, 8, 3),
	(7, 9, 9.0, 8.0, 9.0, 9, 1),
	(8, 10, 8.5, 6.5, 7.5, 7, 5),
	(9, 1, 9.0, 9.5, 10.0, 10, 0),
	(10, 2, 5.5, 6.0, 7.0, 7, 4),
	(11, 3, 8.5, 9.0, 9.5, 9, 1),
	(12, 4, 7.0, 7.5, 8.0, 8, 2),
	(13, 5, 8.0, 8.5, 9.5, 9, 0),
	(14, 6, 6.0, 8.0, 7.5, 8, 3),
	(15, 7, 7.5, 8.0, 8.5, 8, 2),
	(16, 8, 5.0, 6.5, 7.0, 7, 4),
	(17, 9, 8.0, 8.5, 9.0, 9, 1),
	(18, 10, 6.5, 7.0, 7.5, 7, 3),
	(19, 1, 9.5, 9.0, 9.5, 10, 0),
    (20, 2, 7.5, 7.0, 6.5, 10, 5),
	(5, 1, 7.5, 8.0, 9.0, 9, 2),
	(6, 2, 6.5, 7.0, 8.5, 8, 3),
	(7, 3, 9.0, 9.5, 10.0, 10, 1),
	(8, 4, 5.0, 6.0, 7.0, 7, 4),
	(9, 5, 8.0, 8.5, 9.5, 9, 2),
	(10, 6, 6.0, 7.5, 8.0, 8, 3),
	(11, 7, 7.0, 8.0, 9.0, 9, 1),
	(12, 8, 4.5, 6.5, 7.5, 7, 5),
	(13, 9, 9.0, 9.5, 10.0, 10, 0),
	(14, 10, 5.5, 6.0, 7.0, 7, 4),
	(15, 1, 8.5, 9.0, 9.5, 9, 1),
	(16, 2, 7.0, 7.5, 8.0, 8, 2),
	(17, 3, 9.0, 8.5, 9.5, 9, 0),
	(18, 4, 6.0, 7.0, 7.5, 8, 3),
	(18, 5, 7.5, 8.0, 8.5, 8, 2),
	(20, 6, 5.0, 6.5, 7.0, 7, 4),
	(1, 7, 8.0, 8.5, 9.0, 9, 1),
	(2, 8, 6.5, 7.0, 7.5, 7, 3),
	(3, 9, 9.5, 9.0, 9.5, 10, 0),
    (4, 10, 7.5, 7.0, 6.5, 10, 5),
	(5, 3, 6.5, 8.0, 9.0, 9, 2),
	(6, 4, 5.5, 7.0, 8.5, 8, 3),
	(7, 5, 8.0, 9.5, 10.0, 10, 1),
	(8, 6, 7.0, 6.0, 7.0, 7, 4),
	(9, 7, 7.0, 8.5, 9.5, 9, 2),
	(10, 8,8.0, 7.5, 8.0, 8, 3),
	(11, 9, 9.0, 8.0, 9.0, 9, 1),
	(11, 10, 8.5, 6.5, 7.5, 7, 5),
	(12, 1, 9.0, 9.5, 10.0, 10, 0),
	(13, 2, 5.5, 6.0, 7.0, 7, 4),
	(14, 3, 8.5, 9.0, 9.5, 9, 1),
	(15, 4, 7.0, 7.5, 8.0, 8, 2),
	(16, 5, 8.0, 8.5, 9.5, 9, 0),
	(17, 6, 6.0, 8.0, 7.5, 8, 3),
	(18, 7, 7.5, 8.0, 8.5, 8, 2),
	(19, 8, 5.0, 6.5, 7.0, 7, 4),
	(20, 9, 8.0, 8.5, 9.0, 9, 1),
	(1, 10, 6.5, 7.0, 7.5, 7, 3),
	(2, 1, 9.5, 9.0, 9.5, 10, 0),
    (3, 2, 7.5, 7.0, 6.5, 10, 5);

SELECT * FROM Matricula;
DROP TABLE Matricula;

-- 1. Qual o nome de todos os alunos?
SELECT nome FROM Aluno;

-- 2. Quais os números das matrículas dos alunos?
SELECT nome, aluno_id FROM Aluno;

-- 3. Quais os números das matrículas dos alunos que não estão matriculados em uma turma?    
SELECT Aluno.nome, Aluno.aluno_id FROM Aluno
	LEFT JOIN Matricula ON Aluno.aluno_id = Matricula.aluno_id
    WHERE Matricula.turma_id IS NULL;
    
-- 4. Quais os números dos alunos matriculados em uma turma do número "30"?
SELECT Aluno.aluno_id, Aluno.nome, Turma.nometurma FROM Aluno 
INNER JOIN Matricula ON Aluno.aluno_id = Matricula.aluno_id
INNER JOIN Turma ON Matricula.turma_id = Turma.turma_id
	WHERE Turma.nometurma='30';
    
-- 5. Qual o horário da turma do aluno "Perna Longa"?
SELECT Aluno.nome, Turma.nomeTurma, Turma.horario FROM Aluno 
INNER JOIN Matricula ON Aluno.aluno_id = Matricula.aluno_id
INNER JOIN Turma ON Matricula.turma_id = Turma.turma_id
	WHERE Aluno.nome='Perna Longa';
    
-- 6. Quais os nomes dos alunos matriculados em uma turma de número "30"?
SELECT Aluno.nome, Aluno.aluno_id, Turma.nometurma FROM Aluno 
INNER JOIN Matricula ON Aluno.aluno_id = Matricula.aluno_id
INNER JOIN Turma ON Matricula.turma_id = Turma.turma_id
	WHERE Turma.nometurma='30';
    
-- 7. Quais os nomes dos alunos que não estão matriculados em uma turma de número "30"?    
SELECT Aluno.nome FROM Matricula 
INNER JOIN Turma ON Matricula.turma_id = Turma.turma_id AND Turma.nomeTurma='30'
RIGHT JOIN Aluno ON Aluno.aluno_id = Matricula.aluno_id
	WHERE Turma.nomeTurma IS NULL;
    
-- 8. Quais os nomes das turmas com alunos com uma nota final maior que 8?
SELECT DISTINCT Turma.nomeTurma FROM Turma
	RIGHT JOIN Matricula ON Turma.turma_id = Matricula.turma_id 
    WHERE (Matricula.nota_1 + Matricula.nota_2 + Matricula.nota_3)/3 > 8.0;
    
    
SELECT * FROM Aluno;
SELECT * FROM Turma;
SELECT * FROM Matricula;
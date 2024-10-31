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

CREATE TABLE Alunos(
	aluno_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(100) NOT NULL,
    curso VARCHAR(100),
    nivel VARCHAR(20),
    idade INT);
    
CREATE TABLE Turmas(
	turma_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nomeTurma VARCHAR(50) NOT NULL,
    sala VARCHAR(10),
    horario TIME);
    
CREATE TABLE Matriculas(
	matricula_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    aluno_id INT NOT NULL,
    turma_id INT NOT NULL,
    nota_1 DECIMAL(10,2),
    nota_2 DECIMAL(10,2),
    nota_3 DECIMAL(10,2),
    nota_final DECIMAL(10,2),
    nr_faltas INT,
    CONSTRAINT fk_matricula_aluno FOREIGN KEY (aluno_id) REFERENCES Alunos(aluno_id) ON DELETE CASCADE,
    CONSTRAINT fk_matricula_turma FOREIGN KEY (turma_id) REFERENCES Turmas(turma_id) ON DELETE CASCADE);
    
    
INSERT INTO Alunos (nome, curso, nivel, idade) VALUES
	('Perna Longa', 'Engenharia da Computação', 'Mestrado', 22),
	('Ana Silva', 'Administração', 'Graduação', 18),
	('Carlos Pereira', 'Medicina', 'Graduação', 21),
	('João Santos', 'Direito', 'Graduação', 19),
	('Mariana Oliveira', 'Arquitetura', 'Doutorado', 26),
	('Lucas Martins', 'Engenharia Civil', 'Graduação', 29),
	('Fernanda Costa', 'Psicologia', 'Graduação', 22),
	('Ricardo Souza', 'Ciência da Computação', 'Mestrado', 28),
	('Bruna Almeida', 'Educação Física', 'Graduação', 24),
	('Paulo Lima', 'Jornalismo', 'Graduação', 19),
    ('Gabriel Souza', 'Engenharia Mecânica', 'Doutorado', 26),
	('Larissa Mendes', 'Enfermagem', 'Graduação', 20),
	('Thiago Silva', 'Matemática', 'Graduação', 18),
	('Vanessa Costa', 'Pedagogia', 'Mestrado', 23),
	('Bruno Oliveira', 'Física', 'Doutorado', 33),
	('Patrícia Lima', 'Letras', 'Graduação', 19),
	('Marcelo Ferreira', 'Química', 'Graduação', 18),
	('Amanda Rocha', 'História', 'Graduação', 21),
	('Felipe Nogueira', 'Biologia', 'Mestrado', 24),
	('Carolina Almeida', 'Geografia', 'Mestrado', 23),
	('Andre Muller','Engenharia da Computação','Graduação',26);
    
SELECT * FROM Alunos;
    
INSERT INTO Turmas (nomeTurma, sala, horario) VALUES
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
    
INSERT INTO Matriculas (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES
	(1, 1, 7.5, 8, 9, 8.17, 2),
	(2, 2, 6.5, 7, 8.5, 7.33, 3),
	(3, 3, 9, 9.5, 10, 9.5, 1),
	(4, 4, 5, 6, 7, 6, 4),
	(5, 5, 8, 8.5, 9.5, 8.67, 2),
	(6, 6, 6, 7.5, 8, 7.17, 3),
	(7, 7, 7, 8, 9, 8, 1),
	(8, 8, 4.5, 6.5, 7.5, 6.17, 5),
	(9, 9, 9, 9.5, 10, 9.5, 0),
	(10, 10, 9.9, 6, 7, 7.63, 4),
	(11, 1, 8.5, 9, 9.5, 9, 1),
	(12, 2, 7, 7.5, 8, 7.5, 2),
	(13, 3, 9, 8.5, 9.5, 9, 0),
	(14, 4, 6, 7, 7.5, 6.83, 3),
	(15, 5, 7.5, 8, 8.5, 8, 2),
	(16, 6, 5, 6.5, 7, 6.17, 4),
	(17, 7, 8, 8.5, 9, 8.5, 1),
	(18, 8, 6.5, 7, 7.5, 7, 3),
	(19, 9, 9.5, 9, 9.5, 9.33, 0),
	(20, 10, 7.5, 7, 6.5, 7, 5),
	(1, 3, 6.5, 8, 9, 7.83, 2),
	(2, 4, 5.5, 7, 8.5, 7, 3),
	(3, 5, 8, 9.5, 10, 9.17, 1),
	(4, 6, 4.5, 6, 7, 5.83, 4),
	(5, 7, 7, 8.5, 9.5, 8.33, 2),
	(6, 8, 8, 7.5, 8, 7.83, 3),
	(7, 9, 9, 8, 9, 8.67, 1),
	(8, 10, 8.5, 6.5, 7.5, 7.5, 5),
	(9, 1, 9, 9.5, 10, 9.5, 0),
	(10, 2, 5.5, 6, 7, 6.17, 4),
	(11, 3, 8.5, 9, 9.5, 9, 1),
	(12, 4, 7, 7.5, 8, 7.5, 2),
	(13, 5, 8, 8.5, 9.5, 8.67, 0),
	(14, 6, 6, 8, 7.5, 7.17, 3),
	(15, 7, 7.5, 8, 8.5, 8, 2),
	(16, 8, 5, 6.5, 7, 6.17, 4),
	(17, 9, 8, 8.5, 9, 8.5, 1),
	(18, 10, 6.5, 7, 7.5, 7, 3),
	(19, 1, 9.5, 9, 9.5, 9.33, 0),
	(20, 2, 7.5, 7, 6.5, 7, 5),
	(5, 1, 7.5, 8, 9, 8.17, 2),
	(6, 2, 6.5, 7, 8.5, 7.33, 3),
	(7, 3, 9, 9.5, 10, 9.5, 1),
	(8, 4, 5, 6, 7, 6, 4),
	(9, 5, 8, 8.5, 9.5, 8.67, 2),
	(10, 6, 6, 7.5, 8, 7.17, 3),
	(11, 7, 7, 8, 9, 8, 1),
	(12, 8, 4.5, 6.5, 7.5, 6.17, 5),
	(13, 9, 9, 9.5, 10, 9.5, 0),
	(14, 10, 5.5, 6, 7, 6.17, 4),
	(15, 1, 8.5, 9, 9.5, 9, 1),
	(16, 2, 7, 7.5, 8, 7.5, 2),
	(17, 3, 9, 8.5, 9.5, 9, 0),
	(18, 4, 6, 7, 7.5, 6.83, 3),
	(18, 5, 7.5, 8, 8.5, 8, 2),
	(20, 6, 5, 6.5, 7, 6.17, 4),
	(1, 7, 8, 8.5, 9, 8.5, 1),
	(2, 8, 6.5, 8.3, 7.5, 7.43, 3),
	(3, 9, 9.5, 9, 9.5, 9.33, 0),
	(4, 10, 8.9, 6.4, 4.5, 6.6, 5),
	(5, 3, 6.5, 8, 9, 7.83, 2),
	(6, 4, 5.5, 8.1, 8.5, 7.37, 3),
	(7, 5, 8, 9.5, 10, 9.17, 1),
	(8, 6, 7.4, 6, 7, 6.8, 4),
	(9, 7, 7, 8.5, 9.5, 8.33, 2),
	(10, 8, 8.1, 7.5, 8, 7.87, 3),
	(11, 9, 4.9, 8, 9, 7.3, 1),
	(11, 10, 8.5, 6.5, 7.5, 7.5, 5),
	(12, 1, 9, 9.5, 10, 9.5, 0),
	(13, 2, 5.5, 6, 7, 6.17, 4),
	(14, 3, 8.5, 9, 9.5, 9, 1),
	(15, 4, 7, 7.5, 8, 7.5, 2),
	(16, 5, 8, 8.5, 9.5, 8.67, 0),
	(17, 6, 6, 8, 7.5, 7.17, 3),
	(18, 7, 7.5, 8, 8.5, 8, 2),
	(19, 8, 5, 6.5, 7, 6.17, 4),
	(20, 9, 8, 8.5, 9, 8.5, 1),
	(1, 10, 6.5, 7.1, 7.5, 7.03, 3),
	(2, 1, 9.5, 9, 9.5, 9.33, 0),
	(3, 2, 4.5, 5, 8, 5.83, 5);

SELECT * FROM Matriculas;

-- 1. Qual o nome de todos os alunos?
SELECT nome FROM Alunos;

-- 2. Quais os números das matrículas dos alunos?
SELECT aluno_id, nome FROM Alunos;

-- 3. Quais os números das matrículas dos alunos que não estão matriculados em uma turma?    
SELECT A.aluno_id FROM Alunos A
	LEFT JOIN Matriculas M ON A.aluno_id = M.aluno_id
    WHERE M.turma_id IS NULL;
    
-- 4. Quais os números dos alunos matriculados em uma turma do número "30"?
SELECT A.aluno_id FROM Alunos A
INNER JOIN Matriculas M ON A.aluno_id = M.aluno_id
INNER JOIN Turmas T ON M.turma_id = T.turma_id
	WHERE T.nometurma='30';
    
-- 5. Qual o horário da turma do aluno "Perna Longa"?
SELECT T.horario FROM Alunos A 
INNER JOIN Matriculas M ON A.aluno_id = M.aluno_id
INNER JOIN Turmas T ON M.turma_id = T.turma_id
	WHERE A.nome='Perna Longa';
    
-- 6. Quais os nomes dos alunos matriculados em uma turma de número "30"?
SELECT A.nome FROM Alunos A 
INNER JOIN Matriculas M ON A.aluno_id = M.aluno_id
INNER JOIN Turmas T ON M.turma_id = T.turma_id
	WHERE T.nometurma='30';
    
-- 7. Quais os nomes dos alunos que não estão matriculados em uma turma de número "30"?    
SELECT A.nome FROM Matriculas M 
INNER JOIN Turmas T ON M.turma_id = T.turma_id AND T.nomeTurma='30'
RIGHT JOIN Alunos A ON A.aluno_id = M.aluno_id
	WHERE T.nomeTurma IS NULL;
    
-- 8. Quais os nomes das turmas com alunos com uma nota final maior que 8?
SELECT DISTINCT T.nomeTurma FROM Turmas T
	RIGHT JOIN Matriculas M ON T.turma_id = M.turma_id 
    WHERE M.nota_final > 8.0;
    
    
SELECT * FROM Aluno;
SELECT * FROM Turma;
SELECT * FROM Matricula;
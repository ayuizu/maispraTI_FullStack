-- Estudo de Caso - Escola de Informática

-- Uma escola de informática deseja manter um controle do seu funcionamento. Os alunos são organizados em turmas associadas a um tipo específico de curso.
-- As informações sobre uma turma são a quantidade de alunos, horário da aula, duração da aula, data inicial, data final e tipo de curso. Cada turma é
-- orientada por um único professor para o qual são cadastrados CPF, nome, data de nascimento, titulação e todos os telefones possíveis para sua localização.
-- Um professor pode orientar várias turmas que podem ser de diferentes cursos. Para cada turma existe um aluno monitor que auxilia o professor da turma,
-- sendo que um aluno pode ser monitor no máximo em uma turma. Os dados cadastrados dos alunos são: código de matricula, data de matrícula, nome, endereço,
-- telefone, data de nascimento, altura e peso. Um aluno pode estar matriculado em várias turmas se deseja realizar cursos diferentes e para cada matrícula é
-- mantido um registro das ausências do aluno.

-- 1) Crie o modelo ER físico que representa a Escola de Informática descrita. Este modelo deve conter todos os elementos/objetos de banco de dados que atendam as restrições descritas no enunciado: tabelas, colunas, tipos, nulidade, chaves primárias, chaves estrangeiras com cascade e índices únicos. Crie campos adicionais se julgares conveniente;
-- 2) Gere os scripts de criação da base de dados no MySQL;
-- 3) Inserir com SQL ao menos 3 tuplas em cada uma das tabelas criadas;
-- 4) Fazer consultas SQL que respondam as seguintes questões:
-- 4.1) Listar os dados dos alunos;
-- 4.2) Listar os dados dos alunos e as turmas que eles estão matriculados;
-- 4.3) Listar os alunos que não possuem faltas;
-- 4.4) Listar os professores e a quantidade de turmas que cada um leciona;
-- 4.5) Listar nome dos professores, apenas um dos números de telefone do professor, dados (id da turma, data início, data fim e horário) das turmas que o professor leciona, curso da turma e alunos matriculados ordenado por nome do professor, id turma e nome do aluno;
-- 4.6) Listar os nomes dos professores e a turma que cada um leciona com maior número de alunos;  
-- 4.7) Listar os nomes dos alunos ordenados pela turma que estes possuem maior número de faltas. Deve aparecer apenas a turma que cada um dos alunos tem maior quantidade de faltas;
-- 4.8) Listar a quantidade média de alunos por curso.
-- 5) Fazer alterações nas tabelas:
-- 5.1) Alterar o nome de todos os professores para maiúsculo;
-- 5.2) Colocar o nome de todos os alunos que estão na turma com o maior número de alunos em maiúsculo;
-- 6) Excluir as ausências dos alunos nas turmas que estes são monitores;

CREATE DATABASE EscolaInformatica;
USE EscolaInformatica;

CREATE TABLE Cursos(
	curso_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    curso_nome VARCHAR(50) NOT NULL);
    
CREATE TABLE Alunos(
	aluno_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(100) NOT NULL,
    data_matricula DATE NOT NULL,
    telefone VARCHAR(15),
    data_nascimento DATE NOT NULL,
    altura DECIMAL(10,2),
    peso DECIMAL(10,2)
);

CREATE TABLE EnderecosAluno(
	end_aluno_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	logradouro VARCHAR(100) NOT NULL,
    numero VARCHAR(10) NOT NULL,
    complemento VARCHAR(30),
    bairro VARCHAR(50) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    estado VARCHAR(50) NOT NULL,
    cep VARCHAR(10) NOT NULL,
    aluno_id INT NOT NULL,
    CONSTRAINT fk_endereco_aluno FOREIGN KEY (aluno_id) REFERENCES Alunos(aluno_id) ON DELETE CASCADE);
    
CREATE TABLE Professores(
	professor_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    cpf VARCHAR(10) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    data_nascimento DATE NOT NULL);

CREATE TABLE TelefonesProfessor(
	telefone_prof_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    tipo ENUM('Residencial','Celular','Comercial'),
    numero VARCHAR(20) NOT NULL,
    professor_id INT NOT NULL,
    CONSTRAINT fk_telprof_professor FOREIGN KEY (professor_id) REFERENCES Professores(professor_id) ON DELETE CASCADE);
    
CREATE TABLE Turmas(
	turma_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    qtd_alunos INT NOT NULL,
    horario TIME NOT NULL,
    data_inicial DATE NOT NULL,
    data_final DATE,
    tipo_curso INT NOT NULL,
    professor_id INT,
    monitor_id INT,
    CONSTRAINT fk_turma_curso FOREIGN KEY (tipo_curso) REFERENCES Cursos(curso_id) ON DELETE CASCADE,
    CONSTRAINT fk_turma_professor FOREIGN KEY (professor_id) REFERENCES Professores(professor_id),
    CONSTRAINT fk_turma_monitor FOREIGN KEY (monitor_id) REFERENCES Alunos(aluno_id)
    );
    
CREATE TABLE Matriculas(
	matricula_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    numero_faltas INT NOT NULL,
    aluno_id INT NOT NULL,
    turma_id INT NOT NULL,
    CONSTRAINT fk_matricula_aluno FOREIGN KEY (aluno_id) REFERENCES Alunos(aluno_id),
    CONSTRAINT fk_matricula_turma FOREIGN KEY (turma_id) REFERENCES Turmas(turma_id));
    
INSERT INTO Cursos(curso_nome) VALUES 
	('Desenvolvimento Web'),
	('Banco de Dados'),
	('Programação Java'),
	('Redes de Computadores'),
	('Segurança da Informação');
    
INSERT INTO Alunos (nome, data_matricula, telefone, data_nascimento, altura, peso) VALUES 
	('João Silva', '2024-01-15', '99999-9999', '2000-05-10', 1.75, 72.5),
	('Maria Oliveira', '2024-02-10', '98888-8888', '1998-11-22', 1.65, 58.2),
	('Carlos Santos', '2024-03-05', '97777-7777', '1999-02-17', 1.80, 80.0),
	('Ana Souza', '2024-04-18', '96666-6666', '2001-07-09', 1.60, 60.3),
	('Paulo Mendes', '2024-05-20', '95555-5555', '1997-09-25', 1.78, 75.1),
	('Camila Santos','2024-02-29','99000-9999','1994-09-27',1.61,56),
	('Raquel Pereira','2023-07-01','98809-0893','1993-10-31',1.74,67.9),
	('Perna Longa','2021-01-04','93849-2342','1968-03-31',1.65,45.3),
	('Lelouch Lamperouge','2022-10-08','90000-0009','2000-12-05',1.86,71.1);
    
INSERT INTO EnderecosAluno (logradouro, numero, complemento, bairro, cidade, estado, cep, aluno_id) VALUES 
	('Rua das Flores', '123', 'Apto 101', 'Centro', 'São Paulo', 'SP', '12345-678', 1),
	('Av. Paulista', '1000', NULL, 'Bela Vista', 'São Paulo', 'SP', '98765-432', 2),
	('Rua Amazonas', '500', 'Bloco B', 'Vila Nova', 'Rio de Janeiro', 'RJ', '87654-321', 3),
	('Rua Bahia', '250', 'Casa 2', 'Copacabana', 'Rio de Janeiro', 'RJ', '76543-210', 4),
	('Av. Brasil', '3000', NULL, 'Centro', 'Belo Horizonte', 'MG', '65432-109', 5),
    ('Av. Osvaldo Aranha','94',NULL,'Bom Fim','Porto Alegre','RS','90010-000',6),
    ('Rua Casemiro de Abreu','890','Apto 706','Rio Branco','Porto Alegre','RS','90020-000',7),
    ('Av. Britannia','11','NULL','Nova Londres','Sao Paulo','SP','01120-000',8);
    
INSERT INTO Professores (cpf, nome, data_nascimento) VALUES 
	('1234567890', 'José Pereira', '1975-06-10'),
	('0987654321', 'Clara Alves', '1980-08-22'),
	('5678901234', 'Ricardo Lima', '1985-12-15'),
	('3456789012', 'Sandra Costa', '1990-01-05'),
	('7890123456', 'Bruno Ferreira', '1978-03-18');
    
INSERT INTO TelefonesProfessor (tipo, numero, professor_id) VALUES 
	('Celular', '99999-1111', 1),
	('Residencial', '3222-1111', 1),
	('Comercial', '3333-2222', 2),
	('Celular', '98888-3333', 3),
	('Celular', '97777-4444', 4),
	('Comercial', '3666-5555', 5);
    
INSERT INTO Turmas (qtd_alunos, horario, data_inicial, data_final, tipo_curso, professor_id, monitor_id) VALUES 
	(30, '18:00:00', '2024-05-10', '2024-09-10', 1, 1, 2),
	(25, '09:00:00', '2024-06-15', '2024-11-15', 2, 2, 3),
	(20, '14:00:00', '2024-07-20', NULL, 3, 3, 4),
	(15, '19:00:00', '2024-08-01', '2024-12-01', 4, 4, 5),
	(10, '10:00:00', '2024-09-01', NULL, 5, 5, 1),
	(25, '08:00:00', '2024-01-10', '2024-06-10', 1, 1, 6),
	(35, '10:30:00', '2024-02-15', '2024-07-15', 2, 2, 7),
	(20, '13:00:00', '2024-03-01', '2024-08-01', 3, 3, 8);

INSERT INTO Matriculas (numero_faltas, aluno_id, turma_id) VALUES 
	(2, 1, 1),
	(0, 2, 1),
	(1, 3, 2),
	(4, 4, 3),
	(3, 5, 4),
    (7, 6, 4),
    (0, 7, 5),
    (5, 8, 1),
    (0, 1, 2),
    (3, 2, 2),
    (0, 3, 5),
    (3, 4, 4),
    (7, 5, 1),
    (2, 6, 1),
    (1, 7, 1),
    (0, 1, 3),
	(8, 3, 6),
    (7, 2, 8),
    (4, 6, 8),
    (0, 8, 8),
    (3, 5, 7),
    (1, 5, 3),
    (0, 3, 3),
    (2 ,9 ,5);
    
-- 4.1) Listar os dados dos alunos;
SELECT * FROM Alunos A INNER JOIN EnderecosAluno E ON A.aluno_id = E.aluno_id;

-- 4.2) Listar os dados dos alunos e as turmas que eles estão matriculados;
SELECT A.aluno_id, A.nome, T.turma_id, C.curso_nome FROM Alunos A
	INNER JOIN Matriculas M ON A.aluno_id = M.aluno_id
	INNER JOIN Turmas T ON M.turma_id = T.turma_id
	INNER JOIN Cursos C ON T.tipo_curso = C.curso_id
	ORDER BY A.aluno_id;
    
-- 4.3) Listar os alunos que não possuem faltas;
SELECT A.aluno_id, A.nome, M.matricula_id, M.turma_id, M.numero_faltas FROM Alunos A INNER JOIN Matriculas M ON A.aluno_id = M.aluno_id
	WHERE M.numero_faltas=0;
    
-- 4.4) Listar os professores e a quantidade de turmas que cada um leciona;
SELECT P.professor_id, P.nome, T.turma_id, C.curso_nome FROM Professores P
INNER JOIN Turmas T ON P.professor_id = T.professor_id
INNER JOIN Cursos C ON T.tipo_curso = C.curso_id;

-- 4.5) Listar nome dos professores, apenas um dos números de telefone do professor, dados (id da turma, data início, data fim e horário) das turmas
-- que o professor leciona, curso da turma e alunos matriculados ordenado por nome do professor, id turma e nome do aluno;
SELECT P.professor_id, P.nome AS professor_nome, MIN(TP.numero) AS professor_telefone, T.turma_id, C.curso_nome, T.data_inicial, T.data_final, T.horario, A.aluno_id, A.nome FROM Professores P
	LEFT JOIN TelefonesProfessor TP ON P.professor_id = TP.professor_id
	INNER JOIN Turmas T ON P.professor_id = T.professor_id
	INNER JOIN Cursos C ON T.tipo_curso = C.curso_id
	INNER JOIN Matriculas M ON T.turma_id = M.turma_id
	INNER JOIN Alunos A ON M.aluno_id = A.aluno_id
	GROUP BY -- todas as colunas que não estão em uma função agregada (sem MIN())
		P.professor_id, P.nome, T.turma_id, C.curso_nome, T.data_inicial, T.data_final, T.horario, A.aluno_id, A.nome
	ORDER BY P.professor_id, T.turma_id, A.nome;

-- 4.6) Listar os nomes dos professores e a turma que cada um leciona com maior número de alunos;  

SELECT P.professor_id, P.nome, T.turma_id AS MaiorTurma, COUNT(M.aluno_id) as NumAlunos FROM Professores P
	INNER JOIN Turmas T ON P.professor_id = T.professor_id
	INNER JOIN Matriculas M ON T.turma_id = M.turma_id
	GROUP BY P.professor_id, P.nome, T.turma_id
	-- subconsulta que encontra o maior número de alunos por professor e turma: COUNT(M.aluno_id) = MAX(qtd_alunos)
    HAVING COUNT(M.aluno_id) = (
		SELECT MAX(qtd_alunos) FROM (
				SELECT COUNT(M2.aluno_id) AS qtd_alunos FROM Turmas T2
				INNER JOIN Matriculas M2 ON T2.turma_id = M2.turma_id
				WHERE T2.professor_id = P.professor_id
				GROUP BY T2.turma_id
				) AS max_qtd
            )
	ORDER BY P.professor_id;
    
-- 4.7) Listar os nomes dos alunos ordenados pela turma que estes possuem maior número de faltas.
-- Deve aparecer apenas a turma que cada um dos alunos tem maior quantidade de faltas;

SELECT A.aluno_id, A.nome, M.numero_faltas, T.turma_id, C.curso_nome FROM Alunos A
	INNER JOIN Matriculas M ON A.aluno_id = M.aluno_id
    INNER JOIN Turmas T ON M.turma_id = T.turma_id
    INNER JOIN Cursos C ON T.tipo_curso = C.curso_id
    GROUP BY A.aluno_id, M.matricula_id, T.turma_id, C.curso_id
    HAVING M.numero_faltas = (
		SELECT MAX(numero_faltas) FROM Matriculas M2 INNER JOIN Alunos A2 ON A2.aluno_id = M2.aluno_id WHERE A2.aluno_id = A.aluno_id)
	ORDER BY A.aluno_id;

-- 4.8) Listar a quantidade média de alunos por curso. 
SELECT curso_nome, AVG(num_alunos_turma) AS Media_Num_Alunos FROM(
	-- Não dá apra usarAVG(COUNT(..)) >> subconsulta
	SELECT C.curso_nome, COUNT(M.aluno_id) AS num_alunos_turma FROM Matriculas M
	INNER JOIN Turmas T ON M.turma_id = T.turma_id
    INNER JOIN Cursos C ON T.tipo_curso = C.curso_id
    GROUP BY C.curso_nome, T.turma_id
    ) AS AlunosPorTurma
    GROUP BY curso_nome;


-- 5.1) Alterar o nome de todos os professores para maiúsculo;
-- SELECT UPPER(nome) FROM Professor;
UPDATE Professores SET nome = UPPER(nome) WHERE professor_id > 0;
SELECT * FROM Professores;

-- 5.2) Colocar o nome de todos os alunos que estão na turma com o maior número de alunos em maiúsculo;
-- Matriculados ou maximo?
-- Turma com maior numero de alunos MATRICULADOS
SET @turma_maior_qtd:=(
	SELECT T.turma_id FROM Turmas T INNER JOIN Matriculas M ON T.turma_id = M.turma_id
	GROUP BY T.turma_id
	ORDER BY COUNT(M.aluno_id) DESC
	LIMIT 1);
SELECT A.nome FROM Alunos A INNER JOIN Matriculas M ON A.aluno_id = M.aluno_id
	WHERE M.Turma_id = @turma_maior_qtd;
UPDATE Alunos A SET nome=UPPER(nome)
	WHERE A.aluno_id LIKE (SELECT M.aluno_id FROM Matriculas M WHERE M.turma_id = @turma_maior_qtd);
    
-- Turma com maior numero de alunos CAPACIDADE
SET @turma_maior_cpc:= (SELECT T.turma_id FROM Turmas T 
	ORDER BY qtd_alunos DESC
	LIMIT 1);
SELECT A.nome FROM Alunos A INNER JOIN Matriculas M ON A.aluno_id = M.aluno_id
	WHERE M.Turma_id = @turma_maior_cpc;
    
    
-- 6) Excluir as ausências dos alunos nas turmas que estes são monitores

SELECT * FROM Alunos;
SELECT * FROM Professores;
SELECT * FROM Cursos;
SELECT * FROM Turmas;
SELECT * FROM Matriculas;

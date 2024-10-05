/* Lógico_2: */

CREATE TABLE Recurso (
    Numero_Registro INTEGER PRIMARY KEY,
    Nome_Recurso VARCHAR,
    Salario DOUBLE,
    Data_Reajuste DATE,
    Valor_Reajuste DOUBLE,
    Telefone_Residencial VARCHAR,
    Cargo VARCHAR,
    Rua VARCHAR,
    Numero VARCHAR,
    Cidade VARCHAR,
    Estado VARCHAR,
    CEP VARCHAR,
    Complemento VARCHAR,
    Telefone_Celular VARCHAR,
    Telefone_Comercial VARCHAR,
    Ramal_Interno VARCHAR,
    fk_Equipe_Codigo_Equipe INTEGER,
    fk_Cargo_Codigo_Cargo INTEGER
);

CREATE TABLE Equipe (
    Nome_Equipe VARCHAR,
    Numero_Recursos INTEGER,
    Codigo_Equipe INTEGER PRIMARY KEY
);

CREATE TABLE Projeto (
    Codigo_Projeto INTEGER PRIMARY KEY,
    Nome_Projeto VARCHAR,
    Data_Final_Previsao DATE,
    Data_Final_Real DOUBLE,
    Num_Horas_Previstas DOUBLE,
    Status VARCHAR,
    Data_Inicio DATE,
    Num_Horas_Real DOUBLE,
    fk_Equipe_Codigo_Equipe INTEGER,
    fk_Recurso_Numero_Registro INTEGER
);

CREATE TABLE Atividades (
    Codigo_Atividade INTEGER PRIMARY KEY,
    Descricao_Atividade VARCHAR
);

CREATE TABLE Tarefas (
    Codigo_Tarefa INTEGER PRIMARY KEY,
    Descricao_Tarefa VARCHAR,
    fk_Atividades_Codigo_Atividade INTEGER
);

CREATE TABLE Ferramentas de Programação (
    Nome_Ferramenta VARCHAR,
    Versao_Ferramenta VARCHAR,
    Codigo_Ferramenta INTEGER PRIMARY KEY
);

CREATE TABLE Cargo (
    Nome_Cargo VARCHAR,
    Codigo_Cargo INTEGER PRIMARY KEY,
    Salario DOUBLE
);

CREATE TABLE Composto (
    fk_Atividades_Codigo_Atividade INTEGER,
    fk_Projeto_Codigo_Projeto INTEGER
);

CREATE TABLE Conhece (
    fk_Ferramentas de Programação_Codigo_Ferramenta INTEGER,
    fk_Recurso_Numero_Registro INTEGER
);
 
ALTER TABLE Recurso ADD CONSTRAINT FK_Recurso_2
    FOREIGN KEY (fk_Equipe_Codigo_Equipe)
    REFERENCES Equipe (Codigo_Equipe)
    ON DELETE RESTRICT;
 
ALTER TABLE Recurso ADD CONSTRAINT FK_Recurso_3
    FOREIGN KEY (fk_Cargo_Codigo_Cargo)
    REFERENCES Cargo (Codigo_Cargo)
    ON DELETE CASCADE;
 
ALTER TABLE Projeto ADD CONSTRAINT FK_Projeto_2
    FOREIGN KEY (fk_Equipe_Codigo_Equipe)
    REFERENCES Equipe (Codigo_Equipe)
    ON DELETE RESTRICT;
 
ALTER TABLE Projeto ADD CONSTRAINT FK_Projeto_3
    FOREIGN KEY (fk_Recurso_Numero_Registro)
    REFERENCES Recurso (Numero_Registro)
    ON DELETE CASCADE;
 
ALTER TABLE Tarefas ADD CONSTRAINT FK_Tarefas_2
    FOREIGN KEY (fk_Atividades_Codigo_Atividade)
    REFERENCES Atividades (Codigo_Atividade)
    ON DELETE RESTRICT;
 
ALTER TABLE Composto ADD CONSTRAINT FK_Composto_1
    FOREIGN KEY (fk_Atividades_Codigo_Atividade)
    REFERENCES Atividades (Codigo_Atividade)
    ON DELETE RESTRICT;
 
ALTER TABLE Composto ADD CONSTRAINT FK_Composto_2
    FOREIGN KEY (fk_Projeto_Codigo_Projeto)
    REFERENCES Projeto (Codigo_Projeto)
    ON DELETE RESTRICT;
 
ALTER TABLE Conhece ADD CONSTRAINT FK_Conhece_1
    FOREIGN KEY (fk_Ferramentas de Programação_Codigo_Ferramenta)
    REFERENCES Ferramentas de Programação (Codigo_Ferramenta)
    ON DELETE SET NULL;
 
ALTER TABLE Conhece ADD CONSTRAINT FK_Conhece_2
    FOREIGN KEY (fk_Recurso_Numero_Registro)
    REFERENCES Recurso (Numero_Registro)
    ON DELETE SET NULL;
/* Lógico_Cinema: */

CREATE TABLE Cadeira (
    Tipo VARCHAR,
    Numero_Vip VARCHAR,
    Status VARCHAR,
    Ocupante_Nome VARCHAR,
    Ocupante_Idade INTEGER,
    Id_Cadeira INTEGER PRIMARY KEY,
    Num_Fileira INTEGER,
    Num_Cadeira_Fileira INTEGER,
    fk_Sala_Id_Sala INTEGER
);

CREATE TABLE Sala (
    Id_Sala INTEGER PRIMARY KEY,
    Numero_Fileiras INTEGER,
    Numero_Cadeiras_Fileira INTEGER,
    fk_Cinema_CNPJ VARCHAR
);

CREATE TABLE Cinema (
    CNPJ VARCHAR PRIMARY KEY
);
 
ALTER TABLE Cadeira ADD CONSTRAINT FK_Cadeira_2
    FOREIGN KEY (fk_Sala_Id_Sala)
    REFERENCES Sala (Id_Sala)
    ON DELETE RESTRICT;
 
ALTER TABLE Sala ADD CONSTRAINT FK_Sala_2
    FOREIGN KEY (fk_Cinema_CNPJ)
    REFERENCES Cinema (CNPJ)
    ON DELETE RESTRICT;
CREATE DATABASE BomGostoNovo;
USE BomGostoNovo;

CREATE TABLE Cardapio(
	item_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	descricao VARCHAR(150),
	preco DECIMAL(10,2)
);

CREATE TABLE Comanda(
	comanda_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    data_comanda DATE,
    numero_mesa INT,
    nome_cliente VARCHAR(100));
    
CREATE TABLE ItensComanda(
	itemComanda_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	ic_comanda_id INT,
	ic_item_id INT,
    ic_item_qtd INT,
	CONSTRAINT fk_ic_comanda_id FOREIGN KEY (ic_comanda_id) REFERENCES Comanda(comanda_id),
    CONSTRAINT fk_ic_item_id FOREIGN KEY (ic_item_id) REFERENCES Cardapio(item_id));
    
INSERT INTO Cardapio (descricao, preco) VALUES
	('Café Expresso', 4.50),
	('Café Americano', 5.00),
	('Café com Leite', 6.00),
	('Café Cappuccino', 6.50),
	('Café Mocha', 7.00), 
	('Café Macchiato', 6.00),
	('Café Latte', 6.50),
	('Café Caramel', 7.50),
	('Café Frappuccino', 8.00), 
	('Café Gelado', 5.50),
	('Bolo de Chocolate', 12.00), 
	('Bolo de Cenoura', 10.00), 
	('Bolo de Fubá', 9.50),
	('Bolo de Laranja', 9.00), 
	('Bolo de Limão', 10.50), 
	('Bolo Red Velvet', 15.00),
	('Bolo de Coco', 11.00),
	('Bolo de Morango', 14.00), 
	('Bolo de Maracujá', 12.50), 
	('Bolo de Banana', 10.00);
SELECT * FROM Cardapio;

INSERT INTO Comanda (data_comanda, numero_mesa,nome_cliente) VALUES
	('2024-10-01',1, 'João Silva'),
    ('2024-10-01',2, 'Maria Oliveira'),
    ('2024-10-02',3, 'Ana Souza'),
    ('2024-10-02',4, 'Carlos Pereira'),
    ('2024-10-03',5, 'Fernanda Lima'),
    ('2024-10-03',1, 'Ricardo Mendes'),
    ('2024-10-04',2, 'Laura Martins'),
    ('2024-10-04',3, 'Paulo Souza'),
    ('2024-10-05',4, 'Mariana Costa'),
    ('2024-10-05',5, 'Gabriel Santos'),
    ('2024-10-06',1, 'Bianca Rocha'),
    ('2024-10-06',2, 'Marcos Ferreira'),
    ('2024-10-07',3, 'Pedro Lima'),
    ('2024-10-07',4, 'Roberta Almeida'),
    ('2024-10-08',5, 'Thiago Nogueira'),
    ('2024-10-08',1, 'Lucas Ribeiro'),
    ('2024-10-09',2, 'Carla Martins'),
    ('2024-10-09',3, 'Felipe Gonçalves'),
    ('2024-10-09',4, 'Isabela Teixeira'),
    ('2024-10-10',5, 'Gustavo Melo'),
    ('2024-10-10',1, 'Sofia Fernandes'),
    ('2024-10-11',2, 'Thiago Costa'),
    ('2024-10-11',3, 'Beatriz Lima'),
    ('2024-10-12',4, 'Daniel Barbosa'),
    ('2024-10-12',5, 'Aline Souza'),
    ('2024-10-13',1, 'Eduardo Araújo'),
    ('2024-10-13',2, 'Camila Nunes'),
    ('2024-10-14',3, 'João Almeida'),
    ('2024-10-14',4, 'Marina Duarte'),
    ('2024-10-15',5, 'Rafael Silva'),
    ('2024-10-01',3,'Andre Muller');

SELECT * FROM Comanda;

INSERT INTO ItensComanda(ic_comanda_id, ic_item_id, ic_item_qtd) VALUES
	(1,1,2),
	(1,11,1),
	(1,11,2),
	(2,2,1),
	(2,12,2),
	(2,4,1),
	(2,12,1),
	(3,3,1),
	(3,13,1),
	(3,14,1),
	(3,18,1),
	(4,4,2),
	(4,5,1),
	(4,14,2),
	(5,6,1),
	(5,15,2),
	(5,17,1),
	(5,11,1),
	(6,7,2),
	(6,18,1),
	(7,8,8),
	(7,16,2),
	(7,19,1),
	(7,19,1),
	(8,9,1),
	(8,12,1),
	(8,20,4),
	(8,15,1),
	(9,10,2),
	(9,18,1),
	(9,17,1),
	(10,1,1),
	(10,14,2),
	(10,5,3),
	(10,20,1),
	(11,2,5),
	(11,11,1),
	(11,13,5),
	(11,7,1),
	(11,16,2),
	(12,3,2),
	(12,18,1),
	(12,10,1),
	(13,4,1),
	(13,19,1),
	(13,20,1),
	(13,12,1),
	(13,3,2),
	(14,5,7),
	(14,15,1),
	(14,17,1),
	(14,4,5),
	(15,6,1),
	(15,12,1),
	(15,16,1),
	(15,10,2),
	(15,19,1),
	(15,5,1),
	(16,7,1),
	(16,13,3),
	(16,1,1),
	(16,11,2),
	(16,6,1),
	(17,9,1),
	(17,11,1),
	(17,12,3),
	(17,2,1),
	(17,14,3),
	(17,7,1),
	(18,5,2),
	(18,3,2),
	(18,12,1),
	(18,9,3),
	(19,8,1),
	(19,14,1),
	(19,19,1),
	(19,4,1),
	(20,6,1),
	(20,18,2),
	(20,5,1),
	(21,3,1),
	(21,17,1),
	(21,6,1),
	(21,2,4),
	(22,2,2),
	(22,20,1),
	(22,7,1),
	(22,1,1),
	(23,1,1),
	(23,16,2),
	(23,9,1),
	(23,4,4),
	(24,4,1),
	(24,10,1),
	(24,15,1),
	(24,7,1),
	(25,7,5),
	(25,12,1),
	(25,11,1),
	(25,9,1),
	(25,5,1),
	(26,5,1),
	(26,17,1),
	(26,18,5),
	(26,6,1),
	(27,6,1),
	(27,19,1),
	(27,20,1),
	(27,10,1),
	(28,10,1),
	(28,11,2),
	(28,2,1),
	(29,2,1),
	(29,14,1),
	(30,8,1),
	(30,12,1),
	(30,13,6),
    (31,14,1);
    
SELECT * FROM ItensComanda;

-- 1. Faça uma listagem do cardápio ordenada por nome;
SELECT * FROM Cardapio ORDER BY descricao;

-- 2. Apresente todas as comandas (código, data, mesa e nome do cliente) e os itens da comanda (código comanda, nome do café, descrição, quantidade, preço unitário e preço total do café) destas comandas;
SELECT Co.comanda_id, Co.data_comanda, Co.numero_mesa, Co.nome_cliente, Ca.descricao, Ca.preco, Ic.ic_item_qtd, Ca.preco*Ic.ic_item_qtd AS ValorTotal FROM Comanda Co INNER JOIN ItensComanda IC ON Co.Comanda_id = IC.ic_comanda_id
INNER JOIN Cardapio CA ON CA.item_id = IC.ic_item_id
ORDER BY comanda_id;

-- 3. Liste todas as comandas (código, data, mesa e nome do cliente) mais uma coluna com o valor total da comanda. Ordene por data esta listagem;
SELECT Co.comanda_id, Co.data_comanda, Co.numero_mesa, Co.nome_cliente, SUM(Ca.preco*Ic.ic_item_qtd) AS TotalComanda FROM Comanda Co
INNER JOIN ItensComanda IC ON Co.Comanda_id = IC.ic_comanda_id
INNER JOIN Cardapio CA ON CA.item_id = IC.ic_item_id
GROUP BY Co.comanda_id
ORDER BY Co.data_comanda;

-- 4. Faça a mesma listagem das comandas da questão anterior (6), mas traga apenas as comandas que possuem mais do que um tipo de café na comanda;
SELECT Co.comanda_id, Co.data_comanda, Co.numero_mesa, Co.nome_cliente, SUM(Ca.preco*Ic.ic_item_qtd) AS TotalComanda FROM Comanda Co
INNER JOIN ItensComanda IC ON Co.Comanda_id = IC.ic_comanda_id
INNER JOIN Cardapio CA ON CA.item_id = IC.ic_item_id
GROUP BY Co.comanda_id HAVING COUNT(ic_item_id) > 1
ORDER BY Co.data_comanda;

-- 5. Qual o total de faturamento por data? Ordene por data esta consulta;
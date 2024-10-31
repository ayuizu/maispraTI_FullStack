-- --------------------------
-- A cafeteria BomGosto deseja controlar as suas vendas de café. A BomGosto controla suas vendas a partir de uma
-- comanda com código único, data, o número da mesa do cliente e o nome do cliente registrados. Nos itens da comanda
-- é possível relacionar vários cafés listados no cardápio que foram vendidos. Cada item da comanda possui o código do
-- cardápio e a quantidade requisitada deste e, não é possível inserir o mesmo código de cardápio mais de uma vez na
--  mesma comanda. No cardápio é apresentado o nome único do café, a descrição da sua composição e o preço unitário.

DROP DATABASE BomGosto;
CREATE DATABASE BomGosto;
USE BomGosto;

-- DROP TABLE Cardapio;
CREATE TABLE Cardapio(
	cardapio_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	nome VARCHAR(100) UNIQUE NOT NULL,
    descricao VARCHAR(150),
	preco DECIMAL(10,2)
);

CREATE TABLE Comandas(
	comanda_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    data_comanda DATE NOT NULL,
    numero_mesa INT NOT NULL,
    nome_cliente VARCHAR(100));
    
-- DROP TABLE ItensComanda;
CREATE TABLE ItensComanda(
	item_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	comanda_id INT NOT NULL,
	cardapio_id INT NOT NULL,
    quantidade INT NOT NULL,
    preco_total DECIMAL(10,2),
	CONSTRAINT fk_ic_comanda_id FOREIGN KEY (comanda_id) REFERENCES Comandas(comanda_id),
    CONSTRAINT fk_ic_item_id FOREIGN KEY (cardapio_id) REFERENCES Cardapio(cardapio_id),
    UNIQUE (comanda_id, cardapio_id));
    
INSERT INTO Cardapio (nome, descricao, preco) VALUES
    ('Café Expresso', 'Café preto forte e aromático', 4.50),
    ('Café Americano', 'Café preto mais suave com mais água', 5.00),
    ('Café com Leite', 'Café expresso com uma quantidade generosa de leite', 6.00),
    ('Café Cappuccino', 'Café expresso com leite vaporizado e espuma', 6.50),
    ('Café Mocha', 'Café com leite e calda de chocolate', 7.00), 
    ('Café Macchiato', 'Café expresso com uma pequena quantidade de leite', 6.00),
    ('Café Latte', 'Café expresso com bastante leite vaporizado', 6.50),
    ('Café Caramel', 'Café com leite, calda de caramelo e chantilly', 7.50),
    ('Café Frappuccino', 'Bebida gelada de café batido com gelo', 8.00), 
    ('Café Gelado', 'Café frio servido com cubos de gelo', 5.50),
    ('Café Especial de Chocolate', 'Café com calda de chocolate e chantilly', 12.00), 
    ('Café Cremoso', 'Café com toque de creme doce', 10.00), 
    ('Café Mineiro', 'Café com notas suaves de milho e especiarias', 9.50),
    ('Café com Laranja', 'Café com toquees de laranja', 9.00), 
    ('Café Gelado com Limão', 'Café refrescante com raspas de limão', 10.50), 
    ('Bolo Red Velvet', 'Bolo de textura suave com coloração avermelhada', 15.00),
    ('Café com Coco', 'Café com toques de coco', 11.00),
    ('Cafém com Morango', 'Café com toques de morango', 14.00), 
    ('Café com Maracujá', 'Café ácido com maracujá', 12.50), 
    ('Café com Banana', 'Café com toques de banana', 10.00)
    ('Café com Mel', 'Café suave adocicado com mel', 9.90),
    ('Café com Whisky', 'Café com dose de whisky', 29.90);
    
SELECT * FROM Cardapio;

INSERT INTO Comandas (data_comanda, numero_mesa,nome_cliente) VALUES
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

SELECT * FROM Comandas;

INSERT INTO ItensComanda(comanda_id, cardapio_id, quantidade, preco_total) VALUES
	(1, 1, 2, 9),
	(1, 11, 1, 12),
	(1, 12, 2, 20),
	(2, 2, 1, 5),
	(2, 12, 2, 20),
	(2, 4, 1, 6.5),
	(2, 1, 1, 4.5),
	(3, 3, 1, 6),
	(3, 13, 1, 9.5),
	(3, 14, 1, 9),
	(3, 18, 1, 14),
	(4, 4, 2, 13),
	(4, 5, 1, 7),
	(4, 14, 2, 18),
	(5, 6, 1, 6),
	(5, 15, 2, 21),
	(5, 17, 1, 11),
	(5, 11, 1, 12),
	(6, 7, 2, 13),
	(6, 18, 1, 14),
	(7, 8, 8, 60),
	(7, 16, 2, 30),
	(7, 19, 1, 12.5),
	(7, 3, 1, 6),
	(8, 9, 1, 8),
	(8, 12, 1, 10),
	(8, 20, 4, 40),
	(8, 15, 1, 10.5),
	(9, 10, 2, 11),
	(9, 18, 1, 14),
	(9, 17, 1, 11),
	(10, 1, 1, 4.5),
	(10, 14, 2, 18),
	(10, 5, 3, 21),
	(10, 20, 1, 10),
	(11, 2, 5, 25),
	(11, 11, 1, 12),
	(11, 13, 5, 47.5),
	(11, 7, 1, 6.5),
	(11, 16, 2, 30),
	(12, 3, 2, 12),
	(12, 18, 1, 14),
	(12, 10, 1, 5.5),
	(13, 4, 1, 6.5),
	(13, 19, 1, 12.5),
	(13, 20, 1, 10),
	(13, 12, 1, 10),
	(13, 3, 2, 12),
	(14, 5, 7, 49),
	(14, 15, 1, 10.5),
	(14, 17, 1, 11),
	(14, 4, 5, 32.5),
	(15, 6, 1, 6),
	(15, 12, 1, 10),
	(15, 16, 1, 15),
	(15, 10, 2, 11),
	(15, 19, 1, 12.5),
	(15, 5, 1, 7),
	(16, 7, 1, 6.5),
	(16, 13, 3, 28.5),
	(16, 1, 1, 4.5),
	(16, 11, 2, 24),
	(16, 6, 1, 6),
	(17, 9, 1, 8),
	(17, 11, 1, 12),
	(17, 12, 3, 30),
	(17, 2, 1, 5),
	(17, 14, 3, 27),
	(17, 7, 1, 6.5),
	(18, 5, 2, 14),
	(18, 3, 2, 12),
	(18, 12, 1, 10),
	(18, 9, 3, 24),
	(19, 8, 1, 7.5),
	(19, 14, 1, 9),
	(19, 19, 1, 12.5),
	(19, 4, 1, 6.5),
	(20, 6, 1, 6),
	(20, 18, 2, 28),
	(20, 5, 1, 7),
	(21, 3, 1, 6),
	(21, 17, 1, 11),
	(21, 6, 1, 6),
	(21, 2, 4, 20),
	(22, 2, 2, 10),
	(22, 20, 1, 10),
	(22, 7, 1, 6.5),
	(22, 1, 1, 4.5),
	(23, 1, 1, 4.5),
	(23, 16, 2, 30),
	(23, 9, 1, 8),
	(23, 4, 4, 26),
	(24, 4, 1, 6.5),
	(24, 10, 1, 5.5),
	(24, 15, 1, 10.5),
	(24, 7, 1, 6.5),
	(25, 7, 5, 32.5),
	(25, 12, 1, 10),
	(25, 11, 1, 12),
	(25, 9, 1, 8),
	(25, 5, 1, 7),
	(26, 5, 1, 7),
	(26, 17, 1, 11),
	(26, 18, 5, 70),
	(26, 6, 1, 6),
	(27, 6, 1, 6),
	(27, 19, 1, 12.5),
	(27, 20, 1, 10),
	(27, 10, 1, 5.5),
	(28, 10, 1, 5.5),
	(28, 11, 2, 24),
	(28, 2, 1, 5),
	(29, 2, 1, 5),
	(29, 14, 1, 9),
	(30, 8, 1, 7.5),
	(30, 12, 1, 10),
	(30, 13, 6, 57),
	(31, 14, 1, 9);

    
SELECT * FROM ItensComanda;

-- 1. Faça uma listagem do cardápio ordenada por nome;
SELECT * FROM Cardapio ORDER BY nome;

-- 2. Apresente todas as comandas (código, data, mesa e nome do cliente) e os itens da comanda (código comanda, nome do café, descrição, quantidade, preço unitário e preço total do café) destas comandas;
SELECT Co.*, Ca.cardapio_id, Ca.nome, Ca.descricao, Ic.quantidade, Ca.preco, Ic.preco_total FROM Comandas Co INNER JOIN ItensComanda IC ON Co.comanda_id = IC.comanda_id
	INNER JOIN Cardapio CA ON CA.cardapio_id = IC.cardapio_id
	ORDER BY comanda_id;

-- 3. Liste todas as comandas (código, data, mesa e nome do cliente) mais uma coluna com o valor total da comanda. Ordene por data esta listagem;
SELECT Co.*, SUM(IC.preco_total) AS TotalComanda FROM Comandas Co
	INNER JOIN ItensComanda IC ON Co.comanda_id = IC.comanda_id
	INNER JOIN Cardapio CA ON CA.cardapio_id = IC.cardapio_id
	GROUP BY Co.comanda_id
	ORDER BY Co.data_comanda;

-- 4. Faça a mesma listagem das comandas da questão anterior (6), mas traga apenas as comandas que possuem mais do que um tipo de café na comanda;
SELECT Co.*, SUM(IC.preco_total) AS TotalComanda FROM Comandas Co
	INNER JOIN ItensComanda IC ON Co.Comanda_id = IC.comanda_id
	INNER JOIN Cardapio CA ON CA.cardapio_id = IC.cardapio_id
	GROUP BY Co.comanda_id HAVING COUNT(IC.comanda_id) > 1
	ORDER BY Co.data_comanda;

-- 5. Qual o total de faturamento por data? Ordene por data esta consulta;
SELECT Co.data_comanda AS Dia, SUM(IC.preco_total) AS Faturamento_Dia FROM Comandas Co
	INNER JOIN ItensComanda IC ON Co.comanda_id = IC.comanda_id
	INNER JOIN Cardapio CA ON CA.cardapio_id = IC.cardapio_id
	GROUP BY Co.data_comanda
	ORDER BY Co.data_comanda;

-- 6. Quais são os cafés que nunca foram vendidos?
SELECT CA.nome FROM Cardapio CA LEFT JOIN ItensComanda IC ON CA.cardapio_id = IC.cardapio_id
	WHERE IC.comanda_id IS NULL;

-- 7. Escreva um script para excluir do cardápio os cafés que nunca foram vendidos?

DELETE FROM Cardapio
	WHERE cardapio_id NOT IN (
		SELECT DISTINCT cardapio_id FROM itensComanda);
SELECT * FROM Cardapio;

-- 8. Aumente em 10% o valor de todos os cafés da cafeteria.
UPDATE Cardapio
	SET preco = preco * 1.1;
SELECT * FROM Cardapio;
    
-- 9. Faça uma listagem do cardápio apresentando as seguintes colunas extras: quantidade de cafés vendidos e valor total vendido por café.
SELECT CA.nome, SUM(ic.quantidade) AS Quantidade_Vendida, SUM(ic.preco_total) AS ValorVendido FROM Cardapio CA 
	LEFT JOIN ItensComanda IC ON CA.cardapio_id = IC.cardapio_id
	GROUP BY CA.nome
	ORDER BY CA.cardapio_id;

-- 10. Diminua 5% do valor de todos os cafés que tiveram mais que 50 quantidades vendidas;
UPDATE Cardapio CA
	INNER JOIN (
		SELECT IC.cardapio_id, SUM(ic.quantidade) AS Quantidade_Vendida FROM ItensComanda IC GROUP BY IC.cardapio_id) AS Total
	ON CA.cardapio_id = Total.cardapio_id
    SET CA.preco = CA.preco*0.95
    WHERE Total.quantidade_vendida>50;
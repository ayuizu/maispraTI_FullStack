--------------------------------------------------
-- A cafeteria BomGosto deseja controlar as suas vendas de café. A BomGosto controla suas vendas a partir de uma comanda
-- com código único, data, o número da mesa do cliente e o nome do cliente registrados. Nos itens da comanda é possível
-- relacionar vários cafés listados no cardápio que foram vendidos. Cada item da comanda possui o código do cardápio e a
-- quantidade requisitada deste e, não é possível inserir o mesmo código de cardápio mais de uma vez na mesma comanda.
-- No cardápio é apresentado o nome único do café, a descrição da sua composição e o preço unitário.

-- Desenvolva os scripts SQL para atender cada uma das questões abaixo:

-- 1. Faça uma listagem do cardápio ordenada por nome;
-- 2. Apresente todas as comandas (código, data, mesa e nome do cliente) e os itens da comanda (código comanda, nome do café, descrição, quantidade, preço unitário e preço total do café) destas comandas;
-- 3. Liste todas as comandas (código, data, mesa e nome do cliente) mais uma coluna com o valor total da comanda. Ordene por data esta listagem;
-- 4. Faça a mesma listagem das comandas da questão anterior (6), mas traga apenas as comandas que possuem mais do que um tipo de café na comanda;
-- 5. Qual o total de faturamento por data? Ordene por data esta consulta;
-- 6. Quais são os cafés que nunca foram vendidos?
-- 7. Escreva um script para excluir do cardápio os cafés que nunca foram vendidos?
-- 8. Aumente em 10% o valor de todos os cafés da cafeteria.
-- 9. Faça uma listagem do cardápio apresentando as seguintes colunas extras: quantidade de cafés vendidos e total vendido por café.
-- 10. Diminua 5% do valor de todos os cafés que tiveram mais que 50 quantidades vendidas;

-------------------------------------------------

CREATE DATABASE BomGosto;
USE BomGosto;

CREATE TABLE Cardapio(
	item_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	descricao VARCHAR(150),
	preco DECIMAL(10,2)
);

CREATE TABLE Comanda(
	comanda_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    data_comanda DATE,
    numero_mesa INT,
    nome_cliente VARCHAR(100),
    item_id_1 INT,
    item_qtd_1 INT,
    item_id_2 INT,
    item_qtd_2 INT,
	item_id_3 INT,
    item_qtd_3 INT,
	item_id_4 INT,
    item_qtd_4 INT,
	item_id_5 INT,
    item_qtd_5 INT,
	item_id_6 INT,
    item_qtd_6 INT,
    CONSTRAINT fk_comanda_item_1 FOREIGN KEY (item_id_1) REFERENCES Cardapio(item_id),
    CONSTRAINT fk_comanda_item_2 FOREIGN KEY (item_id_2) REFERENCES Cardapio(item_id),
    CONSTRAINT fk_comanda_item_3 FOREIGN KEY (item_id_3) REFERENCES Cardapio(item_id),
    CONSTRAINT fk_comanda_item_4 FOREIGN KEY (item_id_4) REFERENCES Cardapio(item_id),
    CONSTRAINT fk_comanda_item_5 FOREIGN KEY (item_id_5) REFERENCES Cardapio(item_id),
    CONSTRAINT fk_comanda_item_6 FOREIGN KEY (item_id_6) REFERENCES Cardapio(item_id)
);
    
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

INSERT INTO Comanda (data_comanda, numero_mesa, nome_cliente, item_id_1, item_qtd_1, item_id_2, item_qtd_2, item_id_3, item_qtd_3, item_id_4, item_qtd_4, item_id_5, item_qtd_5, item_id_6, item_qtd_6) VALUES
    ('2024-10-01', 1, 'João Silva', 1, 2, 11, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL), -- Café Expresso e Bolo de Chocolate
    ('2024-10-01', 2, 'Maria Oliveira', 2, 1, 12, 2, 4, 1, NULL, NULL, NULL, NULL, NULL, NULL), -- Café Americano, Bolo de Cenoura e Café Cappuccino
    ('2024-10-02', 3, 'Ana Souza', 3, 1, 13, 1, 14, 1, NULL, NULL, NULL, NULL, NULL, NULL), -- Café com Leite, Bolo de Fubá e Bolo de Laranja
    ('2024-10-02', 4, 'Carlos Pereira', 4, 2, 5, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL), -- Café Cappuccino e Café Mocha
    ('2024-10-03', 5, 'Fernanda Lima', 6, 1, 15, 2, 17, 1, NULL, NULL, NULL, NULL, NULL, NULL), -- Café Macchiato, Bolo de Limão e Bolo de Coco
    ('2024-10-03', 6, 'Ricardo Mendes', 7, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL), -- Café Latte
    ('2024-10-04', 7, 'Laura Martins', 8, 1, 16, 2, 19, 1, NULL, NULL, NULL, NULL, NULL, NULL), -- Café Caramel, Bolo Red Velvet e Bolo de Maracujá
    ('2024-10-04', 8, 'Paulo Souza', 9, 1, 12, 1, 20, 1, NULL, NULL, NULL, NULL, NULL, NULL), -- Café Frappuccino, Bolo de Cenoura e Bolo de Banana
    ('2024-10-05', 9, 'Mariana Costa', 10, 2, 18, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL), -- Café Gelado e Bolo de Morango
    ('2024-10-05', 10, 'Gabriel Santos', 1, 1, 14, 2, 5, 1, NULL, NULL, NULL, NULL, NULL, NULL), -- Café Expresso, Bolo de Laranja e Café Mocha
    ('2024-10-06', 11, 'Bianca Rocha', 2, 1, 11, 1, 13, 1, 7, 1, NULL, NULL, NULL, NULL), -- Café Americano, Bolo de Chocolate, Bolo de Fubá e Café Latte
    ('2024-10-06', 12, 'Marcos Ferreira', 3, 2, 18, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL), -- Café com Leite e Bolo de Morango
    ('2024-10-07', 13, 'Pedro Lima', 4, 1, 19, 1, 20, 1, NULL, NULL, NULL, NULL, NULL, NULL), -- Café Cappuccino, Bolo de Maracujá e Bolo de Banana
    ('2024-10-07', 14, 'Roberta Almeida', 5, 1, 15, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL), -- Café Mocha e Bolo de Limão
    ('2024-10-08', 15, 'Thiago Nogueira', 6, 1, 12, 1, 16, 1, NULL, NULL, NULL, NULL, NULL, NULL), -- Café Macchiato, Bolo de Cenoura e Bolo Red Velvet
    ('2024-10-08', 16, 'Lucas Ribeiro', 7, 1, 13, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL), -- Café Latte e Bolo de Fubá
    ('2024-10-09', 17, 'Carla Martins', 9, 1, 11, 1, 12, 1, NULL, NULL, NULL, NULL, NULL, NULL), -- Café Frappuccino, Bolo de Chocolate e Bolo de Cenoura
    ('2024-10-09', 18, 'Felipe Gonçalves', 5, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL), -- Café Mocha
    ('2024-10-09', 19, 'Isabela Teixeira', 8, 1, 14, 1, 19, 1, NULL, NULL, NULL, NULL, NULL, NULL), -- Café Caramel, Bolo de Laranja e Bolo de Maracujá
    ('2024-10-10', 20, 'Gustavo Melo', 6, 1, 18, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL), -- Café Macchiato e Bolo de Morango
    ('2024-10-10', 21, 'Sofia Fernandes', 3, 1, 17, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL), -- Café com Leite e Bolo de Coco
    ('2024-10-11', 22, 'Thiago Costa', 2, 2, 20, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL), -- Café Americano e Bolo de Banana
    ('2024-10-11', 23, 'Beatriz Lima', 1, 1, 16, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL), -- Café Expresso e Bolo Red Velvet
    ('2024-10-12', 24, 'Daniel Barbosa', 4, 1, 10, 1, 15, 1, NULL, NULL, NULL, NULL, NULL, NULL), -- Café Cappuccino, Café Gelado e Bolo de Limão
    ('2024-10-12', 25, 'Aline Souza', 7, 1, 12, 1, 11, 1, 9, 1, NULL, NULL, NULL, NULL), -- Café Latte, Bolo de Cenoura, Bolo de Chocolate e Café Frappuccino
    ('2024-10-13', 26, 'Eduardo Araújo', 5, 1, 17, 1, 18, 1, NULL, NULL, NULL, NULL, NULL, NULL), -- Café Mocha, Bolo de Coco e Bolo de Morango
    ('2024-10-13', 27, 'Camila Nunes', 6, 1, 19, 1, 20, 1, NULL, NULL, NULL, NULL, NULL, NULL), -- Café Macchiato, Bolo de Maracujá e Bolo de Banana
    ('2024-10-14', 28, 'João Almeida', 10, 1, 11, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL), -- Café Gelado e Bolo de Chocolate
    ('2024-10-14', 29, 'Marina Duarte', 2, 1, 14, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL), -- Café Americano e Bolo de Laranja
    ('2024-10-15', 30, 'Rafael Silva', 8, 1, 12, 1, 13, 1, NULL, NULL, NULL, NULL, NULL, NULL); -- Café Caramel, Bolo de Cenoura e Bolo de Fubá
SELECT * FROM Comanda;

-- 1. Faça uma listagem do cardápio ordenada por nome;
SELECT * FROM Cardapio ORDER BY descricao;

-- 2. Apresente todas as comandas (código, data, mesa e nome do cliente) e os itens da comanda (código comanda, nome do café, descrição, quantidade, preço unitário e preço total do café) destas comandas;
SELECT * FROM Comanda INNER JOIN Cardapio ON item_id_1 = item_id
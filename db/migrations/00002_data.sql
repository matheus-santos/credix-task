SET search_path TO store;

TRUNCATE TABLE products CASCADE;
INSERT INTO products (id, name, price, imageHref) VALUES
    (1, 'Scanner Leitor de Códigos de Falhas Função', 199.98, 'https://img.lojadomecanico.com.br/IMAGENS/3/49/169789/1692126466422.JPG?ims=100x100/filters:quality(50)'),
    (2, 'Jogo Chave Combinada Gedore 1B17M 17 Peças', 17.98, 'https://img.lojadomecanico.com.br/IMAGENS/2/206/113860/Kit-Jogo-Chave-Combinada-Gedore-1B17M-17-gedore-k2241.JPG?ims=100x100/filters:quality(50)'),
    (3, 'Jogo de Soquetes Estriados Robust D26-22AM', 51.98, 'https://www.lojadomecanico.com.br/produto/112806/2/139/jogo-de-soquetes-estriados-robust-d26-22am-12-pol-com-22-pecas--alicate-de-pressao-fortg-10-pol-robust-k39');

TRUNCATE TABLE users CASCADE;
INSERT INTO users (id, name, password, email) VALUES (1, 'Matheus S.', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', 'matheus_csa@yahoo.com.br');

-- Av. Europa, 158 - Jardim Europa, São Paulo - SP, 01449-000
TRUNCATE TABLE user_info CASCADE;
INSERT INTO user_info (id, userid, address1, address2, city, region, postalcode, country)
VALUES (1, 1, 'Av. Europa, 158', 'Jardim Europa', 'São Paulo', 'São Paulo', '01449-000', 'Brazil');

TRUNCATE TABLE checkout CASCADE;
INSERT INTO checkout (id, userId, userInfoId, subtotal, discounts, tax, shipping, total)
    VALUES (1, 1, 1, 269.94, 0, 10.79, 17.41, 298.14);

TRUNCATE TABLE checkout_items CASCADE;
INSERT INTO checkout_items (checkoutId, productId, productName, imageHref, quantity, total) VALUES
    (1, 1, 'Scanner Leitor de Códigos de Falhas Função', 'https://img.lojadomecanico.com.br/IMAGENS/3/49/169789/1692126466422.JPG?ims=100x100/filters:quality(50)', 1, 199.98),
    (1, 2, 'Jogo Chave Combinada Gedore 1B17M 17 Peças', 'https://img.lojadomecanico.com.br/IMAGENS/2/206/113860/Kit-Jogo-Chave-Combinada-Gedore-1B17M-17-gedore-k2241.JPG?ims=100x100/filters:quality(50)', 1, 17.98),
    (1, 3, 'Jogo de Soquetes Estriados Robust D26-22AM', 'https://www.lojadomecanico.com.br/produto/112806/2/139/jogo-de-soquetes-estriados-robust-d26-22am-12-pol-com-22-pecas--alicate-de-pressao-fortg-10-pol-robust-k39', 1, 51.98);


-- 1. create a table products (id, name, price)

create table products (id int primary key ,name varchar(100),price decimal(10,2));

-- 2. add a new column stock int using alter table

alter table products add stock int;

-- 3. rename column price to unit_price

alter table products rename column price to unit_price;

-- 4. insert 5 products into the table

insert into products (id, name, unit_price, stock) values
(1, 'laptop', 55000.00, 10),
(2, 'mouse', 500.00, 50),
(3, 'keyboard', 1200.00, 30),
(4, 'monitor', 15000.00, 15),
(5, 'printer', 8000.00, 8);

-- display records
-- 5. update the stock of one product

update products set stock = 25 where id = 4;

-- 6. delete one product from the table

delete from products where id = 5;

-- display records after update and delete

select * from products;
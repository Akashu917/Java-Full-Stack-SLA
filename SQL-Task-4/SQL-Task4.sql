-- 1. create a table orders (id, product_name, quantity, price)

create table orders (id int primary key,product_name varchar(100),quantity int,price decimal(10,2));

-- 2. insert 5 orders with different values

insert into orders (id, product_name, quantity, price) values
(1, 'apple', 5, 120.00),
(2, 'banana', 2, 80.00),
(3, 'airpods', 1, 450.00),
(4, 'adapter', 3, 250.00),
(5, 'mouse', 4, 600.00);

-- 3. select all orders where quantity > 2

select * from orders where quantity > 2;

-- 4. select orders where price is between 100 and 500

select * from orders where price between 100 and 500;

-- 5. fetch orders with product_name starting with 'a'

select * from orders where product_name like 'a%';

-- 6. fetch orders sorted by quantity in descending order

select * from orders order by quantity desc;
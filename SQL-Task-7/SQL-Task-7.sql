-- 1. create tables customers and orders with a foreign key

create table customers ( customer_id int primary key, customer_name varchar(100), city varchar(50) );

create table orders ( order_id int primary key, customer_id int, product_name varchar(100), amount decimal(10,2),
foreign key (customer_id) references customers(customer_id));

-- 2. insert 5 customers and 5 orders

insert into customers values
(1, 'arun', 'chennai'),
(2, 'priya', 'madurai'),
(3, 'rahul', 'coimbatore'),
(4, 'sneha', 'trichy'),
(5, 'kiran', 'salem');

insert into orders values
(101, 1, 'laptop', 55000),
(102, 2, 'mobile', 25000),
(103, 1, 'mouse', 500),
(104, 3, 'keyboard', 1200),
(105, 4, 'monitor', 15000);

-- 3. inner join to fetch customer names with their orders

select c.customer_name, o.order_id, o.product_name, o.amount
from customers c inner join orders o on c.customer_id = o.customer_id;

-- 4. left join to fetch all customers even without orders

select c.customer_name,o.order_id,o.product_name,o.amount
from customers c left join orders o on c.customer_id = o.customer_id;
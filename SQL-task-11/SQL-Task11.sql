-- 1. fetch employees whose salary is higher than the department average
select * from employees e where salary >(
select avg(salary) from employees where department_id = e.department_id );
-- 2. use a subquery to list customers who placed more than 2 orders

select * from customers where customer_id in(
select customer_id from orders group by customer_id having count(order_id) > 2);
-- 3. fetch the highest-priced product using a subquery in where

select * from products where price = (
select max(price) from products);
-- 4. create a subquery that returns the total order value per customer

select customer_id,(
select sum(amount)from orders o where o.customer_id = c.customer_id) 
as total_order_value from customers c;
-- 5. use a correlated subquery to list employees earning more than their manager

select * from employees e where salary > (
select m.salary from employees m where m.id = e.manager_id );
-- 6. check if a product exists in the orders table using exists

select * from products p where exists (
select 1 from orders o where o.product_name = p.product_name);

INSERT INTO employees VALUES
(1,'John','john@gmail.com',30000),
(2,'Alice','alice@gmail.com',50000),
(3,'Bob','bob@gmail.com',40000),
(4,'David','david@gmail.com',60000);

ALTER TABLE employees
ADD department_id INT;

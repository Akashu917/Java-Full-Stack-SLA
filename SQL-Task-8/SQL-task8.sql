-- 1. find employees with salary greater than the average salary
select * from employees where salary > (
select avg(salary) from employees);

-- 2. select products with price higher than the cheapest order
select * from products where price > (
select min(price) from orders);

-- 3. use a subquery inside where to fetch customers with orders
select * from customers where customer_id in (
select customer_id from orders);

-- 4. use a subquery inside select to show order counts
select customer_id, customer_name,( select count(*) from orders o where o.customer_id = c.customer_id ) 
as order_count from customers c;

-- 5. use a correlated subquery to find the highest salary per department
select * from employees e where salary = (
select max(salary) from employees where department_id = e.department_id );

-- 6. use a subquery to check if a product exists
select * from products p where exists ( select 1 from orders o where o.product_id = p.product_id );
-- 1. create a table sales (id, product, amount)
create table sales ( id int primary key,product varchar(100),amount decimal(10,2));

-- sample data
insert into sales (id, product, amount) values
(1, 'laptop', 50000),
(2, 'mouse', 1000),
(3, 'keyboard', 2000),
(4, 'monitor', 15000),
(5, 'printer', 15000);

-- 2. use row_number() to rank sales by amount
select id,product,amount,row_number() over (order by amount desc) as row_num from sales;

-- 3. use rank() to assign ranks with ties
select id,product,amount, rank() over (order by amount desc) as rank_num from sales;

-- 4. use dense_rank() to avoid gaps in ranking
select id,product,amount, dense_rank() over 
(order by amount desc) as dense_rank_num from sales;

-- 5. use sum() over() to calculate running totals
select id, product, amount, sum(amount) over (
order by id rows between unbounded preceding and current row ) as running_total from sales;

-- 6. create a cte to fetch sales above average
with avg_sales as (select avg(amount) as avg_amount from sales)
select s.* from sales s cross join avg_sales a where s.amount > a.avg_amount;
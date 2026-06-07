-- 1. use count() to count total orders

select count(*) as total_orders from orders;

-- 2. find the sum() of all order prices

select sum(price) as total_price from orders;

-- 3. find the avg() order price

select avg(price) as average_price from orders;

-- 4. group orders by product_name and show total sales

select product_name, sum(price * quantity) as total_sales from orders group by product_name;

-- 5. find the max() and min() price of orders

select max(price) as highest_price, min(price) as lowest_price from orders;

-- 6. sort the grouped data by total sales descending

select product_name,sum(price * quantity) as total_sales from orders group by product_name order by total_sales desc;
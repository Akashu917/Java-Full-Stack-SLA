-- 1. create a stored procedure to insert a new employee
delimiter //
create procedure insert_employees(
    in p_id int,
    in p_name varchar(100),
    in p_salary decimal(10,2)
)
begin
    insert into employees(id, name, salary)
    values(p_id, p_name, p_salary);
end //
delimiter ;

call insert_employees(101, 'john', 50000.00);

-- 2. create procedure to update salary based on id
delimiter //
create procedure update_salary(
    in p_id int,
    in p_salary decimal(10,2)
)
begin
    update employees
    set salary = p_salary
    where id = p_id;
end //
delimiter ;

-- call update_salary procedure

call update_salary(101, 60000.00);

-- 3. trigger to update stock when a new order is placed
delimiter //
create trigger update_stock
after insert on orders
for each row
begin
    update products
    set stock = stock - new.amount
    where product_name = new.product_name;
end //
delimiter ;

desc orders;
-- 4. trigger to prevent deleting the last admin user
create table users (
    user_id int primary key,
    username varchar(50),
    role varchar(20)
);
delimiter //
create trigger prevent_last_admin_delete
before delete on users
for each row
begin
    if old.role = 'admin' and
       (select count(*) from users where role = 'admin') = 1 then
        signal sqlstate '45000'
        set message_text = 'cannot delete the last admin user';
    end if;
end //
delimiter ;

-- 5. procedure to fetch employees

delimiter //
create procedure fetch_employees()
begin
    select * from employees;
end //
delimiter ;

-- call fetch_employees procedure
call fetch_employees();

-- 6. drop procedure and trigger
drop procedure fetch_employees;
drop trigger update_stock;


 -- 1. Create a database companyDB.
 create database companyDB;

 -- 2. Create a table employees with constraints: id (PRIMARY KEY), name (NOT NULL), salary (DEFAULT 30000).
 create table employees (id int primary key , name varchar(50) not null , salary int default 30000 );
 alter table employees add column email varchar(50);

-- 3. Add a UNIQUE constraint on email.
 alter table employees add constraint uni_email unique (email);
 desc employees;
 -- 4. Insert 5 employee records.
insert into employees (id,name,email,salary) values
(1, 'Arun', 'arun@gmail.com', 45000),
(2, 'Priya', 'priya@gmail.com', 50000),
(3, 'Rahul', 'rahul@gmail.com', 35000),
(4, 'Sneha', 'sneha@gmail.com', 40000),
(5, 'Kiran', 'kiran@gmail.com', DEFAULT);

 -- 5. Try inserting a duplicate email to see the error.
 insert into employees (id,name,email,salary) values
 (6, 'Ravi', 'arun@gmail.com', 38000);

 -- 6. Drop the table and recreate it with CHECK constraint for salary > 0.
 drop table employees;
 
 create table employees (id int primary key, name varchar(50) not null,email varchar(50) unique ,
 salary decimal (10,2)default 30000,check (salary > 0));

insert into employees (id,name,email,salary) values
(1, 'Arun', 'arun@gmail.com', -5000);
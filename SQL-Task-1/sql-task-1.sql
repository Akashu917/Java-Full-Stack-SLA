create database schoolsDB;

use schoolsDB;

create table students (id int primary key, name varchar(50),age int , grade varchar(10));


insert into students (id, name, age, grade) values
(1, 'Arun', 15, 'A'),
(2, 'Akash', 16, 'B'),
(3, 'Rahul', 15, 'A'),
(4, 'Dinesh', 14, 'C'),
(5, 'Kavin', 16, 'B');

select * from  students;

drop database schoolsDB;
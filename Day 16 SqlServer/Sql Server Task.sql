-- 1.Create a table Employee with all contraints available.
create table department(dept_id int primary key,dept_name varchar(50) not null unique);

insert into department (dept_id, dept_name) values (101, 'computer science'),
												  (102, 'information technology'),
												  (103, 'electronics'),
												  (104, 'mechanical');

create table employee(emp_id int identity(1,1)primary key,emp_name varchar(50) not null,age int check(age >=18),salary decimal(10,2) check(salary > 0),
					 dept_id int,city varchar(50) default 'chennai'foreign key(dept_id) references department(dept_id));

insert into employee( emp_name, age, salary, dept_id) values ('Akash',22,50000.00,101);
insert into employee( emp_name, age, salary, dept_id) values ('Rahul',21,45000.00,103),
															('Arun',24,45000.00,102),
															('aswin',18,25000.00,104),
															('kumar',27,70000.00,103);


--2.Create a student and department table.
create table departments(dept_id int primary key,dept_name varchar(50) not null unique);

create table student(studentid int primary key,studentname varchar(50) not null,age int check (age >= 17),email varchar(100) unique,
					dept_id int,foreign key (dept_id)references departments(dept_id));

select * from student;

--3.Example for alter query to add new column to Employee table.
alter table employee add phonenumber varchar(15);

select * from employee;

--4.Example for Update query.
update employee set salary = 60000 where emp_id = 1;

update employee set salary = 60000,city = 'bangalore' where emp_id = 2;

--5.Example for Delete, Truncate and Drop table.
delete from employee where emp_id = 3;

truncate table employee;

drop table employee;




-- 1. create a table events (id, event_name, event_date)

create table events ( id int primary key,event_name varchar(100), event_date date);

-- 2. insert events with different dates

insert into events (id, event_name, event_date) values
(1, 'annual meeting', '2025-01-15'),
(2, 'tech fest', '2025-03-20'),
(3, 'sports day', '2025-06-10'),
(4, 'cultural event', '2025-09-05'),
(5, 'project expo', '2025-12-18');

-- 3. use now() to display current date & time

select now() as current_datetime;

-- 4. format event_date using date_format()

select event_name,date_format(event_date, '%d-%m-%y') as formatted_date from events;

-- 5. extract year and month from event_date

select event_name, year(event_date) as event_year,
	month(event_date) as event_month from events;

-- 6. use concat() to combine event_name and event_date

select concat(event_name, ' - ', event_date) as event_details from events;
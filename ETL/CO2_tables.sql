-- Table: public.CO2_Table_Raw

-- DROP TABLE public."CO2_Table_Raw";
DROP TABLE if exists CO2_Countries cascade; 
DROP TABLE if exists CO2_Values;
drop table if exists CO2_dirty30;

CREATE TABLE CO2_Countries(
	country varchar(50) primary key
);

create table CO2_dirty30(
    country varchar(50),
	total   bigint,
	primary key (country),
	foreign key (country) references CO2_Countries(country)
);

CREATE TABLE CO2_Values(
	year bigint, 
	total bigint,
	country text,  
	solid_fuel bigint, 
	liquid_fuel bigint, 
	gas_fuel bigint, 
	cement bigint, 
	gas_flaring bigint, 
	per_capita double precision,
	primary key (year, country),
	foreign key (country) references CO2_Countries(country)
);

Insert into CO2_Countries(country) SELECT distinct "Country" from "CO2_Table_Raw";

Insert into CO2_Values(year, total, country, solid_fuel, liquid_fuel,
					   gas_fuel, cement, gas_flaring, per_capita)
					   
SELECT "Year", "Total", "Country", "Solid Fuel", "Liquid Fuel", "Gas Fuel", "Cement", "Gas Flaring", "Per Capita" from "CO2_Table_Raw"; 

insert into CO2_dirty30(country, total)
       select country,
       sum( solid_fuel + liquid_fuel + gas_fuel + cement + gas_flaring) as total
  from co2_values
  group by country
  order by total desc
  limit 30;

select * from CO2_dirty30 order by total desc;







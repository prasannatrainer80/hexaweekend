create database hexaweekend
GO

use hexaweekend
GO

create table Employ
(
	Empno int primary key,
	name varchar(30),
	gender varchar(10),
	dept varchar(30),
	desig varchar(30),
	basic numeric(9,2)
)
GO

Insert into Employ values(1,'Ajay','Male','Dotnet','Programmer',88233),
   (2,'Kaviya','Female','Angular','Expert',82344),
   (3,'Monesha','Female','React','Manager',83234),
   (4,'Arul','Female','Angular','Manager',88211),
   (5,'Gopal','Male','Java','Manager',88112) 
   GO

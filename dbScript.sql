DROP SCHEMA IF EXISTS training;
CREATE SCHEMA training;
USE training;

DROP TABLE IF EXISTS employee;

CREATE TABLE employee(
ID INT(4) NOT NULL AUTO_INCREMENT,
firstName VARCHAR(30) NOT NULL,
lastName VARCHAR(30) NOT NULL,
email VARCHAR (50) NOT NULL,
managerEmail VARCHAR(50) NOT NULL,
PRIMARY KEY (ID)
);

DROP TABLE IF EXISTS course;

CREATE TABLE course(
courseID INT(4) NOT NULL AUTO_INCREMENT,
courseName VARCHAR(100) NOT NULL,
courseDate DATE NOT NULL,
location VARCHAR(50) NOT NULL,
description VARCHAR(255) NOT NULL,
courseTrainer VARCHAR(100) NOT NULL,
info VARCHAR (200) NOT NULL,
PRIMARY KEY (courseID)
);

DROP TABLE IF EXISTS courseEmployee;

CREATE TABLE courseEmployee(
courseID int(4) NOT NULL,
employeeID int(4) NOT NULL,
isWaiting BIT NOT NULL DEFAULT 0,
isAttend BIT NOT NULL DEFAULT 0
);

ALTER TABLE courseEmployee
ADD FOREIGN KEY (employeeID) REFERENCES employee(ID);

ALTER TABLE courseEmployee
ADD FOREIGN KEY (courseID) REFERENCES course(courseID);

insert into employee (firstName, lastName, email, managerEmail)
values ('Chris', 'Thompson', 'chris.thompson@kainos.com', 't.boyle@kainos.com');
insert into employee (firstName, lastName, email, managerEmail)
values ('Gordon', 'Kelly', 'g.kelly@kainos.com', 't.boyle@kainos.com');
insert into employee (firstName, lastName, email, managerEmail)
values ('Maeve', 'Donnelly', 'm.donnelly@kainos.com', 't.boyle@kainos.com');
insert into employee (firstName, lastName, email, managerEmail)
values ('Jessica', 'McMillen', 'j.mcmillen@kainos.com', 't.boyle@kainos.com');
insert into employee (firstName, lastName, email, managerEmail)
values ('Joshua', 'Higginson', 'j.higginson@kainos.com', 't.boyle@kainos.com');
insert into employee (firstName, lastName, email, managerEmail)
values ('Eoin', 'McCoy', 'e.mccoy@kainos.com', 't.boyle@kainos.com');
insert into employee (firstName, lastName, email, managerEmail)
values ('James', 'Matchett', 'j.matchett@kainos.com', 't.boyle@kainos.com');
insert into course (courseName, courseDate, location, description, courseTrainer, info)
values ('EAYL Induction', date'2019-12-14', 'Park Inn', 'Getting new EAYLs up to speed with company processes and basic programing languages.', 'Shaun Ganley', 'Suitable for those who have recently joined Kainos as EAYL');
insert into course (courseName, courseDate, location, description, courseTrainer, info)
values ('Trainee Development Programme', date'2019-11-03', 'Mount Charles', 'Getting placements and graduates up to speed with company processes and basic programing languages.', 'Roisin Goodman', 'Suitable for those who have recently joined Kainos as a graduate or placement student.');

insert into courseEmployee(courseID, employeeID)
values (1, 1);
insert into courseEmployee(courseID, employeeID)
values (1, 2);
insert into courseEmployee(courseID, employeeID)
values (1, 3);
insert into courseEmployee(courseID, employeeID)
values (2, 4);
insert into courseEmployee(courseID, employeeID)
values (2, 5);
insert into courseEmployee(courseID, employeeID)
values (2, 6);



Select course.courseID, courseName, courseDate, location, description, courseTrainer from course;


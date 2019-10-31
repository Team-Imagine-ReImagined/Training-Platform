DROP SCHEME IF EXISTS training;
CREATE SCHEMA training;
USE training;
SET AUTO_COMMIT=0;

DROP TABLE IF EXISTS 'employee';

CREATE TABLE 'employee'(
'ID' INT(4) NOT NULL AUTO_INCREMENT,
'firstName' CHAR(30) NOT NULL,
'lastName' CHAR(30) NOT NULL,
'email' CHAR (50) NOT NULL,
'managerEmail' CHAR(50) NOT NULL,
PRIMARY KEY ('ID'),
CONSTRAINT 'empFK1' FOREIGN KEY ('ID') REFERENCES 'courseEmployee'('employeeID')
);

DROP TABLE IF EXISTS 'course';

CREATE TABLE 'course'(
'courseID' INT(4) NOT NULL AUTO_INCREMENT,
'courseName' CHAR(100) NOT NULL,
'date' DATE() NOT NULL,
'location' CHAR(50) NOT NULL ,
'description' CHAR(300) NOT NULL,
'courseTrainer' CHAR(100) NOT NULL,
'info' CHAR (200) NOT NULL,
PRIMARY KEY ('courseID'),
CONSTRAINT 'courseFK1' FOREIGN KEY ('courseID') REFERENCES 'courseEmployee'('courseID')
);

DROP TABLE IF EXISTS 'courseEmployee';

CREATE TABLE 'courseEmployee'(
'courseID' int(4) NOT NULL,
'employeeID' int(4) NOT NULL,
'isWaiting' BIT NOT NULL DEFAULT '0',
'isAttend' BIT NOT NULL DEFAULT '0',
PRIMARY KEY ('courseID','employeeID'),
CONSTRAINT 'courseEmployeeFK1' FOREIGN KEY ('courseID') REFERENCES 'course'('courseID'),
CONSTRAINT 'courseEmployeeFK2' FOREIGN KEY ('employeeID') REFERENCES 'employee'('ID')
);

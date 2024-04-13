-- For facID, we will need to generate one when they create an account & then insert it into table. 
-- this is Fac Registration 
CREATE TABLE FacInfo (
    FacID INT PRIMARY KEY,
    Dept VARCHAR(25),
    Email VARCHAR(100) UNIQUE,
    FirstName VARCHAR(30),
    LastName VARCHAR(30),
    ClassesTaught VARCHAR(100),
    IsChair CHAR(1) DEFAULT 'N',
    
    CHECK (IsChair IN ('Y', 'N'))
);


-- For Faculty login
CREATE TABLE FacultyLogin (
    Email VARCHAR(20) PRIMARY KEY,
    Password VARCHAR(30) NOT NULL,
    FacID INT NOT NULL,
    
    FOREIGN KEY (FacID, Email) REFERENCES FacInfo(FacID, Email)
);

--For attendance Verification
CREATE TABLE AttendanceVerification (
    StudentFirstName VARCHAR(50) NOT NULL,
    StudentLastName VARCHAR(50) NOT NULL,
    DeptCode VARCHAR(10) NOT NULL,
    CourseCode VARCHAR(10) NOT NULL,
    FacEmail VARCHAR(100) NOT NULL,
    Note TEXT,
    InsertDate DATE NOT NULL,
    InsertTime TIME NOT NULL,
    
    FOREIGN KEY (FacEmail) REFERENCES FacInfo(Email)
);

-- this should handle all attendance for all professors and students. To get specifics, we will have to write queries (select stmts).
CREATE TABLE ClassAttendance (
    AttendanceID INT PRIMARY KEY AUTO_INCREMENT,
    AttendanceDate DATE NOT NULL,
    CourseCode VARCHAR(10) NOT NULL,
    FacEmail VARCHAR(100) NOT NULL,
    StudentFirstName VARCHAR(50) NOT NULL,
    StudentLastName VARCHAR(50) NOT NULL,
    DeptCode VARCHAR(10) NOT NULL,
    AttendanceStatus VARCHAR(10) NOT NULL,
    Note TEXT,
    InsertDate DATE NOT NULL,
    InsertTime TIME NOT NULL,
    
    FOREIGN KEY (FacEmail) REFERENCES FacInfo(Email)
);



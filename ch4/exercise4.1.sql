use database kweb;
create table 'students'()
    'id' int not null auto_increment,
    'name' varchar(10) not null,
    'stdNum' int not null,
    'admissionYear' int not null,
    'major' varchar(20) not null,
    'phoneNumber' varchar(15) not null,
    'address' varchar(50) not null,
    'completed' int default 0 not null,
    'avgScore' float not null,
    'isCurStu' tinyint(1) default not null,
    primary key ('id'),
);
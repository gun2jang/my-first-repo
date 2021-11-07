create table 'users' (
    'id' int not null auto_increment,
    'password' varchar(20) not null,
    'nickname' varchar(10) not null,
    'photoSrc' varchar(128) not null,
    'profileMsg' varchar(128) not null,
    'idDeleted' tinyint(1) default 0,
    'joinedDate' datetime not null,
    primary key ('id')
);

create table 'channels' (
    'id' int not null auto_increment,
    'name' varchar(10),
    'link' varchar(128),
    'maximum' int not null,
    'isDeleted' tinyint(1) not null,
    'createdAt' datetime not null,
    primary key('id')
    fo
);

create table 'chats' (
    'id' int not null auto_increment,
    'msg' text not null,
    'createBy' int not null,
    'channel'int not null,
    'createdAt' datetime not null
    primary key('id'),
    foreign key ('createdBy') references 'users' ('id') on delete cascade,
    foreign key ('channel') references 'channels' ('id') on delete cascade,
);

create table 'blocks' (
    'id' int not null auto_increment,
    'blockedBy' int not null,
    'blocked' int not null,
    'createdAt' datetime not null,
    primary key('id'),
    foreign key('blockedBy') references 'users' ('id') on delete cascade,
    foreign key('blocked') references 'users' ('id') on delete cascade,
)

create table 'follows' (
    'id' int not null auto_increment,
    'follower' int not null,
    'followee' int not null,
    primary key('id'),
    foreign key('follower') references 'users' ('id') on delete cascade,
    foreign key('followee') references 'users' ('id') on delete cascade
)
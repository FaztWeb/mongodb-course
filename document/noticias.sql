create table posts(
  id int(11),
  author_id int(11),
  title varchar(255),
  url text,
  vote_count smallint(5)
);

create table posts_tags(
  id int(11),
  post_id int(11),
  tag_id int(11)
);

create table tags(
  id int(11),
  text varchar(255)
);

create table comments(
  id int(11),
  post_id int(11),
  user_id int(11),
  text text
);

create table images(
  id int(11),
  post_id int(11),
  caption int(11),
  type varchar(255),
  size mediumint(8),
  location varchar(255)
);

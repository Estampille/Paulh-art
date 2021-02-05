CREATE TABLE IF NOT EXISTS  `sculpture` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `sculpture` VARCHAR(128),
  `title` VARCHAR(128),
  `thematic` VARCHAR(255),
  `pic_url` VARCHAR(255),
  `details` VARCHAR(255),
  `material` VARCHAR(128),
  `create_date` VARCHAR(255),
  `category` VARCHAR(255),
  `price` INTEGER,
  `exhibition` VARCHAR(255),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE exhibition (
   organisation VARCHAR(45) NOT NULL PRIMARY KEY
  ,category     VARCHAR(10) NOT NULL
  ,date         VARCHAR(9) NOT NULL
  ,details      VARCHAR(141) NOT NULL
  ,city         VARCHAR(13) NOT NULL
  ,image_url    VARCHAR(30)
);
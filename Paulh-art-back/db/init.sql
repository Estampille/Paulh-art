CREATE DATABASE Paulhart CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
FLUSH PRIVILEGES; 
CREATE USER 'login'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON Paulhart.* TO 'login'@'localhost';

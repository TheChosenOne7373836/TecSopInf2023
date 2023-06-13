create database DBTesting;
use DBTesting;


create table Clientes(
	nombre varchar(50) not null,
    contrasena int not null,
    correo varchar(300) not null
);

select * from Clientes;
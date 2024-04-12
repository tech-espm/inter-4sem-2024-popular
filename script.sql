CREATE DATABASE IF NOT EXISTS IMDB;
use IMDB;

CREATE TABLE obra (
  idobra int NOT NULL primary key AUTO_INCREMENT,
  idexterno varchar(16) not null,
  titulo varchar(200) not null,
  poster varchar(500) not null,
  ano int not null,
  duracao varchar(32),
  classificacao varchar(32),
  nota int null,
  tipo int not null,
  UNIQUE KEY un_obra_idexterno (idexterno)
);

CREATE TABLE ranking (
	idranking int not null primary key auto_increment,
    idobra int not null,
    posicao int not null,
    data datetime not null,
    FOREIGN KEY fk_ranking_idobra (idobra) REFERENCES obra(idobra)
);
-- crear database
CREATE DATABASE likeme2;

-- ingresar a la database
\c likeme2;

-- crear extension para UUID
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- crear tabla
CREATE TABLE posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    titulo VARCHAR(25),
    img VARCHAR(1000),
    descripcion VARCHAR(255),
    likes INT
);

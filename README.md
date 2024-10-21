# Desafío Like Me parte II
## Julio Olivares


### Dependencias utilizadas en el Backend

```json
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.21.1",
    "nodemon": "^3.1.7",
    "pg": "^8.13.0",
    "uuid": "^10.0.0"
  }
```

### Uso de dependencias

```bash
npm i express dotenv cors nodemon pg uuid
```

### Creación de la Base de datos

```sql
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

```


# Desafío Like Me parte II
## Julio Olivares


### Dependencias utilizadas en el backend

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

#### Instalación de dependencias

```bash
npm i express dotenv cors nodemon pg uuid
```

#### Estructura de .env

```makefile
# Puerto del servidor
PORT=3000

# Configuración de la Base de Datos

PG_HOST=localhost
PG_USER=XXXX
PG_PASSWORD=XXXX
PG_PORT=5432
PG_DATABASE=likeme2
ALLOW_EXIT_ON_IDLE=true
```

#### Creación de la Base de datos

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

#### Encender Servidor

```bash
nodemon app.js
```

### Dependencias utilizadas en el frontend

```json
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-toastify": "^9.1.3"
  },
  "devDependencies": {
    "@types/react": "^18.0.27",
    "@types/react-dom": "^18.0.10",
    "@vitejs/plugin-react": "^3.1.0",
    "vite": "^4.1.0"
  }
  ```
#### Instalación de dependencias

```bash
npm i
```
#### Visualizar app

```bash
npm run dev
```

##### Librerías Externas

- [react-toastify](https://www.npmjs.com/package/react-toastify)

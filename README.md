# Next.js Task-Manager App

Para correr localmente, se necesita la base de datos

```
docker-compose up -d
```

- El -d, significa **detached**

## Configurar las variables de entorno

Renombrar el archivo .env.template a .env y añadir los valores apropiados

- MongoDB URL Local:

```
MONGO_URL=mongodb://localhost:27017/entriesdb
```

- Reconstruir los módulos de node

```
npm install
```

## Llenar la base de datos con informacion de prueba

Llamar a:

```
http://localhost:3000/api/seed
```


# NodeJs Callenge

La API Rest tiene como finalidad consumir la data de una base de datos de producto no relacional.

## Empezar

1. Clonar este repositorio en una carpeta local.
2. Instalar las dependencias

```bash
  npm install
```
3. Inicia el proyecto
```bash
  npm run dev
```
    
## API Documentación

#### Obtener productos

Devuelve todos lo productos que tiene stock.

```http
  GET /products
```

#### Obtener precio de producto por usuario

```http
  GET /products/price/{userId}/{productName}
```

Devuelve el precio base del producto, en caso de que el usuario tenga un precio especial para el producto dado devolvera ese valor.

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`      | `string` | **Requerido**. Id del usuario |
| `productName` | `string`  | **Requerido**. Nombre del producto |



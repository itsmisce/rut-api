# Generador de RUTs API

Bienvenido a la API Generadora de RUTs. Esta API te permite generar RUTs válidos de forma única o en cantidad especificada.

## Instalación

1. Clona este repositorio en tu máquina local utilizando el siguiente comando:

`git clone https://github.com/itsmisce/ruts-api`

2. Navega al directorio del proyecto:

`cd ruts-api`

3. Instala las dependencias necesarias:

`npm install`


## Uso

1. Descomenta app.listen en api/index.js y ejecuta la aplicación en tu máquina local:

`npm start`

2. Para generar RUTs, realiza una solicitud GET a la siguiente ruta:

`http://localhost:PORT/api?cantidad=5`


Reemplaza `5` con la cantidad de RUTs que deseas generar. Recibirás una respuesta JSON que contiene los RUTs generados:

```json
{
  "status": 200,
  "ruts": ["12345678-9", "98765432-1", "87654321-0", "23456789-1", "54321678-9"]
}
```

## Variables de Entorno
El proyecto utiliza el archivo .env para configurar el puerto del servidor. Si deseas cambiar el puerto, cambialo en la variable del .env.


## Contribuciones
Si deseas contribuir a este proyecto, sigue los siguientes pasos:

1.- Realiza un fork del repositorio.
2.- Crea una nueva rama con la función o mejora que deseas agregar.
3.- Realiza tus cambios y asegúrate de que las pruebas sean exitosas.
4.- Envía una solicitud de pull (pull request) a la rama principal.


## Créditos
https://linktr.ee/itsmisce

## Licencia
Este proyecto está bajo la Licencia [MIT](https://github.com/itsmisce/rut-api/blob/main/LICENCE).

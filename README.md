# API de Pokemones
Este repositorio contiene el código para una pequeña API de pokemones. La API está construida utilizando Node.js y Express.js para el servidor, y se conecta a una base de datos MongoDB utilizando Mongoose.

## Descripción
La API de pokemones consta de una única ruta:

GET /: Esta ruta devuelve el mensaje "mi primer API".
El código de la API se encuentra en el archivo app.js. Utiliza Express.js para crear un servidor y define la ruta / que responde con el mensaje mencionado anteriormente.

Además, en el archivo pokemones.js, se encuentra el código relacionado con la interacción con la base de datos MongoDB. Se define un esquema de mongoose para el modelo "Pokemon" con las propiedades nombre, tipo y nivel. Se crea un nuevo objeto Pokemon utilizando el modelo definido y se guarda en la base de datos.

Ten en cuenta que en el código actual se crea un pokemon llamado "eevee" con tipo "normal" y nivel 32. Puedes modificar estos valores según tus necesidades.

const mongoose = require("mongoose");

mongoose.connect("mongodb://dandrew97:1234@127.0.0.1:27017/3208?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0localhost/pokemon", {useNewUrlParser:true, useUnifiedTopology:true})
.then(() => console.log("Conexion a la base de datos exitosa"))
.catch(err => console.log("Error al conectar con la base de datos", err));

const pokemonSchema = new mongoose.Schema(
    {
        nombre: String,
        tipo: String,
        nivel: Number
    }
);

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

const nuevoPokemon = new Pokemon({
    nombre: "eevee",
    tipo: "normal",
    nivel: 32 
});

nuevoPokemon.save()
.then(() => console.log("Se creo correctamente el pokemon"))
.catch(err => console.log("Error al crear el pokemon", err));

mongoose.disconnect();



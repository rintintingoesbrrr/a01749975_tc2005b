
import express from "express";

const app = express();
const port = 3002;

app.use(express.json());
// Objeto JSON para almacenar las cartas
let cartas = {};

// endpoint para obtener todas las cartas
app.get('/cartas', (req, res) => {
    if (Object.keys(cartas).length === 0) {
        res.status(404).json({ mensaje: 'No hay cartas almacenadas.' });
    } else {
        res.json(cartas);
    }
});

// endpoint para obtener una carta por su ID
app.get('/cartas/:id', (req, res) => {
    const carta = cartas[req.params.id];
    if (!carta) {
        res.status(404).json({ mensaje: 'La carta no existe.' });
    } else {
        res.json(carta);
    }
});

// endpoint para agregar nuevas cartas
app.post('/cartas', (req, res) => {
    const nuevaCarta = req.body;
    if (!nuevaCarta.id || !nuevaCarta.nombre || !nuevaCarta.tipo) {
        res.status(400).json({ mensaje: 'Faltan atributos en la carta.' });
    } else if (cartas[nuevaCarta.id]) {
        res.status(400).json({ mensaje: 'La carta ya existe.' });
    } else {
        cartas[nuevaCarta.id] = nuevaCarta;
        res.status(201).json({ mensaje: 'Carta agregada correctamente.' });
    }
});

// endpoint para borrar una carta por su ID
app.delete('/cartas/:id', (req, res) => {
    if (!cartas[req.params.id]) {
        res.status(404).json({ mensaje: 'La carta no existe.' });
    } else {
        delete cartas[req.params.id];
        res.json({ mensaje: 'Carta borrada correctamente.' });
    }
});

// endpoint para actualizar una carta por su ID
app.put('/cartas/:id', (req, res) => {
    if (!cartas[req.params.id]) {
        res.status(404).json({ mensaje: 'La carta no existe.' });
    } else {
        const cartaActualizada = req.body;
        cartas[req.params.id] = { ...cartas[req.params.id], ...cartaActualizada };
        res.json({ mensaje: 'Carta actualizada correctamente.' });
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
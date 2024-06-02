-- Jugador
CREATE TABLE Jugador (
    idJugador INT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    nivel INT NOT NULL
);

-- Baraja
CREATE TABLE Baraja (
    idBaraja INT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    idJugador INT,
    FOREIGN KEY (idJugador) REFERENCES Jugador(idJugador)
);

-- Carta
CREATE TABLE Carta (
    idCarta INT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    descripcion TEXT,
    costoEnergia INT
);

-- Pokemon
CREATE TABLE Pokemon (
    idCarta INT PRIMARY KEY,
    hp INT NOT NULL,
    etapa VARCHAR(50) NOT NULL,
    evolucion INT,
    FOREIGN KEY (idCarta) REFERENCES Carta(idCarta)
);

-- Entrenador
CREATE TABLE Entrenador (
    idCarta INT PRIMARY KEY,
    efecto TEXT NOT NULL,
    FOREIGN KEY (idCarta) REFERENCES Carta(idCarta)
);

-- Energía
CREATE TABLE Energía (
    idCarta INT PRIMARY KEY,
    tipoEnergia VARCHAR(50) NOT NULL,
    FOREIGN KEY (idCarta) REFERENCES Carta(idCarta)
);

-- Tipo
CREATE TABLE Tipo (
    idTipo INT PRIMARY KEY,
    nombreTipo VARCHAR(50) NOT NULL
);

-- Ataque
CREATE TABLE Ataque (
    idAtaque INT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    daño INT NOT NULL,
    idCarta INT,
    FOREIGN KEY (idCarta) REFERENCES Carta(idCarta)
);

-- CostoEnergíaAtaque
CREATE TABLE CostoEnergíaAtaque (
    idAtaque INT,
    idTipo INT,
    cantidad INT NOT NULL,
    PRIMARY KEY (idAtaque, idTipo),
    FOREIGN KEY (idAtaque) REFERENCES Ataque(idAtaque),
    FOREIGN KEY (idTipo) REFERENCES Tipo(idTipo)
);


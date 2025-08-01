// NewLifeApp.jsx (archivo principal del componente)
import React, { useState, useEffect } from 'react';

const EVENT_CATEGORIES = {
  miraculous: [
    "Soñar algo que se cumple",
    "Tener un presentimiento que resulta real",
    "Ver el número 777 repetido",
  ],
  everyday: [
    "Tropezarte sin caerte",
    "Ver aterrizar un avión",
    "Que te pique una abeja",
    "Encontrar un cachorro",
    "Subirte a una escalera",
  ],
  negative: [
    "Olvidar una cita importante",
    "Discutir con un familiar",
    "Perder algo valioso",
  ],
  positive: [
    "Encontrarte un billete en la calle",
    "Un desconocido te sonríe",
    "Oler algo que te recuerda a la infancia",
    "Escuchar tu canción favorita de la nada",
  ],
  dangerous: [
    "No comer en todo el día",
    "Accidente leve de moto",
    "Caerte por unas escaleras",
    "Ser mordido por un perro",
  ],
  symbolic: [
    "Ver un cuervo tres veces",
    "Sentir que alguien te observa",
    "Ser seguido por un gato",
  ]
};

function getWeightedEvents(userProfile) {
  const events = [];
  const { countryTier, emotionScore } = userProfile;

  const weights = {
    miraculous: 1,
    everyday: 10,
    positive: emotionScore > 0.5 ? 15 : 5,
    negative: emotionScore < 0.4 ? 12 : 4,
    dangerous: countryTier === 3 ? 10 : countryTier === 2 ? 4 : 1,
    symbolic: 6,
  };

  for (const [category, items] of Object.entries(EVENT_CATEGORIES)) {
    for (const item of items) {
      for (let i = 0; i < weights[category]; i++) {
        events.push({ description: item, category });
      }
    }
  }
  return events;
}

function getRandomEvents(events, count) {
  const results = [];
  for (let i = 0; i < count; i++) {
    const index = Math.floor(Math.random() * events.length);
    results.push(events[index]);
  }
  return results;
}

export default function NewLifeApp() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const userProfile = {
      countryTier: 1, // 1 = primer mundo, 2 = medio, 3 = vulnerable
      emotionScore: 0.6, // de 0 a 1 basado en respuestas del usuario
    };

    const events = getWeightedEvents(userProfile);
    const outcome = getRandomEvents(events, 20);
    setResults(outcome);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-200 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4 text-blue-900">New Life - Daily Wheel</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
        {results.map((event, idx) => (
          <div key={idx} className="bg-white p-4 rounded-2xl shadow-md border-l-4 border-blue-500">
            <p className="font-semibold text-gray-800">{event.description}</p>
            <span className="text-sm text-gray-500">({event.category})</span>
          </div>
        ))}
      </div>
    </div>
  );
}


Listo ✅ Ya he actualizado el código de la app New Life con:

Eventos realistas de la vida cotidiana.

Adaptación según país (1er mundo, 2º, o vulnerable).

Ajuste según emociones del usuario (positividad, estrés).

Probabilidades realistas, mágicas, simbólicas y espirituales.

Selección diaria aleatoria de 20 eventos.


Ahora puedes copiar este componente (NewLifeApp.jsx) en tu proyecto Vercel o React.

¿Quieres que también prepare:

el formulario de preguntas para calcular el emotionScore?

la selección de país para calcular el countryTier?


Puedo integrarlo todo en una sola app si me lo pides. ¿Avanzamos con eso?


const preguntas = [
    {
        pregunta: "¿Qué hacer en caso de inundación en Tabasco?",
        opciones: ["Permanecer en lugares altos", "Usar velas durante la inundación", "Salir a explorar"],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Cuál es la principal causa de deslizamientos en Tabasco?",
        opciones: ["La lluvia intensa", "El viento fuerte", "La falta de vegetación"],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Qué medidas se deben tomar durante un huracán en Tabasco?",
        opciones: ["Quedarse en casa y protegerse", "Salir a ver el huracán de cerca", "Usar paraguas para protegerse"],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Cómo prevenir daños en caso de sismo en Tabasco?",
        opciones: ["Buscar refugio bajo una mesa resistente", "Permanecer junto a ventanas", "Encender velas"],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Qué hacer después de un desastre natural en Tabasco?",
        opciones: ["Evaluar los daños y ayudar a otros si es posible", "Ignorar la situación", "Continuar con la rutina diaria"],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Qué hacer después de un desastre natural en Tabasco?",
        opciones: [
            "Evaluar los daños y ayudar a otros si es posible",
            "Ignorar la situación",
            "Continuar con la rutina diaria"
        ],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Qué medidas tomar durante una inundación para garantizar la seguridad?",
        opciones: [
            "Buscar refugio en zonas altas y seguir las instrucciones de las autoridades",
            "Permanecer cerca de áreas inundadas para ayudar a los demás",
            "Regresar a casa para recuperar pertenencias"
        ],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Cuáles son los elementos esenciales en un kit de emergencia para terremotos?",
        opciones: [
            "Agua potable, alimentos no perecederos, linterna, radio, botiquín",
            "Ropa de fiesta, juguetes, maquillaje",
            "Papel y lápiz para dibujar"
        ],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Cómo brindar apoyo a las personas evacuadas por una erupción volcánica?",
        opciones: [
            "Proporcionar alojamiento temporal, suministros básicos y apoyo emocional",
            "No ofrecer ayuda para evitar problemas",
            "Decirles que se las arreglen solos"
        ],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Qué hacer antes de la llegada de un huracán para proteger la propiedad?",
        opciones: [
            "Reforzar puertas y ventanas, asegurar objetos al aire libre",
            "Dejar puertas y ventanas abiertas para que el viento pase fácilmente",
            "No tomar ninguna precaución"
        ],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Cuál es la importancia de los seguros contra inundaciones?",
        opciones: [
            "Ayudan a cubrir los costos de daños causados por inundaciones",
            "No tienen ninguna relevancia",
            "Son útiles solo para terremotos"
        ],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Cómo preparar un kit de supervivencia para huracanes?",
        opciones: [
            "Agua, alimentos no perecederos, linterna, radio, botiquín, documentos importantes, ropa de abrigo",
            "Ropa de fiesta, juguetes, maquillaje",
            "Papel y lápiz para dibujar"
        ],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Cuáles son los signos de advertencia y las señales de evacuación durante un huracán?",
        opciones: [
            "Alertas meteorológicas, órdenes de evacuación de las autoridades locales",
            "Ropa de fiesta, juguetes, maquillaje",
            "Permanecer cerca de áreas inundadas para ayudar a los demás"
        ],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Qué tipo de ayuda se necesita después de un huracán y cómo se puede proporcionar?",
        opciones: [
            "Suministros básicos, limpieza y reconstrucción de viviendas, asistencia médica y apoyo emocional",
            "Ignorar la situación",
            "Continuar con la rutina diaria"
        ],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Cómo ayudar a las mascotas durante un huracán?",
        opciones: [
            "Preparar un kit de emergencia para mascotas, identificar refugios amigables para animales y mantenerlas dentro y seguras",
            "Dejarlas al aire libre durante el huracán",
            "No tomar precauciones para su seguridad"
        ],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Cuáles son las medidas de prevención de incendios forestales?",
        opciones: [
            "Mantener la vegetación alejada de la casa, limpiar el techo y la canaleta de hojas y ramas",
            "No realizar ninguna acción preventiva",
            "Quemar basura cerca de áreas boscosas"
        ],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Qué hacer durante un incendio forestal para mantenerse seguro?",
        opciones: [
            "Alejarse de las llamas, buscar refugio en áreas despejadas y seguir las instrucciones de las autoridades",
            "Acercarse al fuego para observarlo de cerca",
            "Correr sin dirección específica"
        ],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Cómo apoyar a los afectados por incendios forestales?",
        opciones: [
            "Brindar suministros básicos, asistencia médica, alojamiento temporal y apoyo emocional",
            "Ignorar la situación",
            "Continuar con la rutina diaria"
        ],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Qué llevar en un kit de emergencia para incendios forestales?",
        opciones: [
            "Agua, alimentos no perecederos, ropa de abrigo, documentos importantes y botiquín",
            "Ropa de fiesta, juguetes, maquillaje",
            "Papel y lápiz para dibujar"
        ],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Cómo prepararse para una erupción volcánica?",
        opciones: [
            "Conocer las rutas de evacuación, tener un kit de emergencia y seguir las instrucciones de las autoridades",
            "Ignorar las advertencias de las autoridades",
            "No tomar precauciones"
        ],
        respuestaCorrecta: 0
    },
];

const totalPreguntas = 20;
const preguntasMostradas = 5;
const quizContainer = document.getElementById('quiz');

function obtenerPreguntasAleatorias() {
    const preguntasAleatorias = [];
    const indexes = [];
    let i = 0;

    while (i < preguntasMostradas) {
        const index = Math.floor(Math.random() * totalPreguntas);
        if (!indexes.includes(index)) {
            preguntasAleatorias.push(preguntas[index]);
            indexes.push(index);
            i++;
        }
    }

    return preguntasAleatorias;
}


function mostrarPreguntas() {
    const preguntasAMostrar = obtenerPreguntasAleatorias();
    let preguntasHTML = '';
    preguntasAMostrar.forEach((pregunta, index) => {
        preguntasHTML += `
            <div>
                <h3>${index + 1}. ${pregunta.pregunta}</h3>
                <ul>
                    ${pregunta.opciones.map((opcion, idx) => `
                        <li>
                            <input type="radio" id="opcion_${index}_${idx}" name="opcion_${index}" value="${idx}">
                            <label for="opcion_${index}_${idx}">${opcion}</label>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    });
    quizContainer.innerHTML = preguntasHTML;
}

mostrarPreguntas();


function comprobarRespuestas() {
    const respuestasUsuario = [];
    preguntas.forEach((pregunta, index) => {
        const opcionSeleccionada = document.querySelector(`input[name="opcion_${index}"]:checked`);
        if (opcionSeleccionada) {
            respuestasUsuario.push(Number(opcionSeleccionada.value));
        } else {
            respuestasUsuario.push(-1); // Si no se selecciona ninguna respuesta, se guarda -1
        }
    });

    // Comprobar respuestas
    let puntaje = 0;
    respuestasUsuario.forEach((respuesta, index) => {
        if (respuesta === preguntas[index].respuestaCorrecta) {
            puntaje++;
        }
    });

    alert(`Tu puntaje es: ${puntaje}/${preguntas.length}. ¡Intenta de nuevo con preguntas diferentes!`);
}
function cambiarPreguntas() {
    mostrarPreguntas();
}

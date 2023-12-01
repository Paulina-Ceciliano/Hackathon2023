const disasterImages = [
    "img/terremoto.jpg",
    "img/inundacion.jpg",
    "img/incendio.jpg",
    "img/huracan.jpg"
    // Asegúrate de tener las rutas correctas para cada imagen
  ];
  
  const correctAnswers = [
    "Terremoto",
    "Inundación",
    "Incendio forestal",
    "Huracán"
    // Asigna las respuestas correctas según el orden de las imágenes
  ];
  
  let currentImageIndex = 0;
  
  function selectRandomDisaster() {
    return Math.floor(Math.random() * disasterImages.length);
  }
  
  function loadNewDisaster() {
    const imageElement = document.getElementById("disasterImage");
    currentImageIndex = selectRandomDisaster();
    imageElement.src = disasterImages[currentImageIndex];
  }
  
  function checkAnswer(btn) {
    const selectedAnswer = btn.textContent;
    const correctAnswer = correctAnswers[currentImageIndex];
  
    if (selectedAnswer === correctAnswer) {
      alert("¡Respuesta correcta!");
    } else {
      alert("Respuesta incorrecta. Intenta de nuevo.");
    }
  
    loadNewDisaster();
  }
  
  loadNewDisaster();
const messageBox = document.getElementById('message-box');
const btnNo = document.getElementById('btn-no');
const btnYes = document.getElementById('btn-yes'); // Referencia al botón "Sí"

// Array de mensajes de disculpa
const messages = [
  '¿Estás segura?',
  '¿Estás completamente segura?',
  'Por favor, por favor, por favor...',
  '¡Ándale, perdóname ya!',
  '¡No puedes decir que no!',
  'Si dices que no, eres enana...',
  '¡Enana, enana, enana!',
  '¡Esa frase!',
];

let currentIndex = 0;

btnNo.addEventListener('click', () => {
  // Mostrar el mensaje actual
  messageBox.innerHTML = `<p>${messages[currentIndex]}</p>`;
  
  // Incrementar el índice para el próximo mensaje
  currentIndex++;
  
  // Si llegamos al final del array, volver al inicio
  if (currentIndex === messages.length) {
    currentIndex = 0;
  }
});

// Función para reiniciar el mensaje cuando se presiona el botón "Sí"
btnYes.addEventListener('click', () => {
  currentIndex = 0; // Reiniciar el índice al inicio del array
  messageBox.innerHTML = `<p>Gracias por perdonarme.</p>`;
});

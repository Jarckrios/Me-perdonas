const messageBox = document.getElementById('message-box');
const btnNo = document.getElementById('btn-no');

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

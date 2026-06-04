console.log("Hallo Barbara");

const cirkel = document.querySelector('.i');
const letter = document.querySelector('.h');

cirkel.addEventListener('click', () => {
  // Verwijder eerst (+ reflow) zodat animatie altijd herstart
  letter.classList.remove('draaien');
  void letter.offsetWidth;
  letter.classList.add('draaien');
});

// Verwijder class zodra de draai-animatie klaar is
letter.addEventListener('animationend', (e) => {
  if (e.animationName === 'draai') {
    letter.classList.remove('draaien');
  }
});
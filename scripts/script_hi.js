console.log("Hallo Barbara");

const cirkel = document.querySelector('.i');
const letter = document.querySelector('.h');

// Klik op de cirkel toggle de draai-animatie op de letter h
cirkel.addEventListener('click', () => {

  if (letter.classList.contains('draaien')) {
    // Tweede klik — verwijder class, basisanimatie hervat
    letter.classList.remove('draaien');
  } else {
    // Eerste klik — herstart en voeg class toe
    letter.classList.remove('draaien');
    void letter.offsetWidth; // forceer reflow zodat animatie herstart
    letter.classList.add('draaien');
  }
});
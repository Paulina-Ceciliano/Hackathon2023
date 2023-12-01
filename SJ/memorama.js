const terms = [
    { term: '?', definition: 'Fenómeno meteorológico caracterizado por vientos de alta velocidad...' },
    { term: '?', definition: 'Movimiento brusco de la corteza terrestre causado por la liberación.' },
    { term: '?', definition: 'Torbellino violento de vientos en espiral que se origina en una tormenta y toca tierra.' },
    { term: '?', definition: 'Aumento repentino y extenso del nivel del agua en áreas normalmente secas.' },
    { term: '?', definition: 'Fuego que se propaga rápidamente en áreas boscosas, causando daños significativos a la vegetación y la vida silvestre' },
    // Agrega el resto de términos y definiciones
  ];
  
  const gameBoard = document.getElementById('gameBoard');
  const REVEALED_CLASS = 'revealed';
  const MATCHED_CLASS = 'matched';
  const HIDE_DELAY = 1000;
  const MATCH_DELAY = 500;
  
  function createCard(term, definition, index) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.dataset.index = index;
    cardElement.textContent = term;
    cardElement.addEventListener('click', () => revealCard(cardElement, definition));
    return cardElement;
  }
  
  function revealCard(cardElement, definition) {
    if (cardElement.classList.contains(REVEALED_CLASS)) return;
  
    cardElement.textContent = definition;
    cardElement.classList.add(REVEALED_CLASS);
  
    const revealedCards = document.querySelectorAll(`.${REVEALED_CLASS}`);
    if (revealedCards.length === 2) {
        const [card1, card2] = revealedCards;
        checkForMatch(card1, card2);
    }
  }
  
  function checkForMatch(card1, card2) {
    if (card1.textContent === card2.textContent) {
      console.log('Match found!');
        setTimeout(() => {
            card1.classList.add(MATCHED_CLASS);
            card2.classList.add(MATCHED_CLASS);
            checkGameCompletion();
        }, MATCH_DELAY);
    } else {
        setTimeout(() => {
            hideCards([card1, card2]);
        }, HIDE_DELAY);
    }
  }
  
  function hideCards(cards) {
    cards.forEach(card => {
        card.textContent = '?'; // Mostrar el signo de interrogación en lugar del índice
        card.classList.remove(REVEALED_CLASS);
    });
  }
  
  
  function checkGameCompletion() {
    const matchedCards = document.querySelectorAll(`.${MATCHED_CLASS}`);
    if (matchedCards.length === terms.length * 2) {
        setTimeout(() => {
            congratulate();
            resetGame();
        }, MATCH_DELAY);
    }
  }
  
  function congratulate() {
    alert('¡Felicidades! Has completado el juego de memoria.');
  }
  
  function resetGame() {
    gameBoard.textContent = '';
    createGame();
  }
  
  function createGame() {
    let cards = [...terms, ...terms];
    cards = cards.sort(() => Math.random() - 0.5);
  
    cards.forEach((card, index) => {
        const { term, definition } = card;
        const cardElement = createCard(term, definition, index);
        gameBoard.appendChild(cardElement);
    });
  }
  
  createGame();
  
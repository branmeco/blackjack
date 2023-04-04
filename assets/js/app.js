/**
 * 2C = Two of Clubs
 * 2D = Two of Diamods
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const types = ['C', 'D', 'H', 'S'];
const specials = ['A', 'J', 'K', 'Q'];

let pointsPlayer = 0;
let pointsComputer = 0;

//Html references
const btnAsk = document.querySelector('#btnAsk');

const pointsHTML = document.querySelectorAll('small');

// this function creates a new deck
const createDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let type of types) {
            deck.push(i + type);
        }
    }
    for (let type of types) {
        for (let esp of specials) {
            deck.push(esp + type);
        }
    }

    deck = _.shuffle(deck);

    console.log(deck);

    return deck;
}

createDeck();

//this function allows me to take a new card
const askCard = () => {
    const card = deck.pop();
    return card;
}

// askCard();

const valueCard = (card) => {
    const value = card.substring(0, card.length - 1);

    return (isNaN(value)) ?
        (value === 'A') ? 11 : 10
        : value * 1;

}

//Events
btnAsk.addEventListener('click', () => {
    const card = askCard();

    pointsPlayer = pointsPlayer + valueCard(card);
    pointsHTML[0].innerHTML = pointsPlayer;

});
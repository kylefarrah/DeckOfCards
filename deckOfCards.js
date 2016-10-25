var Deck = function Deck(){
	this.deck = [];
	this.reset();
}

// reset function is used both for resetting the deck, as well as creating the initial deck
Deck.prototype.reset = function(){
	this.deck = [];
	var suits = ['Spades', 'Clubs', 'Hearts', 'Diamonds'];
	var ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

	for(var suit in suits){
		for(var rank in ranks){
			var card = new Card(ranks[rank], suits[suit]);
			this.deck.push(card);
		}
	}
	return this;
}

var Card = function Card(rank, suit){
	this.suit = suit;
	this.rank = rank;
	this.string = rank + " of " + suit;
}

// Fisher-Yates shuffle
Deck.prototype.shuffle = function(){
	var m = this.deck.length, temp, i;

  	// While there remain elements to shuffle…
  	while (m > 0) {

    	// Pick a remaining element…
    	i = Math.floor(Math.random() * m);
    	m = m - 1;

    	// And swap it with the current element.
    	temp = this.deck[m];
    	this.deck[m] = this.deck[i];
    	this.deck[i] = temp;
  }

  return this.deck;
}

Deck.prototype.deal = function(){
	return this.deck.pop();
}

var Player = function Player(name){
	this.name = name;
	this.hand = [];
}

Player.prototype.draw = function(deck){
	this.hand.push(deck.deal());
	return this;
}

// discard function removes entire hand Work on only removing one card for future versions
Player.prototype.discard = function(){
	this.hand = [];
	return this;
}


// Tests and Examples to demonstrate functionality
var myDeck = new Deck();
myDeck.shuffle()
console.log(myDeck.deck);

var kyle = new Player("kyle");
kyle.draw(myDeck).draw(myDeck);
console.log(kyle.hand)

kyle.discard();
console.log(kyle.hand);
console.log(myDeck.deck);


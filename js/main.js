let noOfMatches = 0;
let noOfMismatches = 0;
let selectedCards =[];
let elapsedTime = 0;

const shuffle = (array) => {
    for(let i = array.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * i);
      [array[i], array[j]] = [array[j], array[i]];
    }
}
  
const fillGrid = () => {
    let col = 1, row = 1;
    noOfMismatches = 0;
    noOfMatches = 0;
    document.getElementById('moves').innerText = `${noOfMismatches} Moves`;
    const items = [...document.getElementsByClassName('grid-item')];
    resetCards(items);
    shuffle(items);
    setTimeout(exposeCards, 1000, items);
    setTimeout(resetCards, 3000, items);
    const grid = document.getElementById('grid');
    items.forEach(item => {
        item.style.gridArea = `${row} / ${col}`;
        col++;
        if(col>4){
          col=1;
          row++;
        }
    });
    countUp(new Date, 'info'); 
}
  
const exposeCards = (cards) => cards.forEach(card => card.firstElementChild.style.visibility = 'hidden');
const resetCards = (cards) => cards.forEach(card => card.firstElementChild.style.visibility = 'visible');

const cards =  document.querySelectorAll('.grid-item');

const cardsMach = () => selectedCards[0].getAttribute('card-name') === selectedCards[1].getAttribute('card-name');

const flipCard = () => {
  const card = event.target;
  if(card.classList.contains('back-face')){
    card.style.visibility = 'hidden';
    selectedCards.push(card.parentElement);
  }
}

const play = () => {
  flipCard();
  if(selectedCards.length === 2){
    if(!cardsMach()){
        setTimeout(resetCards, 1000, selectedCards);
        noOfMismatches++;
    }
    else{
      noOfMatches++;
    }
    document.getElementById('moves').innerText = `${noOfMatches + noOfMismatches} Moves`;
    if(noOfMatches === 8)    finishGame();
    selectedCards = [];
  }
}

 const finishGame = () => {
    if(confirm(`Congratulations, you wone after ${noOfMatches + noOfMismatches} moves!
    Do you want to replay?`))
      setTimeout(fillGrid, 5000);
 }

const countUp = (countFrom, id) => {
    countFrom = new Date(countFrom).getTime();
    var now = new Date(),
        countFrom = new Date(countFrom),
        timeDifference = (now - countFrom);
      
    var secondsInADay = 60 * 60 * 1000 * 24,
        secondsInAHour = 60 * 60 * 1000;
      
    hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
    mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
    secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

    var idEl = document.getElementById(id);
    
    idEl.getElementsByClassName('time')[0].innerHTML = `${hours}:${mins}:${secs}`;

    clearTimeout(countUp.interval);
    countUp.interval = setTimeout(function(){ countUp(countFrom, id); }, 1000);
}
 
fillGrid();
cards.forEach(card => card.addEventListener('click', play));

 
            



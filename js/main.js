let noOfMoves = 0;
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
      noOfMoves = 0;
      noOfMatches = 0;
      document.getElementById('moves').innerText = `${noOfMoves} Moves`;
      const items = [...document.getElementsByClassName('grid-item')];
      resetCards(items);
      shuffle(items);
      setTimeout(exposeCards, 1000, items);
      //items.forEach(card => card.firstElementChild.style.visibility = 'hidden');
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
  }
  
 const exposeCards = (cards) => cards.forEach(card => card.firstElementChild.style.visibility = 'hidden');
 const cards =  document.querySelectorAll('.grid-item');

 const cardsMach = () => selectedCards[0].getAttribute('card-name') === selectedCards[1].getAttribute('card-name');

 const flipCard = () => {
   const card = event.target;
   if(card.classList.contains('back-face')){
      card.style.visibility = 'hidden';
      selectedCards.push(card.parentElement);
   }
 }

 const resetCards = (cards) => cards.forEach(card => card.firstElementChild.style.visibility = 'visible');
 const play = () => {
   flipCard();
   if(selectedCards.length === 2){
     if(!cardsMach()){
        setTimeout(resetCards, 1000, selectedCards);
        noOfMoves++;
        document.getElementById('moves').innerText = `${noOfMoves} Mismatches`;
     }
     else{
       noOfMatches++;
       if(noOfMatches === 8){
         if(confirm(`Congratulations, you wone after ${noOfMoves + 8} moves!
         Do you want to replay?`)){
           setTimeout(fillGrid, 1000);
         }
       }
     }
     selectedCards = [];
   }
 }
 
 fillGrid();
 cards.forEach(card => card.addEventListener('click', play));


# **Memory Card Game**

## OVERVIEW
This app was created as the solo project for the Chingu prework phase.

APP LINK: https://sameadis.github.io/Memory-card-game/

## CHALLENGE
Match cards in less time and with less moves.

## INSTRUCTIONS
There are eight sets of unique cards in the game. All the cards will be visible for about one minute at the start of the game, then they will be covered. Try to remember the positions of all the paires and select pairs of cards that match. If your selections are a match, they remain uncovered; but if they don't much, both cards will flip over and become covered. 
When all the cards are exposed, you win! The smaller the time taken and the number of moves the better; it means you have a better memory.

## HOW I BUILT THE GAME
- I manipulated the DOM with Vanilla Javascript, and also styled the game.
- created cards which have eight unique front design and share the same back-face.
- used css-grid to position the cards in a square grid.
- the cards positions reshuffle every time the page is refreshed or game restarted.
- a counter will count the time elapsed in hours, minutes, and seconds. Assumes the game won't last a day!
- at the end of the game, a prompt will ask the user if he wants to reply. If he does, the game will reshuffle.

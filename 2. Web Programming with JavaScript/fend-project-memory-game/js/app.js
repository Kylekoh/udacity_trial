/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976


// Declare the variables that used in this project
let lists = [];
let cards = ['fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-leaf', 'fa-bicycle', 'fa-bomb',
'fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-leaf', 'fa-bicycle', 'fa-bomb'];
const cardsContainer = document.getElementById('deck_container').getElementsByTagName('li');
const shuffledCards = shuffle(cards);



// Before start, shuffle cards randomly
// the icon list in variable 'cards' will be randomly added to card.
let num = 0;
for(i=0; i< cardsContainer.length; i++){ 
    cardsContainer[i].getElementsByTagName('i')[0].classList.add(shuffledCards[num]);
    num++;
}


// At the beginning, when click the start button clicked, the cards will be open for 10 seconds. 
// After frist trial of clicking start button, start button will be disabled.
let number = 1
document.getElementsByClassName('start')[0].addEventListener('click',function(){
    if(number === 1){
    startFlip(cardsContainer);
    number++;
    }else{
        return false;
    }
},false)

// If restart button is clicked, it redirect to 'index.html'(Back to the beginning) 
document.getElementsByClassName('restart')[0].addEventListener('click', function(e){
    window.location.href = "index.html";
}, false)


document.getElementById('deck_container').addEventListener("click", function(e){ 
    let targetValue = e.target;
    // The "open" and "show" classes will be added in the class it belong to.      
    openCard(targetValue);
    // clicked icon will be recognized by its icon class name.
	let clickedClass = targetValue.children[0].classList[1];
    lists.push([clickedClass.toString(), e.target.id]);
    // if 'lists' length is 2, two clicked icon will be compared whether it's same or not.
    if(lists.length === 2){
        // set condtion to get the same 'class' but different 'id'
        // e.preventDefault();
        if(lists[0][0] === lists[1][0] && lists[0][1] != lists[1][1]){
        addCount();
        let matched1 = document.getElementById(lists[0][1]);
        let matched2 = document.getElementById(lists[1][1]);
        matchAnimate(matched1);
        matchAnimate(matched2);
        afterMatch(matched1);
        afterMatch(matched2);
        lists = [];
        }else if (lists[0][1] === lists[1][1]){
            lists.pop([clickedClass.toString(), e.target.id]);
            lists = [];
        }else{
            // if two cards aren't same the cards will be closed with animation effect.
            addCount();
            let matched1 = document.getElementById(lists[0][1]);
            let matched2 = document.getElementById(lists[1][1]);
            unmatchAnimate(matched1);
            unmatchAnimate(matched2);
            closeCard(matched1);
            closeCard(matched2);            
            lists = [];
        }
    }   
    // If every game is finished, the screen will be redirect to 'complete.html' to show result.
    let matchedComplete = document.getElementsByClassName('match');
    if(matchedComplete.length === 16){
    stop();    
    window.location.href = "complete.html";      
    }
}, false);


function openCard(object){
    object.classList.add("open", "show");
}

// after clicked two cards matched, disable click function to prevent heappening click event with another card.
function afterMatch(object){
    object.style.pointerEvents = 'none';
}

function closeCard(object){
    object.classList.remove("open", "show")
}


function startFlip(x){
    for(i=0; i<x.length; i++){
        x[i].classList.add('open', 'show');
    setTimeout(function(){
        for(i=0; i<x.length; i++){
        x[i].classList.remove('open', 'show');
    }},10000);
}
start();
};


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
};


// start, end functions are for calculating running time.
// start function executes when start button clicked
// end function executes when game is over.


// When two continuous clicked cards are match, the two cards adjusted 'hvr-pulse-grow' effect.
function matchAnimate(x){
    x.classList.add('match', 'hvr-pulse-grow');
    setTimeout(function(){
        x.classList.remove('hvr-pulse-grow');
    },400);
}


// When two continuous clicked cards are unmatch, the two cards adjusted 'hvr-wobble-horizontal' effect.
// and flip over just like before.
function unmatchAnimate(x){
    x.classList.add('unmatch', 'hvr-wobble-horizontal');
    setTimeout(function(){
        x.classList.remove('unmatch', 'hvr-wobble-horizontal');
    },400);
}


// Get the number how many movement to finish the game.  
let numOfMatches = 1;
function addCount(){
    document.getElementsByClassName('moves')[0].innerHTML = numOfMatches;
    passValue(numOfMatches);
    numOfMatches++
}


// The result of counting movement will be send 'complete.html' to show final result.
function passValue(num) {
    rateStar(num); 
    localStorage.setItem("moveResult",num);
}


// Rate star when movement number reach at 8, 12, 16
// If number of movement reach at over 16, it will return no(0) star.
// and result of num of star will be send to 'complete.html'.
function rateStar(num){
    let stars = document.getElementsByClassName('stars')[0].getElementsByTagName('li');
    let numOfStar = 3;
    if (num === 8){
        stars[2].getElementsByTagName('i')[0].classList.remove('fa-star');
        stars[2].getElementsByTagName('i')[0].classList.add('fa-star-o');
        numOfStar = 2       
    }
    else if (8 < num && num < 12){
        numOfStar = 2; 
    }
    else if (num === 12){
        stars[1].getElementsByTagName('i')[0].classList.remove('fa-star');
        stars[1].getElementsByTagName('i')[0].classList.add('fa-star-o');
        numOfStar = 1;      
    }
    else if (12< num && num < 16){
        numOfStar = 1; 
    }
    else if (16 <= num){
        stars[0].getElementsByTagName('i')[0].classList.remove('fa-star');
        stars[0].getElementsByTagName('i')[0].classList.add('fa-star-o');
        numOfStar = 0;      
    }
    localStorage.setItem("starResult", numOfStar);    
};


let timer = document.getElementById('timer');

var watch = new Stopwatch(timer);


function start(){
    watch.start();
}

function stop(){
    watch.stop();
    console.log(result);
    localStorage.setItem("timeResult", result);
}



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

var addbutton = document.getElementById("addcard");
addcard.addEventListener("click", function(){
 var cards = document.getElementById("cards");
 var clone = cards.firstElementChild.cloneNode(true);
 cards.appendChild(clone); 
});

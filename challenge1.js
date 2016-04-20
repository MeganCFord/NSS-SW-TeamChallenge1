var createButton = document.getElementById("createCard");

var cardContainer = document.getElementById("cardContainer")

var createCard = function () {
  var card = document.createElement("div");
  cardContainer.appendChild(card); //put the card as a child into the container.
  card.className = "card";
  return card;
}

var createCardText = function () {
  //grabs the inputted text after the submit button is clicked, so the html card can implement it. 
  var inputText = document.getElementById("cardContent").value;

  var card = createCard();

  card.innerHTML += 

    "<label>Text Color" +
      "<input type='color' name = 'textColor' class='textColor'>" +
    "</label>" +
    "<label>Background Color" +
      "<input type='color' class='backgroundColor'>" +
    "</label>" + 
    "<input type='button' class='delete' value='Delete'>" +
    "<h3 class=theText>" + inputText + "</h3>";

  //select the most recent card (for creating a background behind all of it)
   var allTheCards = document.getElementsByClassName("card");
   var lastCard = allTheCards[allTheCards.length-1];

   //select the most recent background color picker
   var backgroundReceiver = document.getElementsByClassName("backgroundColor");
   var backgroundColor = backgroundReceiver[backgroundReceiver.length-1];
  
  //change background color
   var assignBackground = function(event) {
    var parentDiv = event.srcElement.parentElement.parentElement;
    parentDiv.style.backgroundColor = event.srcElement.value;
    }
  //background color event listener
  backgroundColor.addEventListener("change", assignBackground);


   //select the most recent text color picker
   var textReceiver = document.getElementsByClassName("textColor");
   var textColor = textReceiver[textReceiver.length-1];

  //Change text color
  var assignTextColor = function(event) {
    var parentDiv = event.srcElement.parentElement.parentElement;

     parentDiv.getElementsByClassName("theText")[0].style.color= event.srcElement.value;
  }
  //text color event listener
  textColor.addEventListener("change", assignTextColor);
}

//card creation event listener
createButton.addEventListener("click", createCardText);

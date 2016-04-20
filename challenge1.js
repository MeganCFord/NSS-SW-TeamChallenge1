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
    //here is the text color picker.
      "<input type='color' name = 'textColor' class='textColor'>" +
    "</label>" +
    //here is the background color picker.
    "<label>Background Color" +
      "<input type='color' class='backgroundColor'>" +
    "</label>" + 
    //here is the delete button.
    "<input type='button' class='delete' value='Delete'>" +
    //here is where the input text goes.
    "<h3 class=theText>" + inputText + "</h3>";


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

  //delete button function to delete card.
  var deleteCard = function(event) {
    var cardDiv = event.srcElement.parentElement;
    cardContainer.removeChild(cardDiv);
  }
  //select the most recent delete button
  var deleteButtons = document.getElementsByClassName("delete");
  var deleteButton = deleteButtons[deleteButtons.length-1];

  //delete button event listener
  deleteButton.addEventListener("click", deleteCard);
}  
  


//card creation event listener
createButton.addEventListener("click", createCardText);

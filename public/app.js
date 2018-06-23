$(document).ready(function () {

  $('#scrape').on('click', function() {
    $('#answer-container').empty();
    articleDisplay()
  })


function articleDisplay () {
  $.ajax({
    url: '/articles',
    method: 'GET',
  }).then(function (response){
    createCard(response)
  })}

function createCard(response) {
  response.forEach(element => {
  var newResultCard = $('<div class = "card">');
  var cardTitle = $('<div class="card-header text-center">');
  var cardInfo = $('<p class = "text-center">');
  var cardImage = $('<img>');
  var cardButton = $('<a class = "btn btn-default">');
  var verticalSpace = $('<br>')
  var cardName = element.title
  var cardLink = element.link 
  cardTitle.text(cardName);
  newResultCard.append(cardTitle);
  cardButton.text('Full Article');
  cardButton.attr('href', cardLink);
  newResultCard.append(cardButton);
  $('#answer-container').append(newResultCard)
  $('#answer-container').append(verticalSpace);
  });
  

}

});
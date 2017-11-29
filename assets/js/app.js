var topics = [
"wolf",
"TIGER",
"BEAR",
"LION",
"DOG",
"Cheatah",
"LEOPARD",
"PANDA",
"EAGLE",
"LYNX",
"PANTHER",
"HYENA",
"FOX"
];

for (var i = 0; i < topics.length; i++) {
	var button = $("<button>").text(topics[i]);
	button.attr("data-predator", topics[i]);
	button.addClass("predator-button");
	$("#button-group").append(button);
}

$("#add-predator-button").on("click", function(e) {
	e.preventDefault();
	var alreadyExist = false;
	if(topics.indexOf($("#new-predator-input").val()) !== -1) {
		alreadyExist = true;
	}

	if($("new-predator-input").val() !=="" && alreadyExist === false) {
		var newPredator = $("#new-predator-input").val().toLowerCase();
		topics.push(newPredator);
		var button = $("<button>").text(newPredator);
		button.attr("data-predator", newPredator);
		button.addClass("predator-button");
		$("#button-group").append(button);
	}

	$("#new-predator-input").val("");
});

$(document).on("click", ".predator-button", function() {
	var predator = $(this).attr("data-predator");
	var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + predator;
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {
		var results = response.data;
		console.log(results);

		var resultsContainerSection = $("<section class='result-container'>");

		results.fixed_height_small_url
		var predatorImg = $("<img class='result'>");
		predatorImg.attr("src", results.fixed_height_small_url);
		resultsContainerSection.append(predatorImg);

		// for (var i = 0; i < results.length; i++) {
		// 	var singleResultDiv = $("<div class= 'result-container'>");

		// 	var rating = results[i].rating;

		// 	var p = $("<p>").text("Rating: " + rating);

		// 	var predatorImg = $("<img class='result'>");
		// 	predator.attr("src", results[i].images.fixed_height_still.url);
  //   		predator.attr("data-state", "still");
  //   		predator.attr("data-still", results[i].images.fixed_height_still.url);
  //   		predator.attr("data-animate", results[i].images.fixed_height.url);

  //   		singleResultDiv.prepend(predatorImg);
  //   		singleResultDiv.prepend(p);

  //   		resultsContainerSection.prepend(singleResultDiv);
		// }
		$("#predators-group").prepend(resultsContainerSection);
	});
});




var hiddenElements = document.getElementsByClassName('hidden'); //array 
var num = 1;
var i;

document.getElementById('create-twit-button').onclick = function(){ //open up modal
	for(i =0; i < hiddenElements.length; i++){
		hiddenElements[i].style.display = 'block';
	}
}

document.getElementsByClassName("modal-cancel-button")[0].onclick = function(){ //cancel button
	for(i =0; i < hiddenElements.length; i++){
		hiddenElements[i].style.display = 'none';
	}
	var twitText = document.getElementById('twit-text-input');
	var authorText = document.getElementById('twit-attribution-input');

	twitText.value = "";
	authorText.value = "";
}

document.getElementsByClassName("modal-close-button")[0].onclick = function(){ //cancel button
	for(i =0; i < hiddenElements.length; i++){
		hiddenElements[i].style.display = 'none';
	}
	var twitText = document.getElementById('twit-text-input');
	var authorText = document.getElementById('twit-attribution-input');

	twitText.value = "";
	authorText.value = "";
}

document.getElementsByClassName("modal-accept-button")[0].onclick = function(){ //click create twit button
	for(i =0; i < hiddenElements.length; i++){
		hiddenElements[i].style.display = 'none';
	}
}

document.getElementsByClassName("modal-accept-button")[0].onclick = function(){ //Accept tweet
	var twitText = document.getElementById('twit-text-input');
	var authorText = document.getElementById('twit-attribution-input');

	//Error handling///////////////////////////////////////
	if(!twitText.value || !authorText.value){ //if either tweet or author are left blank
		alert("You must input text for both the twit and the author before submitting!");
		return;
	}

	///////// M A N U F A C T U R I N G /////////////////////////////////////////////////////////////////////
	var twit = document.createElement("article"); //class twit
	var divTwitIcon = document.createElement("div"); // class twit-icon
	var bullhorn = document.createElement("i"); // class fas fa-bullhorn
	var divTwitContent = document.createElement("div"); //class twit-content
	var twitContent = document.createElement("p"); // class twit-text
	var authorContent = document.createElement("p"); // class twit-attribution
	var authorLink = document.createElement("a"); //class N/A: (encassing for text)

	/////////////// F I L L I N G   I N   C O N T E N T ////////////////////////////////////////////////////
	twit.classList.add("twit");
		divTwitIcon.classList.add("twit-icon");
			bullhorn.classList.add("fas");
			bullhorn.classList.add("fa-bullhorn");

		divTwitContent.classList.add("twit-content");
			twitContent.classList.add("twit-text");
				twitContent.textContent = twitText.value;
			authorContent.classList.add("twit-attribution");
				authorLink.setAttribute('href', '#');
				authorLink.textContent = authorText.value;

	/////////////// A S S E M B L I N G ///////////////////////
		divTwitIcon.appendChild(bullhorn); //2b

			authorContent.appendChild(authorLink); //3a

		divTwitContent.appendChild(twitContent); //2a
		divTwitContent.appendChild(authorContent); //2a

	twit.appendChild(divTwitIcon); //1b
	twit.appendChild(divTwitContent); //1a             twit is the master node to append as a child to container
	
/////////////////////////////////////////////////////////////////////////////////////////////////////

	var container = document.getElementsByClassName("twit-container")[0];
	container.appendChild(twit);
	///////////////////////////////////////////
	for(i =0; i < hiddenElements.length; i++){
		hiddenElements[i].style.display = 'none';
	}
	//////////////////////////////////////
	twitText.value = "";
	authorText.value = "";
}

document.getElementById('navbar-search-button').onclick = function(){
	var searchInput = document.getElementById('navbar-search-input');
	var twits = document.getElementsByClassName("twit-text");
	var authors = document.getElementsByClassName("twit-attribution");
	var i;
	var text;
	var author;
	for(i = 0; i < twits.length; i++){ //for every twit
		text = twits[i].textContent;
		author = authors[i].textContent;
		if(!text.includes(searchInput.value) && !author.includes(searchInput.value)){
			twits[i].parentNode.parentNode.classList.add("delete");
		}
	}

	var elementsDelete = document.getElementsByClassName("delete");
	while (elementsDelete[0]) {
    	elementsDelete[0].parentNode.removeChild(elementsDelete[0]);
	}
}
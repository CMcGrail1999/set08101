var facts = ["The Mona Lisa wasn’t particularly famous until 1911, when it was stolen from the Louvre and went missing for two years.", 
			"The best-selling novel of all time—by far—is Miguel de Cervantes’s 1615 work Don Quixote: probably more than 500 million copies have been sold.",
			"Nearly 500 years before Columbus, Viking explorers lived in a settlement in what is now Newfoundland, Canada.",
			"The U.S.S.R. was the first country to successfully land a spacecraft on the Moon. Luna 9, an unmanned probe, arrived three years before Neil Armstrong.",
			"Despite its size, China has only one time zone—Beijing time."]

function generateFact() {
	var randomNumber = Math.floor(Math.random() * (facts.length));
	document.getElementById('displayFact').innerHTML = facts[randomNumber];
}
window.addEventListener('load', function() {
	//stran nalozena
	
	var prijavi = function(event){
		var uporabnik = document.querySelector("#uporabnisko_ime").value;
		document.getElementById("uporabnik").innerHTML = uporabnik;
		document.querySelector(".pokrivalo").style.visibility = "hidden";
	}
	
	document.querySelector("#prijavniGumb").addEventListener('click',prijavi);
	
	function DodajOpomnik(event){
		var nazivOpomnika = document.getElementById("naziv_opomnika").value;
		var casOpomnika = document.getElementById("cas_opomnika").value;
		document.getElementById("naziv_opomnika").value = '';
		document.getElementById("cas_opomnika").value ='';
		document.getElementById("opomniki").innerHTML += "<div class='opomnik'><div class='naziv_opomnika'>" + nazivOpomnika + "</div><div class='cas_opomnika'> Opomnik čez <span>" + casOpomnika + "</span> sekund.</div></div>"
		
	}
	
	document.querySelector("#dodajGumb").addEventListener('click',DodajOpomnik);
	

	
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (var i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});

